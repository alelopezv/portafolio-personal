export interface Project {
  title: string
  slug: string
  image: string
  description: { es: string; en: string }
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: 'Parque Arauco — Parque Alegra',
    slug: 'parque-arauco',
    image: '/projects/parquearauco-1.png',
    description: {
      es: 'Desarrollo y mantención frontend de una plataforma comercial para Parque Alegra Colombia, implementando módulos dinámicos, componentes reutilizables y contenido administrable mediante Modyo CMS.',
      en: 'Frontend development and maintenance of a commercial platform for Parque Alegra Colombia, implementing dynamic modules, reusable components, and manageable content through the Modyo CMS.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Modyo'],
  },
  {
    title: 'Consorcio — Simuladores Previsionales',
    slug: 'consorcio',
    image: '/projects/consorcio-1.png',
    description: {
      es: 'Desarrollo frontend de simuladores previsionales multi-step para procesos de onboarding financiero, utilizando formularios dinámicos, validaciones y componentes reutilizables.',
      en: 'Frontend development of multi-step predictive simulators for financial onboarding processes, utilizing dynamic forms, validations, and reusable components.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'APIs REST'],
  },
  {
    title: 'Admisión Derecho U. de Chile',
    slug: 'uchile',
    image: '/projects/uchile-1.png',
    description: {
      es: 'Diseño y maquetación desde cero, como desarrollador único, del sitio de admisión de la Facultad de Derecho de la Universidad de Chile, construido con WordPress, HTML, CSS y JavaScript Vainilla.',
      en: 'End-to-end design and development, as the sole developer, of the admissions site for the University of Chile Law School, built with WordPress, HTML, CSS, and vanilla JavaScript.',
    },
    technologies: ['WordPress', 'JavaScript', 'HTML5', 'CSS3', 'Google Analytics 4', 'Google Tag Manager', 'cPanel'],
  },
  {
    title: 'EchoReviews',
    slug: 'echoreviews',
    image: '/projects/echoreviews-1.png',
    description: {
      es: 'Aplicación Full Stack desacoplada para la gestión de reseñas culturales sobre anime, música y videojuegos, desarrollada con una API REST y autenticación JWT.',
      en: 'Decoupled full stack app for managing cultural reviews on anime, music, and video games, built with a REST API and JWT authentication.',
    },
    technologies: ['Python', 'Django', 'Django REST Framework', 'JWT', 'MySQL', 'Docker', 'React.js'],
  },
]
