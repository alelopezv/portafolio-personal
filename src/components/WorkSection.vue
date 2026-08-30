<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { jobs } from '@/data/jobs'

const languageStore = useLanguageStore()
</script>

<template>
  <div id="work" class="container">
    <h2>{{ languageStore.locale === 'es' ? 'Trayectoria' : 'Experience' }}</h2>
    <div class="job-list">
      <div class="job-item" v-for="job in jobs" :key="job.company">
        <div class="job-header">
          <h3>{{ job.company }}</h3>
          <span class="job-period">{{ job.period }}</span>
        </div>
        <p class="job-role">{{ job.role[languageStore.locale] }}</p>
        <p class="job-description">{{ job.description[languageStore.locale] }}</p>
        <div class="job-tags">
          <span v-for="tech in job.technologies" :key="tech" class="tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
}

.job-item {
  border-left: 2px solid var(--color-border);
  padding-left: 1.25rem;
}

.job-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.job-period {
  color: var(--color-text-soft);
  font-size: 0.85rem;
}

.job-role {
  color: var(--color-accent);
  font-weight: 600;
  margin-top: 0.15rem;
}

.job-description {
  margin-top: 0.5rem;
  line-height: 1.6;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.tag {
  background-color: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
}
</style>