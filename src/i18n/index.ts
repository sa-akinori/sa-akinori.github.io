import ja from './ja.json';
import en from './en.json';

export const translations = { ja, en } as const;
export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof ja;
export const defaultLang: Lang = 'ja';
export const locales: readonly Lang[] = ['ja', 'en'];

export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  if (segment === 'en') return 'en';
  return 'ja';
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };
}

export function pathFor(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ja') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

export function altLangUrl(url: URL, currentLang: Lang): string {
  const path = url.pathname;
  if (currentLang === 'ja') {
    return path === '/' ? '/en/' : `/en${path}`;
  }
  const stripped = path.replace(/^\/en/, '');
  return stripped === '' ? '/' : stripped;
}
