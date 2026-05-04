import type { Lang } from '@i18n/index';
import { altLangUrl, HTML_LANG } from '@i18n/index';

export interface SeoProps {
  lang: Lang;
  pathname: string; // e.g. "/it/manifesto"
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}

export const buildSeo = (props: SeoProps, siteUrl: string) => {
  const url = new URL(props.pathname, siteUrl).toString().replace(/\/$/, '');
  const altUrl = new URL(altLangUrl(props.lang, props.pathname), siteUrl)
    .toString()
    .replace(/\/$/, '');
  const image = props.image
    ? new URL(props.image, siteUrl).toString()
    : new URL('/og-image.svg', siteUrl).toString();
  return {
    canonical: url,
    altUrl,
    image,
    htmlLang: HTML_LANG[props.lang],
    altLang: HTML_LANG[props.lang === 'it' ? 'en' : 'it'],
    altCode: props.lang === 'it' ? 'en' : 'it',
    type: props.type ?? 'website',
    keywords: props.keywords ?? [],
  };
};
