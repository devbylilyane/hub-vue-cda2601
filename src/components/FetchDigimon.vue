
<script setup>
import { ref, onMounted } from 'vue'

const digimons = ref([])

onMounted(async () => {
  const reponse = await fetch('https://digimon-api.vercel.app/api/digimon')
  const donnees = await reponse.json()

  digimons.value = donnees.slice(0, 10)

  console.log(digimons.value)
})
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6 mt-6">
    <h2 class="text-2xl font-bold mb-4">
      Les Digimon
    </h2>

    <div class="flex flex-wrap gap-4">
      <div
        v-for="digimon in digimons"
        :key="digimon.name"
        class="flex flex-col items-center gap-2"
      >
        <img
          :src="digimon.img"
          :alt="digimon.name"
          class="w-24 h-24 object-contain"
        />

        <span class="badge badge-primary">
          {{ digimon.name }}
        </span>
      </div>
    </div>
  </div>
</template>
