<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { projects } from '@/data/projects'
import { onMounted } from 'vue'

onMounted(() => {
  const cards = document.querySelectorAll('.project-card')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.2 })

  cards.forEach((card) => observer.observe(card))
})

const languageStore = useLanguageStore()
</script>

<template>
  <div id="projects" class="container">
    <h2>{{ languageStore.locale === 'es' ? 'Proyectos' : 'Projects' }}</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <img :src="project.images[0]" :alt="project.title">
        <p class="card-description">{{ project.description[languageStore.locale] }}</p>
        <div class="card-tags">
          <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
        </div>
        <RouterLink :to="{ name: 'project-detail', params: { slug: project.slug } }" class="card-link">
          {{ languageStore.locale === 'es' ? 'Ver más' : 'View more' }}
        </RouterLink>
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
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.3s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-link:visited {
  color: var(--color-accent);
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

.card-link {
  display: block;
  padding: 0 1rem 1rem;
  margin-top: auto;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0 1rem 1rem;
}

.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tag {
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.75rem;
}
</style>