
<script setup>
import { ref, onMounted } from 'vue'

// les informations de notre utilisateur
const nom = ref('Dr Mario')
const age = ref(30)

const image = ref('')

onMounted(async () => {
  try {
    const reponse = await fetch(
      'https://en.wikipedia.org/api/rest_v1/page/summary/Mario'
    )

    const donnees = await reponse.json()

    image.value = donnees.thumbnail?.source || ''
  } catch (erreur) {
    console.error("Erreur lors du chargement de l'image :", erreur)
  }
})

// fonction qui retourne l'âge + 10
function agePlusDix() {
  return age.value + 10
}

// fonction qui retourne un nombre aléatoire
function numeroFetiche() {
  return Math.random()
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6 max-w-3xl mx-auto">

    <h1 class="text-xl font-bold mb-6">
      TP Data Binding : Profil utilisateur
    </h1>

    <div class="flex flex-col items-center gap-4">

      <!-- image dynamique -->
      <img
        :src="image"
        :alt="nom"
        class="w-24 h-24 object-contain rounded-full"
      />

      <!-- interpolation -->
      <h2 class="text-2xl font-bold">
        {{ nom }}
      </h2>

      <!-- input lié au nom -->
      <input
        type="text"
        v-model="nom"
        class="input input-bordered w-full max-w-xs"
      />

      <!-- âge -->
      <p>
        Âge :
        <span class="badge badge-primary">
          {{ age }} ans
        </span>
      </p>

      <!-- fonction âge + 10 -->
      <p>
        Âge + 10 :
        <span class="badge badge-secondary">
          {{ agePlusDix() }} ans
        </span>
      </p>

      <!-- fonction nombre aléatoire -->
      <p>
        NB Fétiche :
        <span class="badge badge-accent">
          {{ numeroFetiche() }}
        </span>
      </p>

    </div>
  </div>
</template>


