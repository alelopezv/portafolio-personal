<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
const languageStore = useLanguageStore()

const navItems = [
  { href: '#about', es: 'Sobre mí', en: 'About me' },
  { href: '#projects', es: 'Proyectos', en: 'Projects' },
  { href: '#contact', es: 'Contacto', en: 'Contact' },
]
</script>

<template>
  <header>
    <div class="container header-inner">
      <nav>
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href">{{ item[languageStore.locale] }}</a>
          </li>
        </ul>
      </nav>
      <button @click="languageStore.toggleLocale()">
        {{ languageStore.locale === 'es' ? 'en' : 'es' }}
      </button>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
  a {
    color: var(--color-accent);
  }

  a:hover {
    color: var(--color-accent-hover);
  }

  .nav-list {
    display: flex;        /* pone los <li> en fila en vez de uno debajo del otro */
    gap: 1.5rem;           /* espacio entre cada link, sin necesitar margin manual */
    align-items: center;   /* los alinea verticalmente al centro entre ellos */
  }
  
  header {
    padding: 1rem 0;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
