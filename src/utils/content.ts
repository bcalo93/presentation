import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n/config";

export async function getHomeEntry(locale: Locale) {
  const entries = await getCollection(
    "home",
    ({ data }) => data.locale === locale,
  );
  const entry = entries[0];

  if (!entry) {
    throw new Error(`Missing home content for locale: ${locale}`);
  }

  return entry;
}

export async function getLocalizedProjectByPath(locale: Locale, path: string) {
  const entries = await getCollection(
    "projects",
    ({ data }) => data.locale === locale && data.path === path,
  );
  return entries[0];
}

export function sortCollection<
  T extends CollectionEntry<"experience" | "projects" | "education">,
>(items: T[]) {
  items.sort((left, right) => left.data.order - right.data.order);
  return items;
}
