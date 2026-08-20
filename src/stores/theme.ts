import { watch, ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>('light')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(theme, (nuevoValor) => {
    document.documentElement.classList.toggle('dark', nuevoValor === 'dark')
  })

  return { theme, toggleTheme }
})