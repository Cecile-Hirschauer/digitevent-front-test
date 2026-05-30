<script setup lang="ts">
import { useLogsStore } from '@/stores/logs'

const logsStore = useLogsStore()

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleString()
}

function truncate(text: string, maxLength = 50) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}
</script>

<template>
  <section class="log-panel" aria-label="Fetch logs">
    <h2 class="log-panel__title">Logs</h2>
    <ul v-if="logsStore.entries.length" class="log-panel__list">
      <li v-for="entry in logsStore.entries" :key="entry.id" class="log-panel__entry">
        <time class="log-panel__time">{{ formatDate(entry.timestamp) }}</time>
        <strong class="log-panel__type">{{ entry.type }}</strong>
        <span class="log-panel__content">{{ truncate(entry.content) }}</span>
      </li>
    </ul>
    <p v-else class="log-panel__empty">No logs yet.</p>
  </section>
</template>

<style scoped>
.log-panel {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
}

.log-panel__title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.log-panel__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.log-panel__entry {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
}

.log-panel__entry:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.log-panel__time {
  font-size: 0.8rem;
  color: #888;
}

.log-panel__type {
  text-transform: uppercase;
  font-size: 0.75rem;
  background: #f0f0f0;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
}

.log-panel__content {
  color: #555;
  font-size: 0.9rem;
}

.log-panel__empty {
  color: #888;
  font-style: italic;
}
</style>
