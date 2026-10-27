
<script setup>
import { ref } from 'vue'

// Données reçues du composant parent
const props = defineProps({
  id: Number,
  name: String,
  phone: String,
  email: String,
  premium: Boolean
})

// Copie locale du statut Premium
const isPremium = ref(props.premium)

// Fonction pour changer le statut
function changerPremium() {
  isPremium.value = !isPremium.value
}
</script>

<template>
  <div class="card bg-blue-400 text-black shadow-xl w-full max-w-sm mb-4">
    <div class="card-body">

      <h2 class="card-title">
        Composant OneFriend.vue
      </h2>

      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-bold">
          👤 {{ name }}
        </span>

        <span
          class="badge"
          :class="isPremium ? 'badge-success' : 'badge-ghost'"
        >
          {{ isPremium ? 'Premium' : 'Standard' }}
        </span>
      </div>

      <p>🪪 ID : {{ id }}</p>
      <p>📞 {{ phone }}</p>
      <p>📧 {{ email }}</p>

      <button
        class="btn btn-primary w-fit mt-2"
        @click="changerPremium"
      >
        Modif Props Premium
      </button>

    </div>
  </div>
</template>
