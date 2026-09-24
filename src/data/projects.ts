export interface Project {
  title: string
  slug: string
  images: string[]     // <- ahora es un arreglo
  description: { es: string; en: string }
  technologies: string[]
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Parque Arauco — Parque Alegra',
    slug: 'parque-arauco',
    images: ['/projects/parquearauco-1.png', '/projects/parquearauco-2.png', '/projects/parquearauco-3.png', '/projects/parquearauco-4.png', '/projects/parquearauco-5.png', '/projects/parquearauco-6.png', '/projects/parquearauco-7.png', '/projects/parquearauco-8.png', '/projects/parquearauco-9.png'],
    description: {
      es: 'Desarrollo y mantención frontend de múltiples sitios del ecosistema Parque Arauco en Chile y Colombia — incluyendo Parque Alegra, Parque Arboleda y otros — implementando módulos dinámicos, componentes reutilizables para reemplazo de contenido, y administración de contenido mediante Modyo CMS. Contribución realizada como parte del equipo, mediante tickets Jira bajo metodología Scrum, a través de VASS Company.',
      en: 'Frontend development and maintenance of multiple sites within the Parque Arauco ecosystem in Chile and Colombia — including Parque Alegra, Parque Arboleda, and others — implementing dynamic modules, reusable components for content replacement, and content management through the Modyo CMS. Contribution made as part of the team, through Jira tickets under Scrum methodology, via VASS Company.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Modyo'],
  },
  {
    title: 'Consorcio — Simulador RRVV',
    slug: 'consorcio',
    images: ['/projects/consorcio-1.png', '/projects/consorcio-2.png', '/projects/consorcio-3.png', '/projects/consorcio-4.png', '/projects/consorcio-5.png', '/projects/consorcio-6.png'],
    description: {
      es: 'Desarrollo frontend de simuladores previsionales multi-step para procesos de onboarding financiero, utilizando formularios dinámicos, validaciones y componentes reutilizables. Contribución al desarrollo bajo metodología Scrum y tickets Jira, incluyendo la implementación de eventos de analítica con Amplitude. Proyecto realizado a través de VASS Company.',
      en: 'Frontend development of multi-step predictive simulators for financial onboarding processes, utilizing dynamic forms, validations, and reusable components. Contribution to development under Scrum methodology and Jira tickets, including the implementation of Amplitude analytics events. Project developed through VASS Company.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'APIs REST', 'Amplitude'],
  },
  {
    title: 'Admisión Derecho U. de Chile',
    slug: 'uchile',
    images: ['/projects/uchile-1.png', '/projects/uchile-2.png', '/projects/uchile-3.jpg', '/projects/uchile-4.jpg', '/projects/uchile-5.jpg', '/projects/uchile-6.jpg'],
    description: {
      es: 'Diseño y maquetación desde cero, como desarrollador único, del sitio de admisión de la Facultad de Derecho de la Universidad de Chile, construido con WordPress, HTML, CSS y JavaScript Vainilla.',
      en: 'End-to-end design and development, as the sole developer, of the admissions site for the University of Chile Law School, built with WordPress, HTML, CSS, and vanilla JavaScript.',
    },
    technologies: ['WordPress', 'JavaScript', 'HTML5', 'CSS3', 'Google Analytics 4', 'Google Tag Manager', 'cPanel'],
    liveUrl: 'https://admision.derecho.uchile.cl/'
  },
  {
    title: 'EchoReviews',
    slug: 'echoreviews',
    images: ['/projects/echoreviews-1.png', '/projects/echoreviews-2.png'],
    description: {
      es: 'Aplicación Full Stack desacoplada para reseñas culturales de anime, música y videojuegos, con autenticación JWT, un flujo de moderación donde el administrador aprueba o rechaza contenido sin poder editarlo, y una API REST cubierta por 65 pruebas automatizadas verificadas con pruebas de mutación; desplegada con Docker Compose (nginx, Django, MySQL).',
      en: 'Decoupled full stack app for cultural reviews on anime, music, and video games, with JWT authentication, a moderation workflow where the admin approves or rejects content without being able to edit it, and a REST API covered by 65 automated tests verified with mutation testing; deployed with Docker Compose (nginx, Django, MySQL).',
    },
    technologies: ['Python', 'Django', 'Django REST Framework', 'JWT', 'MySQL', 'Docker', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
]
