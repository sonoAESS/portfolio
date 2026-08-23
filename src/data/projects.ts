import type { Lang } from './site';

export interface Project {
  name: string;
  url: string;
  desc: Record<Lang, string>;
  language?: string;
  stars?: number;
  forks?: number;
  tags?: string[];
  year: number;
}

const repo = (name: string) => `https://github.com/sonoAESS/${name}`;

export const featured: Project[] = [
  {
    name: 'MasterCrowBot',
    url: repo('MasterCrowBot'),
    desc: {
      es: 'Bot de Telegram con vectorización de documentos para apoyar a los estudiantes de Ingeniería en Bioinformática.',
      en: 'Telegram bot with document vectorization to support Bioinformatics Engineering students.',
    },
    language: 'Python',
    stars: 2,
    forks: 1,
    tags: ['Telegram', 'NLP', 'RAG'],
    year: 2025,
  },
  {
    name: 'BioStream',
    url: repo('BioStream'),
    desc: {
      es: 'Plataforma modular para la gestión y análisis de secuencias biológicas, con backend en Django + Biopython y frontend interactivo en Streamlit.',
      en: 'Modular platform for managing and analyzing biological sequences, with a Django + Biopython backend and an interactive Streamlit frontend.',
    },
    language: 'Python',
    tags: ['Django', 'Biopython', 'Streamlit'],
    year: 2025,
  },
  {
    name: 'universal-eeg-transformer',
    url: repo('universal-eeg-transformer'),
    desc: {
      es: 'Arquitectura transformer para el análisis y clasificación de señales de electroencefalografía (EEG).',
      en: 'Transformer architecture for EEG signal analysis and classification.',
    },
    language: 'Jupyter Notebook',
    tags: ['Transformers', 'EEG', 'Deep Learning'],
    year: 2026,
  },
  {
    name: 'oncoAI-api',
    url: repo('oncoAI-api'),
    desc: {
      es: 'API que explora aplicaciones de la inteligencia artificial en el ámbito de la oncología.',
      en: 'API exploring applications of artificial intelligence in the oncology domain.',
    },
    language: 'Python',
    stars: 1,
    tags: ['Python', 'API', 'Health AI'],
    year: 2025,
  },
  {
    name: 'jovenclub-gestor-kivy',
    url: repo('jovenclub-gestor-kivy'),
    desc: {
      es: 'App móvil en KivyMD para gestionar usuarios, clientes y servicios en los Joven Club de Cuba: operaciones, estadísticas de ingresos y reportes PDF.',
      en: 'KivyMD mobile app to manage users, clients and services at Joven Club Cuba: operations, income stats and PDF reports.',
    },
    language: 'Python',
    forks: 1,
    tags: ['KivyMD', 'Mobile', 'Reports'],
    year: 2025,
  },
  {
    name: 'quimica-grafo-teorica',
    url: repo('quimica-grafo-teorica'),
    desc: {
      es: 'Estudio computacional de moléculas mediante teoría de grafos, descriptores químicos y aprendizaje automático.',
      en: 'Computational study of molecules using graph theory, chemical descriptors and machine learning.',
    },
    language: 'HTML',
    tags: ['Graph Theory', 'Chemoinformatics', 'ML'],
    year: 2025,
  },
];

export const others: Project[] = [
  {
    name: 'erce_2019_cuba_3-ro',
    url: repo('erce_2019_cuba_3-ro'),
    desc: {
      es: 'Análisis de datos del estudio regional ERCE 2019 para Cuba (3er grado).',
      en: 'Data analysis of the ERCE 2019 regional study for Cuba (3rd grade).',
    },
    language: 'Jupyter Notebook',
    year: 2026,
  },
  {
    name: 'CombinarPDFs',
    url: repo('CombinarPDFs'),
    desc: {
      es: 'Programa en Python que facilita unir archivos PDF de forma intuitiva.',
      en: 'Python program that makes merging PDF files intuitive.',
    },
    language: 'Python',
    year: 2026,
  },
  {
    name: 'BioML',
    url: repo('BioML'),
    desc: {
      es: 'Experimentos de aprendizaje automático aplicados a datos biológicos.',
      en: 'Machine learning experiments applied to biological data.',
    },
    language: 'Jupyter Notebook',
    forks: 1,
    year: 2026,
  },
  {
    name: 'trabajo-final-biologia-sistemas',
    url: repo('trabajo-final-biologia-sistemas'),
    desc: {
      es: 'Trabajo final del curso de Biología de Sistemas.',
      en: 'Final project for the Systems Biology course.',
    },
    language: 'Jupyter Notebook',
    year: 2025,
  },
  {
    name: 'Estudio-Inteligencia-Artificial',
    url: repo('Estudio-Inteligencia-Artificial'),
    desc: {
      es: 'Cuadernos de estudio sobre los fundamentos de la inteligencia artificial.',
      en: 'Study notebooks covering the foundations of artificial intelligence.',
    },
    language: 'Jupyter Notebook',
    stars: 1,
    forks: 1,
    year: 2025,
  },
  {
    name: 'chemY',
    url: repo('chemY'),
    desc: {
      es: 'Herramientas de química computacional en Python.',
      en: 'Computational chemistry tools in Python.',
    },
    language: 'Python',
    year: 2025,
  },
  {
    name: 'BioProgrammer',
    url: repo('BioProgrammer'),
    desc: {
      es: 'Scripts y utilidades para tareas de programación en bioinformática.',
      en: 'Scripts and utilities for bioinformatics programming tasks.',
    },
    language: 'Python',
    year: 2024,
  },
  {
    name: 'Estructura-de-Datos-en-Java',
    url: repo('Estructura-de-Datos-en-Java'),
    desc: {
      es: 'Implementaciones de estructuras de datos en Java.',
      en: 'Data structure implementations in Java.',
    },
    language: 'Java',
    stars: 1,
    year: 2024,
  },
  {
    name: 'Pesca_en-Cuba',
    url: repo('Pesca_en-Cuba'),
    desc: {
      es: 'Fork del proyecto Pesca en Cuba — visualización de datos del sector pesquero.',
      en: 'Fork of the Pesca en Cuba project — data visualization of the fishing industry.',
    },
    language: 'HTML',
    year: 2024,
  },
];

export const languageColors: Record<string, string> = {
  Python: '#3776ab',
  Java: '#b07219',
  HTML: '#e34c26',
  'Jupyter Notebook': '#f37726',
};
