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
    site_tagline: 'Fotografia, psicologia e percezione',
    nav: {
      home: 'Home',
      manifesto: 'Manifesto',
      exhibitions: 'Mostre',
      photographers: 'Fotografi',
      models: 'Voci',
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
      hero_subline: 'La mente come paesaggio. Lo sguardo come rivelazione.',
      manifesto_eyebrow: 'Manifesto',
      manifesto_excerpt:
        "Oltre il Visibile non è una mostra sulla fotografia. È una mostra su ciò che la fotografia rivela di noi — le emozioni che proiettiamo sulle immagini, le percezioni che costruiamo inconsapevolmente, i paesaggi interiori che uno scatto riesce a portare in superficie.",
      manifesto_cta: 'Leggi il manifesto integrale',
      upcoming_eyebrow: 'Tappe',
      upcoming_title: 'Tre città, una stessa domanda',
      models_eyebrow: 'Voci',
      models_title: 'Esperienze che hanno scelto di essere raccontate',
      photographers_eyebrow: 'Fotografi',
      photographers_title: 'Sguardi selezionati per questa edizione',
      staff_eyebrow: 'Curatela',
      staff_title: 'Chi tiene insieme la mostra',
      partners_eyebrow: 'Partner',
      partners_title: 'Istituzioni e gallerie che ospitano',
      newsletter_eyebrow: 'Newsletter',
      newsletter_title: 'Resta nella stessa stanza',
      newsletter_text:
        'Una mail per tappa. Inviti, talk, materiali esclusivi. Niente rumore.',
      newsletter_placeholder: 'la tua email',
      newsletter_consent:
        'Iscrivendoti accetti di ricevere comunicazioni rare relative alla mostra.',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: 'Oltre il Visibile',
      subtitle: 'Sette note sulla mente che vede.',
    },
    exhibitions: {
      eyebrow: 'Tappe',
      title: 'Mostre',
      lead: 'Tre città. Tre contesti. Una sola domanda sulla percezione.',
      coming_soon: 'Prossimamente',
      venue: 'Sede',
      date: 'Date',
      city: 'Città',
      artists_involved: 'Fotografi presenti',
      models_involved: 'Voci presenti',
      city_newsletter: 'Resta aggiornato sulla tappa di',
    },
    photographers: {
      eyebrow: 'Fotografi',
      title: 'Sguardi',
      lead: 'Due autori, due grammatiche del vedere e del sentire.',
      bio: 'Biografia',
      practice: 'Metodo',
      selected_works: 'Selezione',
    },
    models: {
      eyebrow: 'Voci',
      title: 'Prospettive',
      lead: "Chi ha scelto di prendere parte a questo percorso tra fotografia e psicologia.",
      statement: 'Riflessione',
      practice: 'Percorso',
    },
    partners: {
      eyebrow: 'Partner',
      title: 'Istituzioni',
      lead: 'Le case che ci ospitano e le realtà che ci sostengono.',
    },
    contact: {
      eyebrow: 'Contatti',
      title: 'Scrivici',
      lead: 'Per partecipare, ospitare la mostra, collaborare agli stage o semplicemente capire.',
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
      home_title: 'Oltre il Visibile — Fotografia, psicologia e percezione',
      home_desc:
        'Oltre il Visibile esplora il confine tra fotografia e psicologia. Milano, Roma, Londra. Come la mente percepisce la realtà, come le emozioni si riflettono negli scatti.',
      manifesto_title: 'Manifesto — Oltre il Visibile',
      manifesto_desc:
        'Sette note sulla mente che vede. Il manifesto della mostra fotografica itinerante Oltre il Visibile.',
      exhibitions_title: 'Mostre — Milano, Roma, Londra',
      exhibitions_desc:
        'Le tre tappe della mostra fotografica Oltre il Visibile: Milano, Roma, Londra. Fotografia, psicologia e percezione.',
      photographers_title: 'Fotografi — Oltre il Visibile',
      photographers_desc:
        'I fotografi selezionati per la mostra Oltre il Visibile, un percorso tra immagine e psicologia.',
      models_title: 'Voci — Oltre il Visibile',
      models_desc: 'Le voci e le esperienze dei partecipanti alla mostra e agli stage di Oltre il Visibile.',
      partners_title: 'Partner — Oltre il Visibile',
      partners_desc: 'Le istituzioni e le gallerie che sostengono la mostra.',
      contact_title: 'Contatti — Oltre il Visibile',
      contact_desc: 'Contatta la curatela di Oltre il Visibile. Per partecipare, collaborare o ospitare la mostra.',
    },
  },
  en: {
    site_title: 'Oltre il Visibile',
    site_tagline: 'Photography, psychology and perception',
    nav: {
      home: 'Home',
      manifesto: 'Manifesto',
      exhibitions: 'Exhibitions',
      photographers: 'Photographers',
      models: 'Voices',
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
      hero_subline: 'The mind as landscape. The gaze as revelation.',
      manifesto_eyebrow: 'Manifesto',
      manifesto_excerpt:
        "Oltre il Visibile is not an exhibition about photography. It is an exhibition about what photography reveals of us — the emotions we project onto images, the perceptions we build unconsciously, the inner landscapes that a photograph can bring to the surface.",
      manifesto_cta: 'Read the full manifesto',
      upcoming_eyebrow: 'Stops',
      upcoming_title: 'Three cities, one same question',
      models_eyebrow: 'Voices',
      models_title: 'Experiences that chose to be told',
      photographers_eyebrow: 'Photographers',
      photographers_title: 'Selected gazes for this edition',
      staff_eyebrow: 'Curation',
      staff_title: 'Those who hold the show together',
      partners_eyebrow: 'Partners',
      partners_title: 'Institutions and galleries hosting us',
      newsletter_eyebrow: 'Newsletter',
      newsletter_title: 'Stay in the same room',
      newsletter_text:
        'One email per stop. Invitations, talks, exclusive materials. No noise.',
      newsletter_placeholder: 'your email',
      newsletter_consent:
        'By subscribing you agree to receive rare communications related to the show.',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: 'Oltre il Visibile',
      subtitle: 'Seven notes on the mind that sees.',
    },
    exhibitions: {
      eyebrow: 'Stops',
      title: 'Exhibitions',
      lead: 'Three cities. Three contexts. One question about perception.',
      coming_soon: 'Coming soon',
      venue: 'Venue',
      date: 'Dates',
      city: 'City',
      artists_involved: 'Photographers exhibited',
      models_involved: 'Voices featured',
      city_newsletter: 'Stay updated on the',
    },
    photographers: {
      eyebrow: 'Photographers',
      title: 'Gazes',
      lead: 'Two authors, two grammars for seeing and feeling.',
      bio: 'Biography',
      practice: 'Method',
      selected_works: 'Selected works',
    },
    models: {
      eyebrow: 'Voices',
      title: 'Perspectives',
      lead: 'Those who chose to take part in this journey through photography and psychology.',
      statement: 'Reflection',
      practice: 'Journey',
    },
    partners: {
      eyebrow: 'Partners',
      title: 'Institutions',
      lead: 'The houses that host us and the partners that sustain the work.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Write to us',
      lead: 'To take part, host the show, collaborate on workshops, or simply understand.',
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
      home_title: 'Oltre il Visibile — Photography, psychology and perception',
      home_desc:
        'Oltre il Visibile explores the boundary between photography and psychology. Milan, Rome, London. How the mind perceives reality, how emotions reflect in photographs.',
      manifesto_title: 'Manifesto — Oltre il Visibile',
      manifesto_desc:
        'Seven notes on the mind that sees. The manifesto of the travelling photography exhibition Oltre il Visibile.',
      exhibitions_title: 'Exhibitions — Milan, Rome, London',
      exhibitions_desc:
        'The three stops of the photography exhibition Oltre il Visibile: Milan, Rome, London. Photography, psychology and perception.',
      photographers_title: 'Photographers — Oltre il Visibile',
      photographers_desc:
        'The photographers selected for Oltre il Visibile, a journey between image and psychology.',
      models_title: 'Voices — Oltre il Visibile',
      models_desc: 'The voices and experiences of participants in the Oltre il Visibile exhibition and workshops.',
      partners_title: 'Partners — Oltre il Visibile',
      partners_desc: 'Institutions and galleries supporting the exhibition.',
      contact_title: 'Contact — Oltre il Visibile',
      contact_desc: 'Contact the Oltre il Visibile curatorial team. To take part, collaborate or host the show.',
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
