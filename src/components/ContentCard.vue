<script setup lang="ts">
defineProps<{
  type: 'joke' | 'fact'
  content: string
}>()

const emit = defineEmits<{
  fetch: []
}>()
</script>

<template>
  <div class="content-card">
    <h2>{{ type === 'joke' ? 'Joke' : 'Fact' }}</h2>
    <p>{{ content }}</p>
    <button @click="emit('fetch')">Get a new {{ type }}</button>
  </div>
</template>
