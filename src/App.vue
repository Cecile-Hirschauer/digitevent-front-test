<script setup lang="ts">
import { ref } from 'vue'
import ContentCard from '@/components/ContentCard.vue'
import { fetchJokes, fetchFacts } from '@/services/api'

const jokeContent = ref('')
const factContent = ref('')

async function handleFetchJoke() {
  const data = await fetchJokes()
  jokeContent.value = data[0]?.joke ?? ''
}

async function handleFetchFact() {
  const data = await fetchFacts()
  factContent.value = data[0]?.fact ?? ''
}
</script>

<template>
  <ContentCard type="joke" :content="jokeContent" @fetch="handleFetchJoke" />
  <ContentCard type="fact" :content="factContent" @fetch="handleFetchFact" />
</template>
