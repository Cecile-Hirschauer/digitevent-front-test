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
      <h2>A cool <span class="content-card__type">{{ type === 'joke' ? 'Joke' : 'Fact' }}</span></h2>
      <button
        class="content-card__fetch-btn"
        :disabled="isLoading"
        :aria-label="`Get a new ${type}`"
        @click="emit('fetch')"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 3v10M8 13l-3-3M8 13l3-3"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </header>
    <p v-if="error" class="content-card__error">{{ error }}</p>
    <p v-else-if="isLoading" class="content-card__loading">Loading...</p>
    <p v-else class="content-card__content">
      {{ content || 'Click the button to fetch content.' }}
    </p>
  </article>
</template>

<style scoped>
.content-card {
  background: var(--color-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--padding-card);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-card__header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.content-card__header h2 {
  font-size: 1.1rem;
  font-weight: 400;
}

.content-card__type {
  font-weight: 700;
  text-decoration: underline;
}

.content-card__fetch-btn {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid var(--color-text);
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.content-card__fetch-btn:hover {
  background: var(--color-accent-hover);
}

.content-card__fetch-btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.content-card__fetch-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.content-card__content {
  font-weight: 400;
  color: var(--color-text);
  line-height: 1.5;
}

.content-card__error {
  color: var(--color-error);
  font-weight: 500;
}

.content-card__loading {
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
