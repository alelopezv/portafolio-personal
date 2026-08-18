<script setup lang="ts">
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const content = {
  es: {
    heading: 'Sobre mí',
    body: 'Ingeniero en Informático con 2 años de experiencia en desarrollo frontend (Vue.js, JavaScript) para retail, banca y educación. Actualmente ampliando mi perfil hacia Full Stack con Python y Django.',
  },
  en: {
    heading: 'About me',
    body: 'Computer Engineer with 2 years of frontend development experience (Vue.js, JavaScript) across retail, banking, and education. Currently expanding into Full Stack with Python and Django.',
  }
}

const t = computed(() => content[languageStore.locale])
</script>

<template>
  <div id="about" class="container">
    <h2>{{ t.heading }}</h2>
    <p>{{ t.body }}</p>
  </div>
</template>

<style scoped>
</style>