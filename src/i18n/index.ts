/**
 * Lightweight i18n — all UI strings live here, exhibitions/photographers/models
 * get bilingual fields directly inside their content collection entries.
 */

export type Lang = 'it' | 'en';

export const LANGS: Lang[] = ['it', 'en'];
export const DEFAULT_LANG: Lang = 'it';

export const LANG_LABELS: Record<Lang, string> = {
  it: 'Italiano',
  en: 'English',
};

export const HTML_LANG: Record<Lang, string> = {
  it: 'it-IT',
  en: 'en-GB',
};

const dictionaries = {
  it: {
    site_title: 'Oltre il Visibile',
    site_tagline: 'Una mostra itinerante di fine art nude',
    nav: {
      home: 'Home',
      manifesto: 'Manifesto',
      exhibitions: 'Mostre',
      photographers: 'Fotografi',
      models: 'Modelli',
      partners: 'Partner',
      contact: 'Contatti',
    },
    cta: {
      discover: 'Scopri',
      read_more: 'Continua a leggere',
      view_exhibition: 'Vedi la mostra',
      view_profile: 'Vedi profilo',
      open_map: 'Apri sulla mappa',
      subscribe: 'Iscriviti',
      menu: 'Menu',
      close: 'Chiudi',
      back: 'Torna indietro',
      all_photographers: 'Tutti i fotografi',
      all_models: 'Tutti i modelli',
      all_exhibitions: 'Tutte le mostre',
    },
    home: {
      eyebrow: 'Mostra itinerante 2026 — 2027',
      hero_line_1: 'Oltre',
      hero_line_2: 'il Visibile',
      hero_subline: 'Il corpo come paesaggio. La nudità come soglia.',
      manifesto_eyebrow: 'Manifesto',
      manifesto_excerpt:
        "Oltre il Visibile non è una mostra sul nudo. È una mostra sulla soglia tra ciò che mostriamo e ciò che resta. Sul corpo come geografia, sull'intimità senza spettacolo, sullo sguardo come responsabilità.",
      manifesto_cta: 'Leggi il manifesto integrale',
      upcoming_eyebrow: 'Tappe',
      upcoming_title: 'Tre città, una stessa domanda',
      models_eyebrow: 'Modelli e modelle',
      models_title: 'Corpi che hanno scelto di essere visti',
      photographers_eyebrow: 'Fotografi',
      photographers_title: 'Sguardi selezionati per questa edizione',
      staff_eyebrow: 'Curatela',
      staff_title: 'Chi tiene insieme la mostra',
      partners_eyebrow: 'Partner',
      partners_title: 'Istituzioni e gallerie che ospitano',
      newsletter_eyebrow: 'Newsletter',
      newsletter_title: 'Resta nella stessa stanza',
      newsletter_text:
        'Una mail per tappa. Inviti privati, talk, edizioni limitate. Niente rumore.',
      newsletter_placeholder: 'la tua email',
      newsletter_consent:
        'Iscrivendoti accetti di ricevere comunicazioni rare relative alla mostra.',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: 'Oltre il Visibile',
      subtitle: 'Sette note sul corpo che resta.',
    },
    exhibitions: {
      eyebrow: 'Tappe',
      title: 'Mostre',
      lead: 'Tre città. Tre soglie. Stessa domanda.',
      coming_soon: 'Prossimamente',
      venue: 'Sede',
      date: 'Date',
      city: 'Città',
      artists_involved: 'Fotografi presenti',
      models_involved: 'Modelli presenti',
      city_newsletter: 'Resta aggiornato sulla tappa di',
    },
    photographers: {
      eyebrow: 'Fotografi',
      title: 'Sguardi',
      lead: 'Due autori, due grammatiche dello stare nel corpo dell\'altro.',
      bio: 'Biografia',
      practice: 'Pratica',
      selected_works: 'Selezione',
    },
    models: {
      eyebrow: 'Modelli',
      title: 'Presenze',
      lead: 'Chi ha accettato di stare davanti all\'obiettivo per questa edizione.',
      statement: 'Dichiarazione',
      practice: 'Pratica',
    },
    partners: {
      eyebrow: 'Partner',
      title: 'Istituzioni',
      lead: 'Le case che ci ospitano e le realtà che ci sostengono.',
    },
    contact: {
      eyebrow: 'Contatti',
      title: 'Scrivici',
      lead: 'Per partecipare, ospitare la mostra, collaborare o semplicemente capire.',
      name: 'Nome',
      email: 'Email',
      subject: 'Oggetto',
      message: 'Messaggio',
      send: 'Invia',
      direct_email: 'Scrivi direttamente',
    },
    footer: {
      column_explore: 'Esplora',
      column_info: 'Informazioni',
      column_follow: 'Segui',
      legal: 'Tutti i diritti riservati. Le immagini sono protette dal diritto d\'autore degli autori.',
      credit: 'Creato da',
      back_to_top: 'Torna su',
    },
    a11y: {
      open_menu: 'Apri menu',
      close_menu: 'Chiudi menu',
      switch_lang: 'Cambia lingua',
      to_home: 'Torna alla home',
    },
    seo: {
      home_title: 'Oltre il Visibile — Mostra itinerante di fine art nude',
      home_desc:
        'Oltre il Visibile è una mostra fotografica itinerante di fine art nude. Milano, Roma, Londra. Il corpo come paesaggio, la nudità come soglia.',
      manifesto_title: 'Manifesto — Oltre il Visibile',
      manifesto_desc:
        'Sette note sul corpo che resta. Il manifesto della mostra fine art nude itinerante Oltre il Visibile.',
      exhibitions_title: 'Mostre — Milano, Roma, Londra',
      exhibitions_desc:
        'Le tre tappe della mostra fotografica fine art nude Oltre il Visibile: Milano, Roma, Londra.',
      photographers_title: 'Fotografi — Oltre il Visibile',
      photographers_desc:
        'I fotografi selezionati per la mostra fine art nude Oltre il Visibile.',
      models_title: 'Modelli — Oltre il Visibile',
      models_desc: 'I modelli e le modelle protagonisti della mostra fine art nude.',
      partners_title: 'Partner — Oltre il Visibile',
      partners_desc: 'Le istituzioni e le gallerie che sostengono la mostra.',
      contact_title: 'Contatti — Oltre il Visibile',
      contact_desc: 'Contatta la curatela della mostra fine art nude Oltre il Visibile.',
    },
  },
  en: {
    site_title: 'Oltre il Visibile',
    site_tagline: 'A travelling fine art nude exhibition',
    nav: {
      home: 'Home',
      manifesto: 'Manifesto',
      exhibitions: 'Exhibitions',
      photographers: 'Photographers',
      models: 'Models',
      partners: 'Partners',
      contact: 'Contact',
    },
    cta: {
      discover: 'Discover',
      read_more: 'Keep reading',
      view_exhibition: 'View exhibition',
      view_profile: 'View profile',
      open_map: 'Open in maps',
      subscribe: 'Subscribe',
      menu: 'Menu',
      close: 'Close',
      back: 'Go back',
      all_photographers: 'All photographers',
      all_models: 'All models',
      all_exhibitions: 'All exhibitions',
    },
    home: {
      eyebrow: 'Travelling exhibition 2026 — 2027',
      hero_line_1: 'Oltre',
      hero_line_2: 'il Visibile',
      hero_subline: 'The body as landscape. Nudity as threshold.',
      manifesto_eyebrow: 'Manifesto',
      manifesto_excerpt:
        'Oltre il Visibile is not an exhibition about the nude. It is an exhibition about the threshold between what we show and what remains. About the body as geography, intimacy without spectacle, the gaze as a form of responsibility.',
      manifesto_cta: 'Read the full manifesto',
      upcoming_eyebrow: 'Stops',
      upcoming_title: 'Three cities, one same question',
      models_eyebrow: 'Models',
      models_title: 'Bodies that chose to be seen',
      photographers_eyebrow: 'Photographers',
      photographers_title: 'Selected gazes for this edition',
      staff_eyebrow: 'Curation',
      staff_title: 'Those who hold the show together',
      partners_eyebrow: 'Partners',
      partners_title: 'Institutions and galleries hosting us',
      newsletter_eyebrow: 'Newsletter',
      newsletter_title: 'Stay in the same room',
      newsletter_text:
        'One email per stop. Private invitations, talks, limited prints. No noise.',
      newsletter_placeholder: 'your email',
      newsletter_consent:
        'By subscribing you agree to receive rare communications related to the show.',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: 'Oltre il Visibile',
      subtitle: 'Seven notes on the body that remains.',
    },
    exhibitions: {
      eyebrow: 'Stops',
      title: 'Exhibitions',
      lead: 'Three cities. Three thresholds. The same question.',
      coming_soon: 'Coming soon',
      venue: 'Venue',
      date: 'Dates',
      city: 'City',
      artists_involved: 'Photographers exhibited',
      models_involved: 'Models featured',
      city_newsletter: 'Stay updated on the',
    },
    photographers: {
      eyebrow: 'Photographers',
      title: 'Gazes',
      lead: 'Two authors, two grammars for inhabiting another body.',
      bio: 'Biography',
      practice: 'Practice',
      selected_works: 'Selected works',
    },
    models: {
      eyebrow: 'Models',
      title: 'Presences',
      lead: 'Those who agreed to stand in front of the lens for this edition.',
      statement: 'Statement',
      practice: 'Practice',
    },
    partners: {
      eyebrow: 'Partners',
      title: 'Institutions',
      lead: 'The houses that host us and the partners that sustain the work.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Write to us',
      lead: 'To take part, host the show, collaborate, or simply understand.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      direct_email: 'Write directly',
    },
    footer: {
      column_explore: 'Explore',
      column_info: 'Information',
      column_follow: 'Follow',
      legal: 'All rights reserved. Images are protected by the authors\' copyright.',
      credit: 'Website by',
      back_to_top: 'Back to top',
    },
    a11y: {
      open_menu: 'Open menu',
      close_menu: 'Close menu',
      switch_lang: 'Switch language',
      to_home: 'Back to home',
    },
    seo: {
      home_title: 'Oltre il Visibile — Travelling fine art nude exhibition',
      home_desc:
        'Oltre il Visibile is a travelling fine art nude exhibition. Milan, Rome, London. The body as landscape, nudity as threshold.',
      manifesto_title: 'Manifesto — Oltre il Visibile',
      manifesto_desc:
        'Seven notes on the body that remains. The manifesto of the travelling fine art nude exhibition Oltre il Visibile.',
      exhibitions_title: 'Exhibitions — Milan, Rome, London',
      exhibitions_desc:
        'The three stops of the travelling fine art nude exhibition Oltre il Visibile: Milan, Rome, London.',
      photographers_title: 'Photographers — Oltre il Visibile',
      photographers_desc:
        'The photographers selected for the fine art nude exhibition Oltre il Visibile.',
      models_title: 'Models — Oltre il Visibile',
      models_desc: 'The models featured in the fine art nude exhibition.',
      partners_title: 'Partners — Oltre il Visibile',
      partners_desc: 'Institutions and galleries supporting the exhibition.',
      contact_title: 'Contact — Oltre il Visibile',
      contact_desc: 'Contact the curators of the fine art nude exhibition Oltre il Visibile.',
    },
  },
} as const;

export type Dict = (typeof dictionaries)['it'];

export const t = (lang: Lang): Dict => dictionaries[lang];

/* ── routing helpers ───────────────────────────────────────────── */

export const home = (lang: Lang) => `/${lang}`;

export const path = (lang: Lang, segment: string) =>
  segment ? `/${lang}/${segment.replace(/^\//, '')}` : `/${lang}`;

/**
 * For each route, return the equivalent path in the other language.
 * Used by the LanguageSwitcher and hreflang tags.
 */
export const altLangUrl = (currentLang: Lang, currentPath: string): string => {
  const other: Lang = currentLang === 'it' ? 'en' : 'it';

  // Strip leading slash and split
  const parts = currentPath.replace(/^\/+/, '').split('/').filter(Boolean);
  if (parts.length === 0 || parts[0] === currentLang && parts.length === 1) {
    return `/${other}`;
  }

  // Replace the lang prefix
  const tail = parts.slice(1);

  // City slug translation for exhibition detail pages
  const cityMap: Record<string, string> = {
    milano: 'milan',
    milan: 'milano',
    roma: 'rome',
    rome: 'roma',
    london: 'london',
  };
  if (tail[0] === 'exhibitions' && tail[1] && cityMap[tail[1]]) {
    tail[1] = cityMap[tail[1]];
  }

  return `/${other}/${tail.join('/')}`;
};
