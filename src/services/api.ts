export const URL = 'https://api.api-nins.com/v1'

async function fetchJoke() {
  const response = await fetch(`${URL}/jokes`, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_NINJAS_KEY,
    },
  })
  const data = await response.json()
  console.log(data)
}

async function fetchFact() {
  const response = await fetch(`${URL}/facts`, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_NINJAS_KEY,
    },
  })
  const data = await response.json()
  console.log(data)
}
