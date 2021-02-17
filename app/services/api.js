import { create } from 'apisauce'

const api = create({
  baseURL: 'https://pokeapi.co/api/v2',
})

async function getPokemons() {
  try {
    const fetchData = await api.get('/pokemon')
    return {
      success: true,
      data: fetchData.data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export { api, getPokemons }
