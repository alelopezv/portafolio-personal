<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { useThemeStore } from '@/stores/theme'
import { Sun, Moon } from 'lucide-vue-next'
import AppFooter from '@/components/AppFooter.vue'
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
function closeMenu() {
  isMenuOpen.value = false
}

const languageStore = useLanguageStore()
const themeStore = useThemeStore()

const navItems = [
  { path: '/', hash: '#about', es: 'Sobre mí', en: 'About me' },
  { path: '/', hash: '#projects', es: 'Proyectos', en: 'Projects' },
  { path: '/', hash: '#work', es: 'Trayectoria', en: 'Experience' },
  { path: '/', hash: '#education', es: 'Educación', en: 'Education' },
  { path: '/', hash: '#footer', es: 'Contacto', en: 'Contact' }
]
</script>

<template>
  <header>
    <div class="container header-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <span class="brand-badge">AL</span>
        <span class="brand-name">Alejandro<br />López</span>
      </RouterLink>

      <nav class="nav-desktop">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.hash">
            <RouterLink :to="{ path: item.path, hash: item.hash }">
              {{ item[languageStore.locale] }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <div class="toggles">
          <button @click="languageStore.toggleLocale()">
            {{ languageStore.locale === 'es' ? 'en' : 'es' }}
          </button>
          <button @click="themeStore.toggleTheme()">
            <Sun v-if="themeStore.theme === 'dark'" :size="18" />
            <Moon v-else :size="18" />
          </button>
        </div>
        <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
          <Menu v-if="!isMenuOpen" :size="22" />
          <X v-else :size="22" />
        </button>
      </div>
    </div>

    <div class="mobile-menu" v-if="isMenuOpen">
      <ul class="nav-list-mobile">
        <li v-for="item in navItems" :key="item.hash">
          <RouterLink :to="{ path: item.path, hash: item.hash }" @click="closeMenu">
            {{ item[languageStore.locale] }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <RouterView></RouterView>
  <AppFooter />
</template>

<style scoped>
  a {
    color: var(--color-accent);
  }

  a:hover {
    color: var(--color-accent-hover);
  }

  .brand {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--color-inverse-text);
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .brand-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 999px;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
  }
  nav a{
    color: var(--color-inverse-text);
  }

  .nav-list {
    display: flex;        /* pone los <li> en fila en vez de uno debajo del otro */
    gap: 1.5rem;           /* espacio entre cada link, sin necesitar margin manual */
    align-items: center;   /* los alinea verticalmente al centro entre ellos */
  }
  
  header {
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--color-inverse-bg);
    color: var(--color-inverse-text);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .nav-list-mobile {
    align-items: flex-start;
  }

  .nav-list-mobile li {
    width: 100%;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border);
  }

  .nav-list-mobile li:last-child {
    border-bottom: none;
    padding-bottom: 0;
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

  .menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--color-inverse-text);
    cursor: pointer;
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 768px) {
    .nav-desktop {
      display: none;
    }
    .menu-btn {
      display: flex;
      align-items: center;
    }
    .mobile-menu {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem 1.5rem 0.5rem;
      background-color: var(--color-inverse-bg);
    }
    .nav-list-mobile {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }
    .nav-list-mobile a {
      color: var(--color-inverse-text);
    }
  }
</style>
