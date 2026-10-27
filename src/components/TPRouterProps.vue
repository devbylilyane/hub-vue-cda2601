
<script setup>
const utilisateurs = [
  { id: 1, name: 'Ginette la crevette' },
  { id: 2, name: 'Princesse Cornichon' },
  { id: 3, name: 'Josette la Chaussette' },
  { id: 4, name: 'Brigitte la Frite' }
]
</script>

<template>
  <section class="p-6">
    <h2 class="text-2xl font-bold text-center mb-6">
      TP: Exemple de route dynamique (avec paramètres en props) :
    </h2>

    <div class="bg-base-100 rounded-lg shadow-lg p-4">
      <div
        v-for="utilisateur in utilisateurs"
        :key="utilisateur.id"
        class="flex items-center justify-between p-4 border-b border-base-300"
      >
        <span class="font-semibold">
          {{ utilisateur.name }}
        </span>

        <router-link
          :to="{
            name: 'details',
            params: {
              id: utilisateur.id,
              name: utilisateur.name
            }
          }"
          class="btn btn-outline btn-info btn-sm"
        >
          Voir les détails
        </router-link>
      </div>
    </div>
  </section>
</template>
