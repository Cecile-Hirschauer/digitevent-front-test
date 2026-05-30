<script setup lang="ts">
import { ref } from 'vue'
import ContentCard from '@/components/ContentCard.vue'
import LogPanel from '@/components/LogPanel.vue'
import { fetchJokes, fetchFacts } from '@/services/api'
import { useLogsStore } from '@/stores/logs'

const logsStore = useLogsStore()
const jokeContent = ref('')
const factContent = ref('')

async function handleFetchJoke() {
  const data = await fetchJokes()
  const joke = data[0]?.joke ?? ''
  jokeContent.value = joke
  if (joke) logsStore.addLog('joke', joke)
}

async function handleFetchFact() {
  const data = await fetchFacts()
  const fact = data[0]?.fact ?? ''
  factContent.value = fact
  if (fact) logsStore.addLog('fact', fact)
}
</script>

<template>
  <ContentCard type="joke" :content="jokeContent" @fetch="handleFetchJoke" />
  <ContentCard type="fact" :content="factContent" @fetch="handleFetchFact" />
  <LogPanel />
</template>
