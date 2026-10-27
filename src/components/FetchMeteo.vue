
<script setup>
import { ref, onMounted } from 'vue'

const meteo = ref(null)

onMounted(async () => {
  const reponse = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=43.6047&longitude=1.4442&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FParis'
  )

  const donnees = await reponse.json()

  meteo.value = donnees

  console.log(meteo.value)
})

function conditionMeteo(code) {
  if (code === 0) return 'Ciel dégagé ☀️'
  if (code <= 3) return 'Nuageux ⛅'
  if (code <= 48) return 'Brouillard 🌫️'
  if (code <= 67) return 'Pluie 🌧️'
  if (code <= 77) return 'Neige ❄️'
  if (code <= 82) return 'Averses 🌦️'
  if (code <= 86) return 'Averses de neige ❄️'
  if (code <= 99) return 'Orage ⛈️'
  return 'Condition inconnue'
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6 mt-6">
    <h2 class="text-2xl font-bold mb-4">
      Météo Toulouse
    </h2>

    <div v-if="meteo" class="flex flex-col gap-3">
      <p class="bg-base-200 p-3 rounded">
        🌡️ Température max :
        {{ meteo.daily.temperature_2m_max[0] }}°C
      </p>

      <p class="bg-base-200 p-3 rounded">
        🌡️ Température min :
        {{ meteo.daily.temperature_2m_min[0] }}°C
      </p>

      <p class="bg-base-200 p-3 rounded">
        🌡️ Température actuelle :
        {{ meteo.current.temperature_2m }}°C
      </p>

      <p class="bg-base-200 p-3 rounded">
        ☁️ Condition météo :
        {{ conditionMeteo(meteo.current.weather_code) }}
      </p>
    </div>

    <p v-else>Chargement de la météo...</p>
  </div>
</template>
