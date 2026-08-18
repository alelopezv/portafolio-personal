<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const projects = [
  {
    title: 'Parque Arauco — Parque Alegra',
    image: '/projects/parquearauco-1.png',
    description: {
      es: 'Desarrollo y mantención frontend de una plataforma comercial para Parque Alegra Colombia, implementando módulos dinámicos, componentes reutilizables y contenido administrable mediante Modyo CMS.',
      en: 'Frontend development and maintenance of a commercial platform for Parque Alegra Colombia, implementing dynamic modules, reusable components, and manageable content through the Modyo CMS.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Modyo'],
  },
  {
    title: 'Consorcio — Simuladores Previsionales',
    image: '/projects/consorcio-1.png',
    description: {
      es: 'Desarrollo frontend de simuladores previsionales multi-step para procesos de onboarding financiero, utilizando formularios dinámicos, validaciones y componentes reutilizables.',
      en: 'Frontend development of multi-step predictive simulators for financial onboarding processes, utilizing dynamic forms, validations, and reusable components.',
    },
    technologies: ['Vue.js', 'VueX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'APIs REST'],
  },
  {
    title: 'Admisión Derecho U. de Chile',
    image: '/projects/uchile-1.png',
    description: {
      es: 'Diseño y maquetación desde cero, como desarrollador único, del sitio de admisión de la Facultad de Derecho de la Universidad de Chile, construido con WordPress, HTML, CSS y JavaScript Vainilla.',
      en: 'End-to-end design and development, as the sole developer, of the admissions site for the University of Chile Law School, built with WordPress, HTML, CSS, and vanilla JavaScript.',
    },
    technologies: ['WordPress', 'JavaScript', 'HTML5', 'CSS3', 'Google Analytics 4', 'Google Tag Manager', 'cPanel'],
  },
  {
    title: 'EchoReviews',
    image: '/projects/echoreviews-1.png',
    description: {
      es: 'Aplicación Full Stack desacoplada para la gestión de reseñas culturales sobre anime, música y videojuegos, desarrollada con una API REST y autenticación JWT.',
      en: 'Decoupled full stack app for managing cultural reviews on anime, music, and video games, built with a REST API and JWT authentication.',
    },
    technologies: ['Python', 'Django', 'Django REST Framework', 'JWT', 'MySQL', 'Docker', 'React.js'],
  },
]

</script>

<template>
  <div id="projects" class="container">
    <h2>{{ languageStore.locale === 'es' ? 'Proyectos' : 'Projects' }}</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <img :src="project.image" :alt="project.title">
        <p>{{ project.description[languageStore.locale] }}</p>
        <p>{{ project.technologies.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--color-bg-soft);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.project-card h3,
.project-card p {
  padding: 0 1rem;
}

.project-card p:last-child {
  padding-bottom: 1rem;
}
</style>