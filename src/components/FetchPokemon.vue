<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from './PokemonCard.vue'

const pokemons = ref([])

onMounted(async () => {
  const reponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const donnees = await reponse.json()

  pokemons.value = donnees.results

  console.log(pokemons.value)
})
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6">
    <h2 class="text-2xl font-bold mb-4">
      Les Pokémon
    </h2>

    <div class="flex flex-wrap gap-2">
      <PokemonCard
        v-for="(pokemon, index) in pokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :id="index + 1"
      />
    </div>
  </div>
</template>