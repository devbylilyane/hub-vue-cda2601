
<script setup>
import { ref } from 'vue'

// liste de courses
const courses = ref(['Pommes', 'Yaourt', 'Ketchup'])

// ce que l'utilisateur écrit
const nouvelElement = ref('')

// afficher ou masquer la liste
const listeVisible = ref(true)

// ajouter un élément
function ajouterElement() {
  if (nouvelElement.value.trim() !== '') {
    courses.value.push(nouvelElement.value.trim())
    nouvelElement.value = ''
  }
}

// suupprimer un élément
function supprimerElement(index) {
  courses.value.splice(index, 1)
}

// afficher ou masquer
function changerVisibilite() {
  listeVisible.value = !listeVisible.value
}
</script>

<template>
  <section class="p-6">
    <div class="card bg-base-200 shadow-md max-w-xl mx-auto">
      <div class="card-body">

        <h1 class="text-2xl font-bold text-center mb-4">
          TP List / Conditional Rendering
        </h1>

        <h2 class="text-lg font-semibold">
          Ma liste de courses 🛍️
        </h2>

        <!-- saisie -->
        <input
          v-model="nouvelElement"
          type="text"
          placeholder="Ajouter un produit..."
          class="input input-bordered w-full"
          @keyup.enter="ajouterElement"
        />

        <!-- button ajouter -->
        <button
          class="btn btn-success mt-3"
          @click="ajouterElement"
        >
          Ajouter
        </button>

        <!-- affichage conditionnel -->
        <div v-if="listeVisible" class="mt-4">

          <ul class="menu bg-base-100 rounded-box w-full">
            <li
              v-for="(element, index) in courses"
              :key="index"
            >
              <button @click="supprimerElement(index)">
                {{ index }} - {{ element }}
              </button>
            </li>
          </ul>

          <p v-if="courses.length === 0" class="mt-2">
            La liste est vide.
          </p>

        </div>

        <!-- masquer / afficher -->
        <button
          class="btn btn-info mt-4"
          @click="changerVisibilite"
        >
          {{ listeVisible ? 'Masquer Liste' : 'Afficher Liste' }}
        </button>

      </div>
    </div>
  </section>
</template>
