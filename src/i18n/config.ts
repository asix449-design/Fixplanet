export const locales = ['en', 'ru', 'pl', 'lv'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const otherLocales = locales.filter(
  (locale): locale is Exclude<Locale, 'en'> => locale !== defaultLocale,
);

export const LOCALE_COOKIE = 'fp-locale';

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; hreflang: string }
> = {
  en: { htmlLang: 'en', ogLocale: 'en_GB', hreflang: 'en' },
  ru: { htmlLang: 'ru', ogLocale: 'ru_RU', hreflang: 'ru' },
  pl: { htmlLang: 'pl', ogLocale: 'pl_PL', hreflang: 'pl' },
  lv: { htmlLang: 'lv', ogLocale: 'lv_LV', hreflang: 'lv' },
};

export const localeStaticPaths = () =>
  otherLocales.map((locale) => ({ params: { locale } }));

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function resolveLocale(
  currentLocale?: string,
  cookie?: string,
): Locale {
  if (isLocale(currentLocale)) return currentLocale;
  if (isLocale(cookie)) return cookie;
  return defaultLocale;
}

/** Strip a leading /ru|/pl|/lv prefix so /ru/about → /about */
export function stripLocalePrefix(pathname: string): string {
  const [path, hash] = pathname.split('#');
  const clean = path.replace(/\/+$/, '') || '/';
  const segments = clean.split('/').filter(Boolean);
  const rest =
    segments[0] && isLocale(segments[0]) && segments[0] !== defaultLocale
      ? `/${segments.slice(1).join('/')}`
      : clean;
  const normalized = rest === '/' || rest === '' ? '/' : rest;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Prefix a site-root path (/about, /solutions#slug) for the given locale. */
export function localizePath(path: string, locale: Locale): string {
  const unprefixed = stripLocalePrefix(path);
  const [pathname, hash] = unprefixed.split('#');
  const clean = pathname.replace(/\/+$/, '') || '/';
  const localized =
    locale === defaultLocale
      ? clean
      : clean === '/'
        ? `/${locale}/`
        : `/${locale}${clean}`;
  return hash ? `${localized}#${hash}` : localized;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  return localizePath(pathname, locale);
}
