<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { useThemeStore } from '@/stores/theme'
import { Sun, Moon } from 'lucide-vue-next'

const languageStore = useLanguageStore()
const themeStore = useThemeStore()

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
      <div class="toggles">
        <button @click="languageStore.toggleLocale()">
          {{ languageStore.locale === 'es' ? 'en' : 'es' }}
        </button>
        <button @click="themeStore.toggleTheme()">
          <Sun v-if="themeStore.theme === 'dark'" :size="18" />
          <Moon v-else :size="18" />
        </button>
      </div>
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

  .toggles { 
    display: flex; 
    gap: 0.5rem; 
  }

  .toggles button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
    background-color: var(--color-bg-soft);
    color: var(--color-text);
    border-radius: 999px;
    padding: 0.4rem 0.75rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .toggles button:hover {
    background-color: var(--color-border);
  }
</style>
