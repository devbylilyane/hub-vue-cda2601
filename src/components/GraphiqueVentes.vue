
<script setup>
import { ref, computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

const ventes = ref([1200, 1500, 900, 2000, 1800])

const donneesGraphique = computed(() => ({
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
  datasets: [
    {
      label: 'Ventes (€)',
      backgroundColor: '#3b82f6',
      data: ventes.value
    }
  ]
}))

const optionsGraphique = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Évolution des ventes par mois'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

function ajouter50() {
  ventes.value = ventes.value.map(vente => vente + 50)
}

function valeurAleatoire() {
  ventes.value = ventes.value.map(
    () => Math.floor(Math.random() * 2001)
  )
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold text-primary mb-6">
      📊 Exemple Chart.js Dynamique
    </h1>

    <Bar
      :data="donneesGraphique"
      :options="optionsGraphique"
    />

    <div class="flex gap-3 mt-6">
      <button
        class="btn btn-primary"
        @click="ajouter50"
      >
        ➕ Ajouter +50
      </button>

      <button
        class="btn btn-outline"
        @click="valeurAleatoire"
      >
        🎲 Valeur aléatoire
      </button>
    </div>
  </div>
</template>
