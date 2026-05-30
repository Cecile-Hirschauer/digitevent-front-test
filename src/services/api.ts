import type { JokeResponse, FactResponse } from '@/interfaces/api'

const BASE_URL = 'https://api.api-ninjas.com/v1'

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_NINJAS_KEY,
    },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export async function fetchJokes(): Promise<JokeResponse[]> {
  return fetchFromAPI<JokeResponse[]>('/jokes')
}

export async function fetchFacts(): Promise<FactResponse[]> {
  return fetchFromAPI<FactResponse[]>('/facts')
}
