<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { projects } from '@/data/projects'
import { useLanguageStore } from '@/stores/language'

const route = useRoute()
const languageStore = useLanguageStore()
const project = computed(() =>
  projects.find(p => p.slug === route.params.slug)
)

const currentIndex = ref(0)

function nextImage() {
  if (!project.value) return
  currentIndex.value = (currentIndex.value + 1) % project.value.images.length
}

function prevImage() {
  if (!project.value) return
  currentIndex.value = (currentIndex.value - 1 + project.value.images.length) % project.value.images.length
}
</script>

<template>
  <div v-if="project" id="project-detail" class="container detail">
    <h1>{{ project.title }}</h1>

    <div class="carousel">
      <div class="carousel-image-box">
        <img :src="project.images[currentIndex]" :alt="`${project.title} ${currentIndex + 1}`" />
      </div>
      <div class="carousel-controls">
        <button @click="prevImage" class="carousel-btn">‹</button>
        <span class="carousel-indicator">{{ currentIndex + 1 }} / {{ project.images.length }}</span>
        <button @click="nextImage" class="carousel-btn">›</button>
      </div>
    </div>

    <p class="detail-description">{{ project.description[languageStore.locale] }}</p>

    <div class="tech-tags">
      <span v-for="tech in project.technologies" :key="tech" class="tag">
        {{ tech }}
      </span>
    </div>

    <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="live-link">
      {{ languageStore.locale === 'es' ? 'Ver sitio en vivo ↗' : 'View live site ↗' }}
    </a>

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

.detail h1 {
  margin: 0 0 1rem;
}

.back-link {
  display: inline-block;
  color: var(--color-accent);
  margin-top: 2rem;
}

.back-link:hover {
  color: var(--color-accent-hover);
}

.carousel {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0 0 1.5rem;
}

.carousel-image-box {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  background-color: transparent;
  border-radius: 0.75rem;
  overflow: hidden;
}

.carousel-image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.carousel-btn {
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-text-soft);
  color: var(--color-text);
  border-radius: 999px;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  flex-shrink: 0;
}

.carousel-indicator {
  color: var(--color-text-soft);
  font-size: 0.9rem;
  min-width: 3rem;
  text-align: center;
}

.detail-description {
  color: var(--color-text);
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

.live-link {
  display: inline-block;
  color: var(--color-accent);
  font-weight: 600;
  margin-top: 0.5rem;
}

.live-link:hover {
  color: var(--color-accent-hover);
}
</style>