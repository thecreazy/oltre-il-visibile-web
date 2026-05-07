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
      it: "Curatrice indipendente, dieci anni tra editoria fotografica e mostre istituzionali. Ha curato il programma fotografico di Triennale Milano 2022 — 2024 e si occupa di ricerca sui rapporti tra immagine e psicologia dell'osservazione. Lavora con fotografi, psicologi e ricercatori per costruire contesti espositivi che siano anche spazi di riflessione.",
      en: "Independent curator, ten years across photography publishing and institutional exhibitions. She curated Triennale Milano's photography programme 2022 — 2024 and researches the relationships between image and the psychology of observation. She works with photographers, psychologists and researchers to build exhibition contexts that are also spaces for reflection.",
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
      it: "Stampatore fine art e editore di libri d'artista. Si occupa della stampa di mostra, dell'edizione limitata e del libro finale del progetto. Collabora con archivi fotografici e istituzioni culturali per preservare e valorizzare opere fotografiche contemporanee.",
      en: "Fine-art printer and artist-book publisher. Handles the exhibition prints, the limited edition, and the final project book. He collaborates with photography archives and cultural institutions to preserve and promote contemporary photographic works.",
    },
    city: 'Roma',
  },
  {
    name: 'Marco Piemonte',
    role: { it: 'Stage Master — Londra', en: 'Stage Master — London' },
    bio: {
      it: "Stage master con esperienza nella formazione fotografica e nella relazione tra immagine e processi psicologici. Dirige lo stage di Londra presso la University of London: un percorso pratico e riflessivo aperto a fotografi e a chiunque voglia esplorare il rapporto tra mente e fotografia.",
      en: "Stage master with experience in photography education and the relationship between image and psychological processes. He directs the London workshop at the University of London: a practical and reflective programme open to photographers and anyone interested in exploring the relationship between mind and photography.",
    },
    city: 'London',
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
    name: 'Aurelia Gallery',
    kind: { it: 'Sede ospitante — Roma', en: 'Host venue — Rome' },
    city: 'Roma',
    href: 'https://www.google.com/maps/search/?api=1&query=Via+Aurelia+477+Roma',
    note: {
      it: 'Galleria fotografica in Via Aurelia 477, vicino alla metro Cornelia. Prima tappa di Oltre il Visibile, 6 — 7 giugno 2026.',
      en: 'Photography gallery at Via Aurelia 477, near Cornelia metro. First stop of Oltre il Visibile, 6 — 7 June 2026.',
    },
  },
  {
    name: 'Salone Monumentale — Palazzo Gotico',
    kind: { it: 'Sede ospitante — Piacenza', en: 'Host venue — Piacenza' },
    city: 'Piacenza',
    href: 'https://www.google.com/maps/search/?api=1&query=Palazzo+Gotico+Piacenza',
    note: {
      it: 'Sala storica in Piazza dei Cavalli, nel cuore del centro storico di Piacenza. Seconda tappa, 11 — 12 luglio 2026.',
      en: 'Historic hall in Piazza dei Cavalli, in the heart of Piacenza\'s old town. Second stop, 11 — 12 July 2026.',
    },
  },
  {
    name: 'Sede in definizione',
    kind: { it: 'Sede ospitante — Milano', en: 'Host venue — Milan' },
    city: 'Milano',
    href: 'https://www.google.com/maps/search/?api=1&query=Milano',
    note: {
      it: 'La sede milanese è in corso di definizione. Aggiornamenti in arrivo. Terza tappa, 19 — 20 settembre 2026.',
      en: 'The Milan venue is being finalised. Updates coming soon. Third stop, 19 — 20 September 2026.',
    },
  },
  {
    name: 'University of London',
    kind: { it: 'Sede ospitante — Londra', en: 'Host venue — London' },
    city: 'London',
    href: 'https://www.google.com/maps/search/?api=1&query=University+of+London',
    note: {
      it: 'Quarta e ultima tappa. Mostra fotografica e stage sulla psicologia dell\'immagine. Date in corso di definizione.',
      en: 'Fourth and final stop. Photography exhibition and workshop on the psychology of image. Dates to be announced.',
    },
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
