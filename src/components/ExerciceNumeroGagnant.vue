
<script setup>
import { ref, computed, watch } from 'vue'

// Nos variables réactives
const leNombre = ref(0)
const msg = ref('')

// Ajouter 1 ou 5 au compteur
function ajouter(valeur) {
  leNombre.value += valeur
}

// Indice calculé automatiquement
const indice = computed(() => {
  if (leNombre.value < 7) {
    return 'ESSAIE ENCORE !'
  } else if (leNombre.value === 7) {
    return '7... BINGO !'
  } else {
    return 'Tu as dépassé le nombre !'
  }
})

// Surveiller les changements du compteur
watch(leNombre, (nouvelleValeur) => {
  console.log('Le watcher en action...', nouvelleValeur)

  if (nouvelleValeur > 30) {
    msg.value = 'Limite dépassée ! Retour à 0 dans 7 secondes.'

    setTimeout(() => {
      leNombre.value = 0
      msg.value = ''
    }, 7000)
  }
})
</script>

<template>
  <section class="p-6">
    <div class="card bg-base-200 shadow-md max-w-md mx-auto">
      <div class="card-body items-center text-center">

        <h1 class="text-2xl font-bold mb-4">
          TP Réactivité : Le numéro gagnant
        </h1>

        <div class="bg-base-100 rounded-lg p-6 mb-4">
          <p>Le nombre :</p>
          <p class="text-4xl font-bold text-primary">
            {{ leNombre }}
          </p>
        </div>

        <h2 class="text-xl font-bold mb-4">
          {{ indice }}
        </h2>

        <p v-if="msg" class="text-error font-bold">
          {{ msg }}
        </p>

        <div class="flex gap-3 mt-4">
          <button
            class="btn btn-success"
            @click="ajouter(1)"
          >
            +1
          </button>

          <button
            class="btn btn-error"
            @click="ajouter(5)"
          >
            +5
          </button>
        </div>

      </div>
    </div>
  </section>
</template>
