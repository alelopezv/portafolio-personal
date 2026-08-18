<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const contactInfo = {
  es: {
    heading: 'Contacto',
    body: 'Si deseas ponerte en contacto conmigo, puedes enviarme un correo electrónico a <a href="mailto:ale.lopezv1995@gmail.com">ale.lopezv1995@gmail.com</a>.',
  },
  en: {
    heading: 'Contact',
    body: 'If you want to get in touch with me, you can send me an email to <a href="mailto:ale.lopezv1995@gmail.com">ale.lopezv1995@gmail.com</a>.',
  }
}
</script>

<template>
  <div id="contact" class="container">
    <h2>{{ contactInfo[languageStore.locale].heading }}</h2>
    <p v-html="contactInfo[languageStore.locale].body"></p>
    <ul>
      <li><a href="https://www.linkedin.com/in/alelopezv" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/alelopezv" target="_blank">GitHub</a></li>
    </ul>
  </div>
</template>

<style scoped>
</style>