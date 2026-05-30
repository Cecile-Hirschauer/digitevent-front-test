<script setup lang="ts">
defineProps<{
  type: 'joke' | 'fact'
  content: string
  isLoading?: boolean
  error?: string | null
}>()

const emit = defineEmits<{
  fetch: []
}>()
</script>

<template>
  <article class="content-card">
    <header class="content-card__header">
      <h2>{{ type === 'joke' ? 'Joke' : 'Fact' }}</h2>
      <button
        class="content-card__fetch-btn"
        :disabled="isLoading"
        :aria-label="`Get a new ${type}`"
        @click="emit('fetch')"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 3v10M8 13l-3-3M8 13l3-3"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </header>
    <p v-if="error" class="error-msg">{{ error }}</p>
    <p v-else-if="isLoading" class="loading-msg">Loading...</p>
    <p v-else class="content-card__content">
      {{ content || 'Click the button to fetch content.' }}
    </p>
  </article>
</template>

<style scoped>
.content-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
}

.content-card__header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.content-card__header h2 {
  font-size: 1.25rem;
}

.content-card__fetch-btn {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e53935;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.content-card__fetch-btn:hover {
  background: #c62828;
}

.content-card__fetch-btn:focus-visible {
  outline: 2px solid #1976d2;
  outline-offset: 2px;
}

.content-card__content {
  color: #555;
}

.error-msg {
  color: #c62828;
  font-weight: 500;
}

.loading-msg {
  color: #888;
  font-style: italic;
}
</style>
