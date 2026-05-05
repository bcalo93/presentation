import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const htmlFiles = [];

async function walkHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkHtmlFiles(fullPath);
      continue;
    }

    if (entry.isFile() && fullPath.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
}

function toPosixPath(value) {
  return value.split(path.sep).join("/");
}

function toSitePath(filePath) {
  const relativePath = toPosixPath(path.relative(distDir, filePath));

  if (relativePath === "index.html") {
    return "/";
  }

  if (relativePath.endsWith("/index.html")) {
    return `/${relativePath.slice(0, -"/index.html".length)}`;
  }

  return `/${relativePath}`;
}

function extractAttributeValues(html, attributeName) {
  const matcher = new RegExp(`${attributeName}=(["'])(.*?)\\1`, "g");
  const values = [];

  for (const match of html.matchAll(matcher)) {
    values.push(match[2]);
  }

  return values;
}

function collectIds(html) {
  return new Set(extractAttributeValues(html, "id"));
}

async function pathExists(targetPath) {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveLocalPath(urlPath) {
  const normalizedPath = decodeURIComponent(urlPath);
  const trimmedPath = normalizedPath.startsWith("/")
    ? normalizedPath.slice(1)
    : normalizedPath;

  if (trimmedPath === "") {
    const rootIndexPath = path.join(distDir, "index.html");
    if (await pathExists(rootIndexPath)) {
      return rootIndexPath;
    }
  }

  const directPath = path.join(distDir, trimmedPath);
  if (await pathExists(directPath)) {
    const directPathStats = await stat(directPath);
    if (directPathStats.isDirectory()) {
      const nestedIndexPath = path.join(directPath, "index.html");
      if (await pathExists(nestedIndexPath)) {
        return nestedIndexPath;
      }
    }

    return directPath;
  }

  if (!path.extname(trimmedPath)) {
    const nestedIndexPath = path.join(distDir, trimmedPath, "index.html");
    if (await pathExists(nestedIndexPath)) {
      return nestedIndexPath;
    }

    const htmlPath = path.join(distDir, `${trimmedPath}.html`);
    if (await pathExists(htmlPath)) {
      return htmlPath;
    }
  }

  return null;
}

function shouldSkipLink(value) {
  return (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("//") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    value.startsWith("data:") ||
    value.startsWith("javascript:")
  );
}

async function main() {
  if (!(await pathExists(distDir))) {
    console.error(
      "dist/ was not found. Run `yarn build` before checking links.",
    );
    process.exit(1);
  }

  await walkHtmlFiles(distDir);

  const pageIds = new Map();

  for (const filePath of htmlFiles) {
    const html = await readFile(filePath, "utf8");
    pageIds.set(filePath, collectIds(html));
  }

  const errors = [];

  for (const filePath of htmlFiles) {
    const html = await readFile(filePath, "utf8");
    const sitePath = toSitePath(filePath);
    const links = [
      ...extractAttributeValues(html, "href"),
      ...extractAttributeValues(html, "src"),
    ];

    for (const rawLink of links) {
      if (!rawLink || shouldSkipLink(rawLink)) {
        continue;
      }

      let linkUrl;
      try {
        linkUrl = new URL(rawLink, `https://quality-check.local${sitePath}`);
      } catch {
        errors.push(`${sitePath} -> invalid URL syntax: ${rawLink}`);
        continue;
      }

      const resolvedFilePath = await resolveLocalPath(linkUrl.pathname || "/");
      if (!resolvedFilePath) {
        errors.push(`${sitePath} -> missing target: ${rawLink}`);
        continue;
      }

      if (linkUrl.hash) {
        const targetHash = decodeURIComponent(linkUrl.hash.slice(1));
        const ids = pageIds.get(resolvedFilePath) ?? new Set();
        if (!ids.has(targetHash)) {
          errors.push(
            `${sitePath} -> missing anchor "${targetHash}" in ${rawLink}`,
          );
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error("Broken local links found:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `Checked ${htmlFiles.length} HTML files and found no broken local links.`,
  );
}

await main();
