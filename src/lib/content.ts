import type { CollectionEntry } from 'astro:content';
import type { LocaleCode } from './site';
import { pathFor, supportedLocales } from './site';

export function pagesForLang(entries: CollectionEntry<'pages'>[], lang: LocaleCode) {
  return entries
    .filter((entry) => entry.data.lang === lang && !entry.data.draft)
    .sort((a, b) => {
      const order = ['home', 'about', 'reports', 'media', 'affiliate-links'];
      return order.indexOf(a.data.pageSlug) - order.indexOf(b.data.pageSlug);
    });
}

export function navItems(entries: CollectionEntry<'pages'>[], lang: LocaleCode) {
  return pagesForLang(entries, lang).map((entry) => ({
    slug: entry.data.pageSlug,
    label: entry.data.navLabel,
    href: pathFor(lang, entry.data.pageSlug),
  }));
}

export function alternateLinks(entries: CollectionEntry<'pages'>[], currentSlug: string) {
  return supportedLocales.map((lang) => {
    const localized = entries.find(
      (entry) => entry.data.lang === lang && entry.data.pageSlug === currentSlug,
    );
    return {
      lang,
      href: pathFor(lang, localized ? currentSlug : 'home'),
    };
  });
}
