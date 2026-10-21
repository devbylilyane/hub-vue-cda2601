
<script setup>
import { ref } from 'vue'

// compteur
const compteur = ref(0)

// fonction pour augmenter le compteur
function augmenter() {
  compteur.value++
}

// fonction pour réduire le compteur
function reduire() {
  compteur.value--
}

// nom de l'utilisateur
const username = ref('')

function afficherNameUser() {
  console.log('la fonction qui gère le name est déclenchée')

  if (username.value === '') {
    return 'Online'
  } else {
    return 'Offline'
  }
}
</script>

<template>
  <section class="p-6">
    <div class="card bg-base-200 shadow-md">
      <div class="card-body">

        <h1 class="text-2xl font-bold mb-4">
          Exercice Crash Test Computed
        </h1>

        <!-- compteur -->
        <h2 class="text-xl font-bold">
          Compteur : {{ compteur }}
        </h2>

        <div class="flex gap-3">
          <button
            class="btn btn-primary"
            @click="augmenter"
          >
            Augmenter +
          </button>

          <button
            class="btn btn-secondary"
            @click="reduire"
          >
            Réduire -
          </button>
        </div>

        <!-- champ de saisie utilisateur -->
        <input
          v-model="username"
          type="text"
          placeholder="Entrez un username"
          class="input input-bordered w-full mt-4"
        />

        <!-- résultat de la fonction -->
        <p class="text-lg mt-3">
          Statut : {{ afficherNameUser() }}
        </p>

      </div>
    </div>
  </section>
</template>
