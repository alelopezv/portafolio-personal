<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const content = {
  es: {
    heading: 'Educación',
    degree: 'Ingeniería en Informática (Titulado)',
    institution: 'Instituto Profesional DUOC UC — Concepción, Chile',
    period: '2019 — 2022',
  },
  en: {
    heading: 'Education',
    degree: 'Computer Engineering (Degree Conferred)',
    institution: 'DUOC UC Professional Institute — Concepción, Chile',
    period: '2019 — 2022',
  },
}
</script>

<template>
  <div id="education" class="container">
    <h2>{{ content[languageStore.locale].heading }}</h2>
    <div class="education-item">
      <div class="education-header">
        <h3>{{ content[languageStore.locale].degree }}</h3>
        <span class="education-period">{{ content[languageStore.locale].period }}</span>
      </div>
      <p class="education-institution">{{ content[languageStore.locale].institution }}</p>
    </div>
  </div>
</template>

<style scoped>
.education-item {
  border-left: 2px solid var(--color-border);
  padding-left: 1.25rem;
  margin-top: 1.5rem;
}

.education-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.education-period {
  color: var(--color-text-soft);
  font-size: 0.85rem;
}

.education-institution {
  color: var(--color-accent);
  font-weight: 600;
  margin-top: 0.15rem;
}
</style>