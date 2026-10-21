<script setup>
import { ref, watch } from 'vue'

// notre compteur réactif
const leNombre = ref(0)

// watcher : surveille leNombre
watch(leNombre, (nouvelleValeur) => {
  console.log('Ça surveille :', nouvelleValeur)

  // si le compteur atteint 7
  if (nouvelleValeur === 7) {
    console.warn('Limite atteinte !')
    leNombre.value = 0
  }
})
</script>

<template>
  <section class="p-6">
    <div class="card bg-base-200 shadow-md">
      <div class="card-body">
        <h1 class="text-2xl font-bold text-center mb-6">
          Exercice Watchers
        </h1>

        <div class="flex items-center justify-between">
          <button class="btn btn-success" @click="leNombre++">+
        </button>

          <h2 class="text-xl font-bold">
            valeur actuelle :
            <span class="badge badge-secondary">
              {{ leNombre }}
            </span>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
