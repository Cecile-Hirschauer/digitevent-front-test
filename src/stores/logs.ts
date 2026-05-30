import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LogEntry } from '@/interfaces/log'

export const useLogsStore = defineStore('logs', () => {
  const entries = ref<LogEntry[]>([])
  let nextId = 0

  function addLog(type: LogEntry['type'], content: string) {
    entries.value.unshift({ id: nextId++, type, content, timestamp: Date.now() })
  }

  return { entries, addLog }
})
