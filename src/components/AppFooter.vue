<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

const availability = {
  es: 'Abierto a nuevas oportunidades remotas',
  en: 'Open to new remote opportunities',
}
</script>

<template>
    <footer id="footer" class="site-footer">
        <div class="container footer-inner">
            <p class="availability">{{ availability[languageStore.locale] }}</p>
            <div class="footer-links">
                <a href="https://linkedin.com/in/alelopezv" target="_blank">LinkedIn</a>
                <a href="https://github.com/alelopezv" target="_blank">GitHub</a>
                <a href="mailto:ale.lopezv1995@gmail.com">Email</a>
                <a href="/CV-Alejandro-Lopez.pdf" download>CV</a>
            </div>
            <p class="copyright">© 2026 Alejandro López</p>
        </div>
        
    </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-inverse-bg);
  color: var(--color-inverse-text);
  border-top: 1px solid var(--color-border);
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.availability {
  color: var(--color-inverse-text);
  font-weight: 600;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--color-text-soft);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.copyright {
  color: var(--color-text-soft);
  font-size: 0.85rem;
}

.footer-links a,
.copyright {
  color: var(--color-inverse-text);
}
</style>