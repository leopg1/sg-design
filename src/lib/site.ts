// ----------------------------------------------------------------------------
// SG Design — single source of truth for copy, offer and links.
// Edit content here; components stay untouched.
// ----------------------------------------------------------------------------

export const CALENDLY_URL =
  'https://calendly.com/severingeorgianatincuta/consultanta-1-1-georgiana-severin';

export const brand = {
  name: 'SG Design',
  owner: 'Georgiana Severin',
  tagline: 'Identitate vizuală premium pentru autori de cursuri',
  // TODO (de confirmat cu clientul): date de contact reale SG Design
  email: 'contact@sgdesign.ro',
  city: 'Iași, România',
};

export const nav = {
  links: [
    { label: 'Portofoliu', href: '#portofoliu' },
    { label: 'Pachete', href: '#pachete' },
    { label: 'Testimoniale', href: '#testimoniale' },
  ],
  cta: 'Programează apel',
};

export const hero = {
  preheader:
    'Pentru autorii de cursuri care s-au săturat să nu fie luați în serios și plătiți la adevărata lor valoare',
  headline: ['Nu duci lipsă de valoare.', 'Ci de ', 'poziționare', '.'],
  subheadline:
    'Îți construim o identitate vizuală premium care îți crește percepția valorii, te scoate din mulțime și te poziționează ca alegerea evidentă. Chiar dacă acum simți că nu ești văzut la nivelul la care ești.',
  // Clarificatorii „fără” din materialul sursă (above the fold) — ce te scutim să faci
  bullets: [
    'Fără să-ți mai bați capul în Canva, iar la final tot să nu iasă.',
    'Fără AI care arată la toți la fel.',
    'Fără chestii tehnice care nu fac parte din expertiza ta.',
  ],
  cta: 'Programează un apel gratuit',
  subcta: 'Apel de consultanță 1-la-1, 30 de minute. Fără presiune, fără pitch forțat.',
};

export const vsl = {
  eyebrow: 'Mesaj de la Georgiana',
  title: 'Două minute care îți pot schimba poziționarea',
  cta: 'Vreau brand premium',
  microcopy: 'Fără bătăi de cap. Modificări nelimitate. Adaptat exact pe business-ul tău.',
  trust: 'Lucrăm exclusiv cu autori de cursuri și programe educaționale.',
  // Pentru a activa VSL-ul: pune aici link-ul de embed (Vimeo / YouTube / Cloudflare
  // Stream). Gol = se afișează placeholder-ul, iar butonul play deschide Calendly.
  embedUrl: '',
};

export const identify = {
  eyebrow: 'Recunoști asta?',
  title: 'Dacă treci prin asta, ești exact unde trebuie.',
  intro: 'Ai un curs bun. Știi că aduci valoare. Dar ceva nu se leagă.',
  points: [
    'Oamenii nu îți percep valoarea reală.',
    'Ai luni în care vânzările scad fără un motiv clar.',
    'Te simți încă una din piața aglomerată.',
    'Îți e greu să ceri prețul pe care îl meriți.',
    'Stai prea mult în Canva și tot nu iese ce trebuie.',
  ],
  punch: 'Și poate cel mai frustrant: știi că meriți mai mult, dar oamenii nu percep asta.',
};

export const agitate = {
  eyebrow: 'Adevărul incomod',
  title: 'Ce n-o să-ți spună clienții niciodată',
  intro:
    'Decid în câteva secunde dacă au încredere în tine. Nu după cât știi. Nu după cât de bun e cursul tău. Ci după cum arată ceea ce creezi.',
  consequences: [
    { k: 'Design slab', v: 'pari ieftin.' },
    { k: 'Inconsistență', v: 'lipsă de încredere.' },
    { k: 'Lipsă de identitate', v: 'invizibilitate.' },
  ],
  punch: 'Nu pierzi clienți pentru că nu ești bun. Îi pierzi pentru că nu arăți ca unul bun.',
  question: 'De la cine ai cumpăra?',
  personBefore: 'De la ea?',
  personAfter: 'Sau de la ea?',
  bridge: 'Exact același lucru se întâmplă și în online. De la cine ai cumpăra?',
  beforeLabel: 'Fără branding',
  afterLabel: 'Cu branding',
};

export const contrast = {
  eyebrow: 'Aceeași expertiză, două rezultate',
  title: 'Diferența nu e subtilă. E vizibilă.',
  without: {
    label: 'Fără branding',
    points: [
      'Rămâi un no name într-o piață aglomerată.',
      'Oamenii întreabă de preț prea devreme, apoi dispar.',
      'Lași la preț ca să convingi, deși știi ce valoare oferi.',
      'Bugetul de marketing se risipește pe materiale care nu opresc scroll-ul.',
      'Stagnezi, cu luni bune și luni proaste, fără predictibilitate.',
    ],
  },
  with: {
    label: 'Cu branding',
    points: [
      'Devii un brand recognoscibil, ținut minte.',
      'Oamenii vin deja convinși și întreabă cum începem, nu cât costă.',
      'Poți crește prețurile fără să te justifici.',
      'Fiecare material lucrează pentru tine, coerent, în fiecare interacțiune.',
      'Vânzările redevin predictibile, cu fruntea sus.',
    ],
  },
};

export const solution = {
  eyebrow: 'Aici intervenim noi',
  title: 'Nu îți facem design. Îți construim un brand.',
  body:
    'Un brand care transmite clar valoarea ta, te poziționează ca profesionist și face oamenii să spună: vreau să lucrez cu ea. Lucrăm exclusiv cu autori de cursuri, așa că știm exact ce trebuie să vadă un client ca să perceapă valoarea.',
  signature: 'Georgiana Severin, fondator SG Design',
};

export const outcomes = {
  eyebrow: 'Transformarea',
  title: 'Ce se schimbă concret după ce lucrăm împreună',
  items: [
    { t: 'Ești luat în serios din prima', d: 'Oamenii nu mai au nevoie de convins. Simt că ești profesionist.' },
    { t: 'Crește percepția valorii tale', d: 'Și odată cu ea, crește și cât poți cere.' },
    { t: 'Atragi clienți mai potriviți', d: 'Mai puțin „doar mă informez”, mai mult „hai să lucrăm”.' },
    { t: 'Nu mai lupți pentru fiecare vânzare', d: 'Lucrurile încep să curgă mai natural.' },
    { t: 'Ai claritate în tot ce comunici', d: 'Nu mai improvizezi, nu mai ghicești.' },
    { t: 'Totul arată coerent', d: 'Social media, prezentări, materiale, totul aliniat.' },
    { t: 'Te promovezi cu încredere', d: 'Pentru că se vede nivelul tău real.' },
  ],
};

export const portfolio = {
  eyebrow: 'Portofoliu',
  title: 'Branduri puse acolo unde le e locul',
  subtitle: 'Logo-uri, identități, afișe de eveniment, prezentări de curs și materiale care vând.',
  // images are wired in the component (astro:assets) with these captions/categories
};

export const process = {
  eyebrow: 'Cum lucrăm',
  title: 'Un proces clar, fără haos',
  steps: [
    { n: '01', t: 'Clarificăm poziționarea', d: 'Înțelegem cine ești și unde vrei să ajungi.' },
    { n: '02', t: 'Construim direcția vizuală', d: 'Strategie clară, nu design la întâmplare.' },
    { n: '03', t: 'Creăm și ajustăm până e perfect', d: 'Feedback constant și revizii nelimitate.' },
    { n: '04', t: 'Primești sistemul complet', d: 'Îl folosești ușor, fără stres și incoerență.' },
  ],
};

export const packages = {
  eyebrow: 'Pachete',
  title: 'Alege nivelul la care vrei să joci',
  note: 'Prețurile vechi sunt afișate tăiat. Modificări nelimitate incluse în fiecare pachet.',
  tiers: [
    {
      name: 'Start',
      tagline: 'Pentru o bază solidă',
      price: '600€',
      oldPrice: '850€',
      cadence: 'preț unic',
      featured: false,
      features: [
        'Identitate vizuală completă (logo + brandbook)',
        '4 template-uri social media customizabile',
      ],
      cta: 'Vreau să încep',
    },
    {
      name: 'Growth',
      tagline: 'Pentru cei care vor să crească vânzările',
      price: '1100€',
      oldPrice: '1600€',
      cadence: 'preț unic',
      featured: true,
      badge: 'Recomandat',
      features: [
        'Tot din pachetul Start',
        '4 iconuri de brand personalizate',
        'Prezentare PowerPoint pentru curs (design + structurarea slide-urilor)',
      ],
      cta: 'Vreau să cresc',
    },
    {
      name: 'Premium',
      tagline: 'Pentru cei care vor să domine vizual piața, pe termen lung',
      price: '900€',
      oldPrice: null,
      cadence: 'prima lună, apoi 550€/lună',
      featured: false,
      features: [
        'Identitate vizuală completă',
        'Prezentare PowerPoint pentru curs',
        'Abonament creative personalizate (până la 25/lună)',
        'Abonament iconuri personalizate (până la 25/lună)',
      ],
      bonus: 'Bonus (valoare peste 300€): design e-book-uri și produse digitale, mockup-uri profesionale, suport în implementare.',
      cta: 'Vreau tot',
    },
  ],
};

export const usp = {
  eyebrow: 'De ce noi',
  title: 'Poate nu suntem cei mai ieftini. Dar avem motive bine întemeiate.',
  items: [
    { t: 'Lucrăm doar cu autori de cursuri', d: 'Înțelegem exact ce vinzi și cui vinzi.' },
    { t: 'Nu livrăm design, livrăm poziționare', d: 'Fiecare element are un scop bine gândit.' },
    { t: 'Modificări nelimitate', d: 'Nu plecăm până nu e exact cum vrei.' },
    { t: 'Construim sistem, nu doar livrabile', d: 'O bază pe care poți crește, fără rebranding constant.' },
    { t: 'Gândim designul pentru conversie', d: 'Nu doar să arate bine, ci să vândă.' },
  ],
};

export const testimonials = {
  eyebrow: 'Ce spun oamenii',
  title: 'Branduri cu care am lucrat',
  // Nota onestă: lucrăm acum exclusiv cu autori de cursuri, chiar dacă
  // nu a fost dintotdeauna așa. Recomandările de mai jos sunt reale.
  note: 'Georgiana a creat identități pentru branduri din imobiliare, evenimente, construcții și multe alte industrii. Acum lucrăm exclusiv cu autori de cursuri. Recomandările de mai jos sunt reale, de la branduri cu care am colaborat.',
  items: [
    { name: 'Bespoke Brand Experience', role: 'Mastermind Club', img: 't1-bespoke.jpg' },
    { name: 'Garduri Premium', role: 'tâmplărie aluminiu', img: 't2-garduri.jpg' },
    { name: 'Vali Petrisor', role: 'Alo Iași & AloRomania', img: 't3-alo.jpg' },
    { name: 'Ionita Cornelia', role: 'client SG Design', img: 't4-ionita.jpg' },
  ],
};

export const faq = {
  eyebrow: 'Întrebări frecvente',
  title: 'Ce te-ai putea întreba',
  items: [
    {
      q: 'Dacă nu îmi place rezultatul final?',
      a: 'Nu se întâmplă. Ai modificări nelimitate până e exact ce vrei.',
    },
    {
      q: 'Dacă nu funcționează?',
      a: 'Nu cumperi design. Cumperi poziționare. Asta schimbă jocul.',
    },
    {
      q: 'Cât durează?',
      a: 'Execuția durează între 2 și 6 săptămâni. Îți transmitem timeline-ul exact de la început și găsim soluții să urgentăm dacă ai nevoie.',
    },
  ],
};

export const urgency = {
  eyebrow: 'Disponibilitate limitată',
  title: 'Ne alegem clienții cu atenție',
  body:
    'Luăm doar clienții pe care îi putem servi impecabil, pentru că livrăm către un număr limitat de proiecte pe lună.',
  badge: 'Număr limitat de proiecte pe lună',
  cta: 'Vezi dacă mai e loc luna aceasta',
};

export const finalCta = {
  eyebrow: 'Următorul pas',
  title: 'Dacă simți că e momentul să arăți la nivelul tău real',
  body:
    'Programează un apel gratuit de consultanță 1-la-1 cu Georgiana. O conversație de 30 de minute în care înțelegem unde e blocajul, clarificăm direcția și vezi dacă are sens să lucrăm împreună. Fără presiune. Fără pitch forțat. Te ofertăm doar dacă te putem ajuta.',
  cta: 'Rezervă-ți locul',
  guarantees: [
    'Direcție clară înainte de execuție',
    'Revizii nelimitate incluse',
    'Comunicare constantă și timeline clar',
  ],
};

export const footer = {
  note: 'Designul nu e despre cum arată. E despre cât de ușor ai încredere în cineva înainte să cumpere.',
  legal: [
    { label: 'Termeni și Condiții', href: '/termeni', external: false },
    { label: 'Politică de Confidențialitate', href: '/confidentialitate', external: false },
    { label: 'ANPC', href: 'https://anpc.ro/', external: true },
    { label: 'SOL', href: 'https://ec.europa.eu/consumers/odr', external: true },
  ],
};
