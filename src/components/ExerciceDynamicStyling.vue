
<script setup>
import { ref } from 'vue'

// états des quatre cartes 
const carte1Active = ref(false)
const carte2Active = ref(false)
const carte3Active = ref(false)
const carte4Active = ref(false)

// fonctions lors du clic clic
function changerCarte1() {
  carte1Active.value = !carte1Active.value
}

function changerCarte2() {
  carte2Active.value = !carte2Active.value
}

function changerCarte3() {
  carte3Active.value = !carte3Active.value
}

function changerCarte4() {
  carte4Active.value = !carte4Active.value
}
</script>

<template>
  <section class="p-6">
    <h1 class="text-2xl font-bold mb-6">
      Exercice dynamic styling
    </h1>

    <div class="grid grid-cols-2 gap-4">

      <!-- carte 1 -->
      <div
        class="card bg-gray-200 text-gray-900 shadow-md cursor-pointer"
        @click="changerCarte1"
        :style="{ backgroundColor: carte1Active ? 'cyan' : '' }"
      >
        <div class="card-body">
          <p>Carte 1 via style</p>
        </div>
      </div>

      <!-- carte 2 -->
      <div
        class="card bg-gray-200 text-gray-900 shadow-md cursor-pointer"
        @click="changerCarte2"
        :style="{ backgroundColor: carte2Active ? 'pink' : '' }"
      >
        <div class="card-body">
          <p>Carte 2 via style</p>
        </div>
      </div>

      <!-- carte 3 -->
      <div
        class="card text-gray-900 shadow-md cursor-pointer"
        @click="changerCarte3"
        :class="carte3Active ? 'bg-purple-300' : 'bg-gray-200'"
      >
        <div class="card-body">
          <p>Carte 3 via class</p>
        </div>
      </div>

      <!-- carte 4 -->
      <div
        class="card text-gray-900 shadow-md cursor-pointer"
        @click="changerCarte4"
        :class="carte4Active ? 'bg-green-300' : 'bg-gray-200'"
      >
        <div class="card-body">
          <p>Carte 4 via class</p>
        </div>
      </div>

    </div>
  </section>
</template>
