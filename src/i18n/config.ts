export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const projectSegmentByLocale: Record<Locale, string> = {
  en: "projects",
  es: "proyectos",
};

export const ogLocaleByLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getHomePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function getProjectPath(locale: Locale, slug: string) {
  const segment = projectSegmentByLocale[locale];
  return locale === defaultLocale
    ? `/${segment}/${slug}`
    : `/${locale}/${segment}/${slug}`;
}

export function getSwitcherPath(
  locale: Locale,
  page: "home" | "project",
  slug?: string,
) {
  if (page === "project" && slug) {
    return getProjectPath(locale, slug);
  }

  return getHomePath(locale);
}
