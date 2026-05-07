/**
 * Static, hand-curated data that doesn't need a content collection.
 * (Partners, staff, manifesto, press kit, social links.)
 */

import type { Lang } from '@i18n/index';

export type Bilingual = { it: string; en: string };
export type BilingualArr = { it: string[]; en: string[] };

export const SOCIALS: { label: string; href: string }[] = [
  { label: 'Instagram', href: 'https://instagram.com/oltreilvisibile' },
  { label: 'X / Twitter', href: 'https://x.com/oltreilvisibile' },
  { label: 'Are.na', href: 'https://www.are.na/oltre-il-visibile' },
];

export const STAFF: {
  name: string;
  role: Bilingual;
  bio: Bilingual;
  city: string;
}[] = [
  {
    name: 'Sara Lamberti',
    role: { it: 'Direzione artistica · Curatela', en: 'Artistic direction · Curation' },
    bio: {
      it: "Curatrice indipendente, dieci anni tra editoria fotografica e mostre istituzionali. Ha curato il programma fotografico di Triennale Milano 2022 — 2024.",
      en: "Independent curator, ten years between photography publishing and institutional exhibitions. She curated Triennale Milano's photography programme 2022 — 2024.",
    },
    city: 'Milano',
  },
  {
    name: 'Léa Dubois',
    role: { it: 'Produzione · Allestimento', en: 'Production · Installation' },
    bio: {
      it: 'Production manager per progetti museali itineranti tra Parigi, Berlino e Milano. Si occupa di logistica, allestimento e protocolli per le persone ritratte.',
      en: 'Production manager for travelling museum projects across Paris, Berlin and Milan. She handles logistics, installation, and protocols for sitters.',
    },
    city: 'Paris',
  },
  {
    name: 'Marco Iervolino',
    role: { it: 'Editoria · Stampe', en: 'Publishing · Prints' },
    bio: {
      it: 'Stampatore fine art e editore di libri d\'artista. Si occupa della stampa di mostra, dell\'edizione limitata e del libro finale del progetto.',
      en: 'Fine-art printer and artist-book publisher. Handles the exhibition prints, the limited edition, and the final project book.',
    },
    city: 'Roma',
  },
];

export const PARTNERS: {
  name: string;
  kind: Bilingual;
  city: string;
  href: string;
  note: Bilingual;
}[] = [
  {
    name: 'Spazio Maiocchi',
    kind: { it: 'Sede ospitante — Milano', en: 'Host venue — Milan' },
    city: 'Milano',
    href: 'https://www.spaziomaiocchi.com',
    note: {
      it: 'Spazio indipendente di Kaleidoscope per la cultura contemporanea, in zona Buenos Aires.',
      en: "Kaleidoscope's independent space for contemporary culture, in the Buenos Aires district.",
    },
  },
  {
    name: 'Palazzo Velli Expo',
    kind: { it: 'Sede ospitante — Roma', en: 'Host venue — Rome' },
    city: 'Roma',
    href: 'https://www.palazzovelli.it',
    note: {
      it: 'Palazzo cinquecentesco a Trastevere, oggi spazio espositivo per fotografia e arti contemporanee.',
      en: 'Sixteenth-century palace in Trastevere, today an exhibition space for photography and contemporary arts.',
    },
  },
  {
    name: 'Cromwell Place',
    kind: { it: 'Sede ospitante — Londra', en: 'Host venue — London' },
    city: 'London',
    href: 'https://www.cromwellplace.com',
    note: {
      it: 'Casa per gallerie e artisti indipendenti nel cuore di South Kensington.',
      en: 'Home for galleries and independent artists in the heart of South Kensington.',
    },
  },
];

/* ── Manifesto — seven notes ─────────────────────────────────── */
export const MANIFESTO: { it: { eyebrow: string; title: string; body: string[] }; en: { eyebrow: string; title: string; body: string[] } }[] = [
  {
    it: {
      eyebrow: 'I.',
      title: 'Il corpo come paesaggio',
      body: [
        "Il corpo che fotografiamo non è un oggetto: è un territorio. Si attraversa lentamente, si rispetta come si rispetta una linea di confine. Ogni grano di pelle è un'altitudine, ogni ombra una valle.",
        'Da qui parte tutto: il corpo non è cosa da mostrare, è terra da abitare con cautela.',
      ],
    },
    en: {
      eyebrow: 'I.',
      title: 'The body as landscape',
      body: [
        "The body we photograph is not an object: it is a territory. You cross it slowly, you respect it the way you respect a border. Every grain of skin is an altitude, every shadow a valley.",
        'Everything starts here: the body is not a thing to be displayed, it is land to be inhabited with care.',
      ],
    },
  },
  {
    it: {
      eyebrow: 'II.',
      title: 'Intimità senza spettacolo',
      body: [
        "Tutto ciò che si vede in mostra è intimo. Niente di ciò che si vede è spettacolare. La differenza è una scelta di linguaggio e una scelta etica: lo spettacolo richiede uno sguardo che divora, l'intimità richiede uno sguardo che resta.",
      ],
    },
    en: {
      eyebrow: 'II.',
      title: 'Intimacy without spectacle',
      body: [
        "Everything you see in the show is intimate. Nothing you see is spectacular. The difference is a choice of language and a choice of ethics: spectacle requires a gaze that devours, intimacy requires a gaze that stays.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'III.',
      title: 'Identità e trasformazione',
      body: [
        "Il nudo non è un'identità: è una trasformazione. Le persone che hanno scelto di posare per questa mostra non hanno tolto qualcosa, hanno aggiunto un livello di responsabilità verso se stesse e verso chi guarda.",
      ],
    },
    en: {
      eyebrow: 'III.',
      title: 'Identity and transformation',
      body: [
        "Nudity is not an identity: it is a transformation. The people who chose to model for this show did not take something away, they added a layer of responsibility toward themselves and toward those who look.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'IV.',
      title: 'Ciò che resta nascosto',
      body: [
        "Anche quando tutto appare visibile, qualcosa resta. Restano le scelte fatte fuori dall'inquadratura: con chi parlare, quando dire no, quando ricominciare. La mostra si chiama Oltre il Visibile perché crediamo che la fotografia non riveli mai una persona per intero. La protegge.",
      ],
    },
    en: {
      eyebrow: 'IV.',
      title: 'What remains hidden',
      body: [
        "Even when everything appears visible, something remains. The choices made outside the frame remain: who to speak with, when to say no, when to begin again. The show is called Beyond the Visible because we believe photography never fully reveals a person. It protects them.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'V.',
      title: 'Lo sguardo come responsabilità',
      body: [
        "Chi guarda è dentro l'opera quanto chi è guardato. Per questo abbiamo costruito uno spazio espositivo che non chiede silenzio per imporre rispetto, ma che chiede attenzione. L'attenzione è la prima forma di consenso che possiamo dare alle immagini.",
      ],
    },
    en: {
      eyebrow: 'V.',
      title: 'The gaze as responsibility',
      body: [
        "The viewer is inside the work as much as the sitter. That is why we built an exhibition space that does not demand silence to impose respect, but that asks for attention. Attention is the first form of consent we can give to an image.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'VI.',
      title: 'Vulnerabilità e silenzio',
      body: [
        "Le immagini in mostra non gridano. Sono lavorate per resistere al consumo veloce. Le abbiamo stampate grandi perché chiedano tempo, e le abbiamo distanziate perché chiedano camminata.",
      ],
    },
    en: {
      eyebrow: 'VI.',
      title: 'Vulnerability and silence',
      body: [
        "The images in the show do not shout. They are crafted to resist quick consumption. We have printed them large so they ask for time, and spaced them apart so they ask you to walk.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'VII.',
      title: 'Tre città, una stessa domanda',
      body: [
        "Milano, Roma, Londra. Tre architetture, tre pubblici, tre stagioni. Una sola domanda, ripetuta: cosa stiamo davvero guardando, quando guardiamo un corpo?",
      ],
    },
    en: {
      eyebrow: 'VII.',
      title: 'Three cities, one same question',
      body: [
        "Milan, Rome, London. Three architectures, three audiences, three seasons. One single question, repeated: what are we really looking at, when we look at a body?",
      ],
    },
  },
];

/* ── Press kit (UI only) ─────────────────────────────────────── */
export const PRESS_KIT_BLOCKS: { title: Bilingual; body: Bilingual; size: string }[] = [
  {
    title: { it: 'Cartella stampa', en: 'Press pack' },
    body: {
      it: 'Comunicato stampa, biografie, scheda della mostra, immagini di anteprima.',
      en: 'Press release, biographies, exhibition fact sheet, preview images.',
    },
    size: 'PDF · 18 MB',
  },
  {
    title: { it: 'Immagini ad alta risoluzione', en: 'High-resolution images' },
    body: {
      it: 'Selezione di otto immagini per uso editoriale, con crediti.',
      en: 'Selection of eight images for editorial use, with credits.',
    },
    size: 'ZIP · 240 MB',
  },
  {
    title: { it: 'Logo e identità', en: 'Logo and identity' },
    body: {
      it: 'Logotipo, simbolo, palette, regole di applicazione.',
      en: 'Logotype, symbol, palette, application rules.',
    },
    size: 'ZIP · 6 MB',
  },
];

export const PRESS_CONTACT = {
  name: 'Sara Lamberti',
  role: { it: 'Ufficio stampa', en: 'Press office' } as Bilingual,
  email: 'press@oltreilvisibile.art',
};

export const CONTACT_EMAIL = 'oltreilvisibileart@gmail.com';

/* ── small helpers ───────────────────────────────────────────── */
export const pick = <T>(b: { it: T; en: T }, lang: Lang): T => b[lang];
