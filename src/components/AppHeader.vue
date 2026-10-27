<script setup>
import { ref } from 'vue'

const menuOuvert = ref(null)

// ouvrir ou fermer un menu
function toggleMenu(nom) {
  menuOuvert.value = menuOuvert.value === nom ? null : nom
}

function fermerMenu() {
  menuOuvert.value = null
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm px-6">

    <!-- logo -->
    <span class="text-xl font-bold px-4">
      Lilyane.vue
    </span>

    <!-- menu leçons -->
    <div class="flex items-center">

      <router-link
        to="/lecons"
        class="btn btn-ghost pr-1"
        @click="fermerMenu"
      >
        Leçons
      </router-link>

      <div
        class="dropdown"
        :class="{ 'dropdown-open': menuOuvert === 'lecons' }"
      >
        <button
          type="button"
          class="btn btn-ghost px-2"
          @click="toggleMenu('lecons')"
        >
          ▾
        </button>

        <ul
          class="dropdown-content menu bg-base-100 rounded-box z-50 w-64 p-2 shadow-xl"
          @click="fermerMenu"
        >
          <li>
            <router-link to="/lecons?lesson=introduction">
              Introduction à Vue
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=setup">
              Installation / Setup
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=syntax">
              Syntaxe Vue
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=text-interpolation">
              Interpolation de texte
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=attribute-binding">
              Attribute Binding
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=props">
              Props
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=props-2">
              Props 2
            </router-link>
          </li>

          <li>
            <router-link to="/lecons?lesson=chartjs">
              Chart.js
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- menu exos -->
    <div class="flex items-center">

      <router-link
        to="/exercices"
        class="btn btn-ghost pr-1"
        @click="fermerMenu"
      >
        Exercices
      </router-link>

      <div
        class="dropdown"
        :class="{ 'dropdown-open': menuOuvert === 'exercices' }"
      >
        <button
          type="button"
          class="btn btn-ghost px-2"
          @click="toggleMenu('exercices')"
        >
          ▾
        </button>

        <ul
          class="dropdown-content menu bg-base-100 rounded-box z-50 w-60 p-2 shadow-xl"
          @click="fermerMenu"
        >
          <li>
            <router-link to="/exercices#interpolation">
              Interpolation
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#dynamic-styling">
              Dynamic Styling
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#movie-list">
              Movie List
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#computed">
              Computed
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#watchers">
              Watchers
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#fetch-api">
              Fetch API
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#chart">
              Chart.js
            </router-link>
          </li>

          <li>
            <router-link to="/exercices#props">
              Props
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- menu TP -->
    <div class="flex items-center">

      <router-link
        to="/tp"
        class="btn btn-ghost pr-1"
        @click="fermerMenu"
      >
        TP
      </router-link>

      <div
        class="dropdown dropdown-end"
        :class="{ 'dropdown-open': menuOuvert === 'tp' }"
      >
        <button
          type="button"
          class="btn btn-ghost px-2"
          @click="toggleMenu('tp')"
        >
          ▾
        </button>

        <ul
          class="dropdown-content menu bg-base-100 rounded-box z-50 w-72 p-2 shadow-xl"
          @click="fermerMenu"
        >
          <li>
            <router-link to="/tp#data-binding">
              TP Data Binding
            </router-link>
          </li>

          <li>
            <router-link to="/tp#dynamic-styling-tp">
              TP Dynamic Styling
            </router-link>
          </li>

          <li>
            <router-link to="/tp#watcher-computed-tp">
              TP Watcher Computed
            </router-link>
          </li>

          <li>
            <router-link to="/tp#list-conditional-tp">
              TP List / Conditional Rendering
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>