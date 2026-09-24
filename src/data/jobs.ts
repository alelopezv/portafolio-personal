export interface Job {
  company: string
  role: { es: string; en: string }
  period: string
  description: { es: string; en: string }
  technologies: string[]
}

export const jobs: Job[] = [
  {
    company: 'Universidad de Chile — Facultad de Derecho',
    role: { es: 'Desarrollador Web Freelance', en: 'Freelance Web Developer' },
    period: 'Nov 2025 — Dic 2025',
    description: {
      es: 'Diseño y maquetación de principio a fin, como desarrollador único, del sitio de admisión de la Facultad, incluyendo SEO técnico y analítica.',
      en: 'End-to-end design and development, as sole developer, of the admissions site for the Faculty, including technical SEO and analytics.',
    },
    technologies: ['WordPress', 'JavaScript', 'HTML5', 'CSS3', 'GA4', 'GTM'],
  },
  {
    company: 'VASS Company',
    role: { es: 'Frontend Developer', en: 'Frontend Developer' },
    period: 'Ene 2023 — Ago 2024',
    description: {
      es: 'Desarrollo de interfaces en Vue.js para clientes enterprise dentro del Clan Digital DX, incluyendo Parque Arauco, Banco Central y Consorcio, participando en flujos CI/CD y metodologías ágiles.',
      en: 'Vue.js interface development for enterprise clients within the Digital DX unit, including Parque Arauco, Banco Central and Consorcio, participating in CI/CD pipelines and agile methodologies.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'Modyo', 'Liferay', 'Bitbucket Pipelines', 'Scrum'],
  },
]