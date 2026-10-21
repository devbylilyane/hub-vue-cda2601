
<script setup>
import { ref } from 'vue'

// le nom du film saisi par l'utilisateur
const nomFilm = ref('')

// le tableau qui contiendra nos films
const mesFilms = ref([])

// ajouter un film dans le tableau
function ajouterFilm() {
  if (nomFilm.value.trim() !== '') {
    mesFilms.value.push(nomFilm.value.trim())
    nomFilm.value = ''
  }
}
</script>

<template>
  <section class="p-6">
    <div class="card bg-base-200 shadow-md">
      <div class="card-body">
        <h1 class="text-2xl font-bold text-center mb-4">
          🎬 Exercice liste de films à voir
        </h1>

        <label for="nomFilm">Nom du film :</label>

        <input
          id="nomFilm"
          v-model="nomFilm"
          type="text"
          placeholder="Entrez un nom de film"
          class="input input-bordered w-full"
        />

        <button
          class="btn btn-primary mt-3"
          @click="ajouterFilm"
        >
          Ajouter à votre liste
        </button>

        <div class="divider"></div>

        <!-- Liste vide -->
        <p v-if="mesFilms.length === 0" class="text-center">
          Pas encore de films dans votre liste ?
          Veuillez en ajouter un.
        </p>

        <!-- Liste contenant des films -->
        <div v-else>
          <h2 class="font-bold text-center mb-3">
            Votre liste de films :
          </h2>

          <ul class="list-disc pl-6">
            <li
              v-for="(film, index) in mesFilms"
              :key="index"
            >
              {{ film }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>
