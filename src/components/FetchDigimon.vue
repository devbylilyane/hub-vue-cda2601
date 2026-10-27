<script setup>
import { ref, onMounted } from 'vue'
import DigimonCard from './DigimonCard.vue'

const digimons = ref([])

onMounted(async () => {
  const reponse = await fetch('https://digimon-api.vercel.app/api/digimon')
  const donnees = await reponse.json()

  digimons.value = donnees.slice(0, 10)

  console.log(digimons.value)
})
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6">
    <h2 class="text-2xl font-bold text-pink-500 mb-4">
      Exercice: les Digimons :
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DigimonCard
        v-for="digimon in digimons"
        :key="digimon.name"
        :name="digimon.name"
        :img="digimon.img"
      />
    </div>
  </div>
</template>