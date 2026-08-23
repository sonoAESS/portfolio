export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const es = {
  'meta.role': 'Bioinformática · Backend · Arte',
  'meta.description':
    'Portfolio de Antonio Elias Sánchez Soto — estudiante de Ingeniería en Bioinformática y desarrollador backend en La Habana, Cuba.',

  'nav.label': 'Secciones',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.skills': 'Skills',
  'nav.contact': 'Contacto',

  'hero.title': 'Donde la biología se encuentra con el código.',
  'hero.subtitle':
    'Soy Antonio — estudiante de Ingeniería en Bioinformática y desarrollador backend. Construyo herramientas que unen la ciencia y el software: desde bots educativos hasta plataformas para analizar secuencias biológicas.',
  'hero.ctaProjects': 'Ver proyectos',
  'hero.ctaContact': 'Contacto',

  'about.title': 'Sobre mí',
  'about.p1':
    'Soy estudiante de Ingeniería en Bioinformática en la UCI y desarrollador backend. Mi objetivo es combinar la biología y la tecnología para crear soluciones que impacten positivamente en la vida de las personas.',
  'about.p2':
    'La vertiente artística me ayuda a abordar cada proyecto con creatividad: creo que el buen software también se diseña. Actualmente exploro la intersección entre la ciencia de datos, el backend y las ciencias de la vida.',
  'about.facts.location': 'Ubicación',
  'about.facts.university': 'Universidad',
  'about.facts.status': 'Estado',
  'about.facts.statusValue': 'Abierto a colaborar',

  'projects.title': 'Proyectos',
  'projects.subtitle':
    'Una selección de repositorios donde la bioinformática, el backend y el aprendizaje automático se cruzan.',
  'projects.more': 'Otros proyectos',

  'skills.title': 'Tecnologías',
  'skills.subtitle': 'Las herramientas con las que construyo día a día.',
  'skills.languages': 'Lenguajes',
  'skills.frameworks': 'Frameworks y librerías',
  'skills.tools': 'Herramientas',

  'contact.title': 'Hablemos.',
  'contact.text':
    '¿Tienes una idea, un proyecto de investigación o simplemente quieres charlar sobre bioinformática y código? Escríbeme por LinkedIn o sígueme en GitHub.',
  'contact.linkedin': 'Escríbeme por LinkedIn',
  'contact.github': 'Sígueme en GitHub',

  'footer.rights': 'Todos los derechos reservados.',
  'footer.madeWith': 'Hecho con Astro',
};

type Dict = typeof es;

const dictionaries: Record<Lang, Dict> = {
  es,
  en: {
    'meta.role': 'Bioinformatics · Backend · Art',
    'meta.description':
      "Antonio Elias Sánchez Soto's portfolio — Bioinformatics Engineering student and backend developer based in Havana, Cuba.",

    'nav.label': 'Sections',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.title': 'Where biology meets code.',
    'hero.subtitle':
      "I'm Antonio — a Bioinformatics Engineering student and backend developer. I build tools that bridge science and software: from educational bots to platforms for analyzing biological sequences.",
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Get in touch',

    'about.title': 'About me',
    'about.p1':
      "I'm a Bioinformatics Engineering student at UCI and a backend developer. My goal is to combine biology and technology to build solutions that positively impact people's lives.",
    'about.p2':
      'My artistic side helps me approach every project with creativity: I believe good software is also designed. These days I explore the intersection between data science, backend development and the life sciences.',
    'about.facts.location': 'Location',
    'about.facts.university': 'University',
    'about.facts.status': 'Status',
    'about.facts.statusValue': 'Open to collaborate',

    'projects.title': 'Projects',
    'projects.subtitle':
      'A selection of repositories where bioinformatics, backend and machine learning meet.',
    'projects.more': 'Other projects',

    'skills.title': 'Technologies',
    'skills.subtitle': 'The tools I build with every day.',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks & libraries',
    'skills.tools': 'Tools',

    'contact.title': "Let's talk.",
    'contact.text':
      'Got an idea, a research project, or just want to chat about bioinformatics and code? Reach out on LinkedIn or follow me on GitHub.',
    'contact.linkedin': 'Message me on LinkedIn',
    'contact.github': 'Follow me on GitHub',

    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Built with Astro',
  },
};

export function getDict(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
