export const locales = {
  en: {
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr',
    brandMark: 'Forum',
    nav: {
      home: 'Home',
      about: 'About the Forum',
      reports: 'Data and Advocacy',
      language: 'Language',
      portal: 'Community Health Portal',
      actionTitle: 'Need support navigating health services in East Jerusalem?',
      actionPrimary: 'Report a Barrier',
      actionSecondary: 'Contact the Forum',
      trustSources: 'Official Source Pages',
      trustDocs: 'Public Documents',
    },
    footer: 'Forum for Health Equality in East Jerusalem',
  },
  he: {
    label: 'Hebrew',
    nativeLabel: 'עברית',
    dir: 'rtl',
    brandMark: 'הפורום',
    nav: {
      home: 'דף הבית',
      about: 'אודות הפורום',
      reports: 'נתונים ומדיניות',
      language: 'שפה',
      portal: 'פורטל בריאות קהילתי',
      actionTitle: 'זקוקים לסיוע בניווט שירותי בריאות במזרח ירושלים?',
      actionPrimary: 'דיווח על חסם שירות',
      actionSecondary: 'יצירת קשר עם הפורום',
      trustSources: 'עמודי מקור רשמיים',
      trustDocs: 'מסמכים ציבוריים',
    },
    footer: 'הפורום לשוויון בבריאות במזרח ירושלים',
  },
  ar: {
    label: 'Arabic',
    nativeLabel: 'العربية',
    dir: 'rtl',
    brandMark: 'المنتدى',
    nav: {
      home: 'الرئيسية',
      about: 'عن المنتدى',
      reports: 'بيانات ومناصرة',
      language: 'اللغة',
      portal: 'بوابة الصحة المجتمعية',
      actionTitle: 'هل تحتاجون إلى دعم في الوصول إلى خدمات الصحة في القدس الشرقية؟',
      actionPrimary: 'الإبلاغ عن عائق',
      actionSecondary: 'التواصل مع المنتدى',
      trustSources: 'صفحات مصادر رسمية',
      trustDocs: 'وثائق عامة',
    },
    footer: 'منتدى المساواة في الصحة في القدس الشرقية',
  },
} as const;

export type LocaleCode = keyof typeof locales;

export const supportedLocales = Object.keys(locales) as LocaleCode[];
const BASE_URL = import.meta.env.BASE_URL ?? '/';
const BASE_PREFIX = BASE_URL === '/' ? '' : BASE_URL.replace(/\/$/, '');

export function isLocale(value: string | undefined): value is LocaleCode {
  return Boolean(value && value in locales);
}

export function withBase(href: string): string {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
  if (!href.startsWith('/')) return href;
  if (BASE_PREFIX && href.startsWith(`${BASE_PREFIX}/`)) return href;
  return `${BASE_PREFIX}${href}`;
}

export function pathFor(lang: LocaleCode, slug: string): string {
  if (slug === 'home') {
    return withBase(`/${lang}/`);
  }

  return withBase(`/${lang}/${slug}/`);
}

export function pageKey(slug: string) {
  if (slug === 'home') return 'home';
  if (slug === 'about') return 'about';
  if (slug === 'reports') return 'reports';
  if (slug === 'affiliate-links') return 'affiliate-links';
  return null;
}
