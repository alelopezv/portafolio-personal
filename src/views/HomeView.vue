<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const heroText = {
  es: { role: 'Frontend Developer', accent: 'en camino a Full Stack' },
  en: { role: 'Frontend Developer', accent: 'building towards Full Stack' },
}
</script>

<template>
  <div>
    <section class="hero container">
      <h1>Alejandro López</h1>
      <p class="hero-subtitle">
        {{ heroText[languageStore.locale].role }}
        <em>{{ heroText[languageStore.locale].accent }}</em>
      </p>
    </section>
    <AboutSection />
    <ProjectsSection />
    <WorkSection />
    <EducationSection />
  </div>
</template>

<style scoped>
.hero {
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-soft);
}

.hero-subtitle em {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  color: var(--color-text);
}
</style>