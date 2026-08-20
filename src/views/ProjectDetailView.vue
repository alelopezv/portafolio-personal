<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '@/data/projects'
import { useLanguageStore } from '@/stores/language'

const route = useRoute()
const languageStore = useLanguageStore()
const project = computed(() =>
  projects.find(p => p.slug === route.params.slug)
)
</script>

<template>
  <div v-if="project" id="project-detail" class="container detail">
    <h1>{{ project.title }}</h1>
    <img :src="project.image" :alt="project.title" class="detail-image" />
    <p class="detail-description">{{ project.description[languageStore.locale] }}</p>
    <div class="tech-tags">
      <span v-for="tech in project.technologies" :key="tech" class="tag">
        {{ tech }}
      </span>
    </div>
    <RouterLink to="/" class="back-link">
      ← {{ languageStore.locale === 'es' ? 'Volver' : 'Back' }}
    </RouterLink>
  </div>
  <div v-else class="container detail">
    <p>Proyecto no encontrado.</p>
    <RouterLink to="/" class="back-link">← {{ languageStore.locale === 'es' ? 'Volver' : 'Back' }}</RouterLink>
  </div>
</template>

<style scoped>
.detail {
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.back-link {
  display: inline-block;
  color: var(--color-accent);
  margin-top: 2rem;
}

.back-link:hover {
  color: var(--color-accent-hover);
}

.detail-image {
  width: 100%;
  border-radius: 0.75rem;
  margin: 1rem 0;
  object-fit: cover;
}

.detail-description {
  color: var(--color-text-soft);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  font-size: 0.85rem;
}
</style>