<script setup lang="ts">
import { useLogsStore } from '@/stores/logs'

const logsStore = useLogsStore()

function formatDate(date: Date) {
  return new Date(date).toLocaleString()
}

function truncate(text: string, maxLength = 50) {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text
}
</script>

<template>
  <div class="log-panel">
    <h2>Logs</h2>
    <ul v-if="logsStore.entries.length">
      <li v-for="(entry, index) in logsStore.entries" :key="index">
        {{ formatDate(entry.timestamp) }} — <strong>{{ entry.type }}</strong> — {{ truncate(entry.content) }}
      </li>
    </ul>
    <p v-else>No logs yet.</p>
  </div>
</template>
