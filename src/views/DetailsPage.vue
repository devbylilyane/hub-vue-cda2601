
<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <main class="max-w-xl mx-auto mt-10">
    <h1 class="text-3xl font-bold text-center mb-6">
      Détails de l'élément
      <span class="text-primary">{{ name }}</span>
    </h1>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-xl font-semibold">
          Identifiant (ID) :
          <span class="badge badge-accent">{{ id }}</span>
        </h2>

        <p class="my-4">
          Ici se trouve la page de détail dynamique pour
          l'élément identifié par l'ID
          <strong>{{ id }}</strong>
          (Nom : <strong>{{ name }}</strong>).
        </p>

        <router-link
          to="/tp#router-props"
          class="btn btn-outline btn-info w-fit"
        >
          ← Retour au TP Router
        </router-link>
      </div>
    </div>
  </main>
</template>
