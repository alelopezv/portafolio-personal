<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const content = {
  es: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o fue movida.',
    link: 'Volver al inicio',
  },
  en: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or was moved.',
    link: 'Back to home',
  },
}
</script>

<template>
  <div class="container not-found">
    <h1>404</h1>
    <p class="not-found-title">{{ content[languageStore.locale].title }}</p>
    <p class="not-found-text">{{ content[languageStore.locale].text }}</p>
    <RouterLink to="/" class="back-link">
      ← {{ content[languageStore.locale].link }}
    </RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  padding: 4rem 0;
  text-align: center;
}

.not-found-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.not-found-text {
  color: var(--color-text-soft);
  margin: 0.75rem 0 1.5rem;
}

.back-link {
  color: var(--color-accent);
  font-weight: 600;
}

.back-link:hover {
  color: var(--color-accent-hover);
}
</style>