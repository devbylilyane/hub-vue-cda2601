
<script setup>
import { ref, computed } from 'vue'

// valeurs saisies dans les inputs
const texte = ref('')
const couleur = ref('')

// visibilité du premier H2
const afficherTitre = ref(true)

// classe CSS selon le premier input
const classeDynamique = computed(() => {
  if (texte.value === 'helllo') {
    return 'maClasseHello'
  }

  if (texte.value === 'world') {
    return 'maClasseWorld'
  }

  return ''
})

// afficher ou masquer le premier H2
function changerVisibilite() {
  afficherTitre.value = !afficherTitre.value
}
</script>

<template>
  <section class="p-6">
    <h1 class="text-2xl font-bold mb-6">
      TP : Dynamic Styling
    </h1>

    <!-- premier input -->
    <input
      v-model="texte"
      type="text"
      placeholder="Écris helllo ou world"
      class="input input-bordered w-full mb-2"
    />

    <!-- premier H2 : classe dynamique -->
    <h2
      v-show="afficherTitre"
      :class="classeDynamique"
      class="text-xl font-bold mb-6"
    >
      Hello World (classe dynamique)
    </h2>

    <!-- deuxième input -->
    <input
      v-model="couleur"
      type="text"
      placeholder="Écris une couleur CSS"
      class="input input-bordered w-full mb-2"
    />

    <!-- deuxième H2 : couleur dynamique -->
    <h2
      :style="{ backgroundColor: couleur }"
      class="text-xl font-bold mb-6"
    >
      Hello World (couleur dynamique)
    </h2>

    <!-- bouton -->
    <button
      class="btn btn-primary"
      @click="changerVisibilite"
    >
      {{ afficherTitre ? 'Masquer le titre' : 'Afficher le titre' }}
    </button>
  </section>
</template>

<style scoped>
.maClasseHello {
  background-color: #c026d3;
  color: white;
}

.maClasseWorld {
  background-color: #2563eb;
  color: white;
}
</style>
