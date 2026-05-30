import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LogEntry } from '@/interfaces/log'

export const useLogsStore = defineStore('logs', () => {
  const entries = ref<LogEntry[]>([])

  function addLog(type: LogEntry['type'], content: string) {
    entries.value.unshift({ type, content, timestamp: new Date() })
  }

  return { entries, addLog }
})
