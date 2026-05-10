/**
 * Static, hand-curated data that doesn't need a content collection.
 * (Partners, staff, manifesto, press kit, social links.)
 */

import type { Lang } from '@i18n/index';

export type Bilingual = { it: string; en: string };
export type BilingualArr = { it: string[]; en: string[] };

export const SOCIALS: { label: string; href: string }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/oltre_il_visibile_project?igsh=MWx1ZDk4OXo4eXBoZw==' },
];

export const STAFF: {
  name: string;
  role: Bilingual;
  bio?: Bilingual;
  city: string;
}[] = [
  {
    name: 'Massimiliano Falso',
    role: { it: 'Direzione artistica · Produzione · Allestimento', en: 'Artistic direction · Production · Installation' },
    city: 'Italia',
  },
  {
    name: 'Valentina Pieri',
    role: { it: 'Direzione artistica', en: 'Artistic direction' },
    city: 'Italia',
  },
  {
    name: 'Luke Ketz',
    role: { it: 'Direzione artistica · Responsabile Nord Italia', en: 'Artistic direction · North Italy coordinator' },
    city: 'Nord Italia',
  },
  {
    name: 'Paolo Salvadorini',
    role: { it: 'Responsabile Toscana', en: 'Tuscany coordinator' },
    city: 'Toscana',
  },
  {
    name: 'Massimiliano Bacchi',
    role: { it: 'Responsabile Umbria', en: 'Umbria coordinator' },
    city: 'Umbria',
  },
  {
    name: 'Riccardo Canella',
    role: { it: 'Sviluppo digitale · Web', en: 'Digital development · Web' },
    city: 'Italia',
  },
  {
    name: 'Marco Piemonte',
    role: { it: 'Stage Master — Londra', en: 'Stage Master — London' },
    bio: {
      it: "Stage master con esperienza nella formazione fotografica e nella relazione tra immagine e processi psicologici. Dirige lo stage di Londra presso la University of London.",
      en: "Stage master with experience in photography education and the relationship between image and psychological processes. He directs the London workshop at the University of London.",
    },
    city: 'London',
  },
];


/* ── Manifesto — seven notes ─────────────────────────────────── */
export const MANIFESTO: { it: { eyebrow: string; title: string; body: string[] }; en: { eyebrow: string; title: string; body: string[] } }[] = [
  {
    it: {
      eyebrow: 'I.',
      title: 'La mente come specchio',
      body: [
        "La fotografia non ritrae solo ciò che sta fuori. Ritrae — se ci ascoltiamo — ciò che lo sguardo porta dentro: le aspettative, i ricordi, le zone d'ombra che non sappiamo di avere. Inizia da qui: ogni scatto è anche un autoritratto di chi guarda.",
        "Da qui parte tutto: la fotografia non è una finestra sulla realtà. È uno specchio.",
      ],
    },
    en: {
      eyebrow: 'I.',
      title: 'The mind as mirror',
      body: [
        "Photography does not only depict what lies outside. It depicts — if we listen — what the gaze carries within: expectations, memories, the shadowed zones we do not know we have. It begins here: every photograph is also a self-portrait of those who look.",
        "Everything starts here: photography is not a window onto reality. It is a mirror.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'II.',
      title: 'Lo sguardo come atto psicologico',
      body: [
        "Vedere non è neutro. È un atto filtrato da memorie, emozioni, strutture mentali costruite negli anni. Quando guardiamo una fotografia non registriamo: interpretiamo. E quell'interpretazione dice qualcosa di noi prima ancora che dell'immagine.",
      ],
    },
    en: {
      eyebrow: 'II.',
      title: 'The gaze as psychological act',
      body: [
        "Seeing is not neutral. It is an act filtered by memories, emotions, mental structures built over years. When we look at a photograph we do not register: we interpret. And that interpretation says something about us before it says anything about the image.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'III.',
      title: 'Emozione e fotogramma',
      body: [
        "Le emozioni si inscrivono nell'inquadratura prima di essere cercate. Un'angolatura, una distanza, il momento esatto in cui si preme — tutto questo è già emozione che si fa forma. Il fotografo decide con il corpo prima che con la mente. Poi guarda la stampa e si sorprende.",
      ],
    },
    en: {
      eyebrow: 'III.',
      title: 'Emotion and the frame',
      body: [
        "Emotions inscribe themselves in the frame before they are sought. An angle, a distance, the exact moment of the shutter — all of this is already emotion becoming form. The photographer decides with the body before the mind. Then looks at the print and is surprised.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'IV.',
      title: "L'inconscio si rivela",
      body: [
        "Nelle fotografie appaiono cose che non sono state cercate. Un'ombra sul muro, uno spazio vuoto, la postura che il soggetto ha assunto senza accorgersene. L'inconscio non si nasconde: aspetta solo di essere guardato con attenzione. La mostra nasce proprio da questa convinzione.",
      ],
    },
    en: {
      eyebrow: 'IV.',
      title: 'The unconscious reveals itself',
      body: [
        "Photographs show things that were not looked for. A shadow on the wall, an empty space, the posture the subject assumed without noticing. The unconscious does not hide: it simply waits to be looked at with attention. The exhibition is built on this conviction.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'V.',
      title: 'Percezione e realtà',
      body: [
        "La realtà che la fotografia cattura e la realtà che vediamo nella fotografia sono due cose diverse. In mezzo c'è la psicologia: i filtri interni con cui trasformiamo il dato visivo in significato. La mostra è costruita intorno a questo spazio di mezzo — quello in cui la realtà diventa esperienza.",
      ],
    },
    en: {
      eyebrow: 'V.',
      title: 'Perception and reality',
      body: [
        "The reality photography captures and the reality we see in the photograph are two different things. In between stands psychology: the inner filters through which we transform visual data into meaning. The exhibition is built around this in-between space — the one in which reality becomes experience.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'VI.',
      title: 'Vulnerabilità come metodo',
      body: [
        "Essere fotografati è un atto di fiducia. Richiede di accettare che qualcuno veda — e fermi — un momento di sé. Gli stage che accompagnano la mostra nascono da questa consapevolezza: la macchina fotografica come strumento di esplorazione interiore, non di esposizione esteriore.",
      ],
    },
    en: {
      eyebrow: 'VI.',
      title: 'Vulnerability as method',
      body: [
        "Being photographed is an act of trust. It requires accepting that someone will see — and stop — a moment of yourself. The workshops that accompany the exhibition are built on this awareness: the camera as a tool for inner exploration, not outer exposure.",
      ],
    },
  },
  {
    it: {
      eyebrow: 'VII.',
      title: 'Quattro tappe, una stessa domanda',
      body: [
        "Roma, Piacenza, Milano, Londra. Quattro architetture, quattro pubblici, quattro stagioni. Una sola domanda, ripetuta: cosa stiamo davvero guardando, quando guardiamo un'immagine?",
      ],
    },
    en: {
      eyebrow: 'VII.',
      title: 'Four stops, one same question',
      body: [
        "Rome, Piacenza, Milan, London. Four architectures, four audiences, four seasons. One single question, repeated: what are we really looking at, when we look at an image?",
      ],
    },
  },
];

export const CONTACT_EMAIL = 'oltreilvisibileart@gmail.com';

/* ── small helpers ───────────────────────────────────────────── */
export const pick = <T>(b: { it: T; en: T }, lang: Lang): T => b[lang];
export const pickOpt = <T>(b: { it: T; en: T } | undefined, lang: Lang): T | undefined => b?.[lang];
