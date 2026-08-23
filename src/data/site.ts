export type Lang = 'es' | 'en';

const site = {
  name: 'Antonio Elias Sánchez Soto',
  shortName: 'Antonio',
  handle: 'sonoAESS',
  location: { es: 'La Habana, Cuba', en: 'Havana, Cuba' } as Record<Lang, string>,
  university: 'UCI',
  orcidId: '0009-0003-9689-6701',
  roles: {
    es: ['Estudiante de Bioinformática', 'Desarrollador Backend', 'Artista Creativo'],
    en: ['Bioinformatics Student', 'Backend Developer', 'Creative Artist'],
  } as Record<Lang, string[]>,
  socials: {
    github: 'https://github.com/sonoAESS',
    linkedin:
      'https://www.linkedin.com/in/antonio-elias-s%C3%A1nchez-soto-b690b5396',
    orcid: 'https://orcid.org/0009-0003-9689-6701',
  },
};

export default site;
