<script setup lang="ts">
import { ref } from 'vue'
import ContentCard from '@/components/ContentCard.vue'
import LogPanel from '@/components/LogPanel.vue'
import { fetchJokes, fetchFacts } from '@/services/api'
import { useLogsStore } from '@/stores/logs'

const logsStore = useLogsStore()
const jokeContent = ref('')
const isJokelaoding = ref(false)
const jokeError = ref<string | null>(null)
const factContent = ref('')
const isFactLoading = ref(false)
const factError = ref<string | null>(null)

async function handleFetchJoke() {
  isJokelaoding.value = true
  jokeError.value = null
  try {
    const data = await fetchJokes()
    const joke = data[0]?.joke ?? ''
    jokeContent.value = joke
    if (joke) logsStore.addLog('joke', joke)
  } catch (e) {
    jokeError.value = e instanceof Error ? e.message : "Couldn't fetch joke"
  } finally {
    isJokelaoding.value = false
  }
}

async function handleFetchFact() {
  isFactLoading.value = true
  factError.value = null
  try {
    const data = await fetchFacts()
    const fact = data[0]?.fact ?? ''
    factContent.value = fact
    if (fact) logsStore.addLog('fact', fact)
  } catch (e) {
    factError.value = e instanceof Error ? e.message : "Couldn't fetch fact"
  } finally {
    isFactLoading.value = false
  }
}
</script>

<template>
  <div class="cards-column">
    <ContentCard
      type="joke"
      :content="jokeContent"
      :loading="isJokelaoding"
      :error="jokeError"
      @fetch="handleFetchJoke"
    />
    <ContentCard
      type="fact"
      :content="factContent"
      :loading="isFactLoading"
      :error="factError"
      @fetch="handleFetchFact"
    />
  </div>
  <aside class="logs-column">
    <LogPanel />
  </aside>
</template>
