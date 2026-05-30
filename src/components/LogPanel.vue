<script setup lang="ts">
import { useLogsStore } from '@/stores/logs'

const logsStore = useLogsStore()

function formatDate(timestamp: number) {
  const d = new Date(timestamp)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')
  return `${month}-${day}:${hours}:${minutes}:${seconds}`
}

function truncate(text: string, maxLength = 30) {
  return text.length > maxLength ? text.slice(0, maxLength) + ' ...' : text
}
</script>

<template>
  <section class="log-panel" aria-label="Fetch logs">
    <h2 class="log-panel__title">Logs</h2>
    <ul v-if="logsStore.entries.length" class="log-panel__list">
      <li v-for="entry in logsStore.entries" :key="entry.id" class="log-panel__entry">
        <time class="log-panel__time">{{ formatDate(entry.timestamp) }}</time>
        <strong class="log-panel__type">{{ entry.type.charAt(0).toUpperCase() + entry.type.slice(1) }}</strong>
        <span class="log-panel__content">{{ truncate(entry.content) }}</span>
      </li>
    </ul>
    <p v-else class="log-panel__empty">No logs yet.</p>
  </section>
</template>

<style scoped>
.log-panel {
  background: var(--color-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--padding-card);
  height: 100%;
}

.log-panel__title {
  font-size: 1.1rem;
  text-decoration: underline;
  margin-bottom: 1.25rem;
}

.log-panel__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.log-panel__entry {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.log-panel__time {
  font-size: 0.85rem;
  color: var(--color-text);
}

.log-panel__type {
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: underline;
}

.log-panel__content {
  color: var(--color-text);
  font-size: 0.9rem;
}

.log-panel__empty {
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
