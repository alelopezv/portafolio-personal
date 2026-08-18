import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
    const locale = ref<'es' | 'en'>('es')

    function toggleLocale() {
        locale.value = locale.value === 'es' ? 'en' : 'es'
    }

    return { locale, toggleLocale }
})