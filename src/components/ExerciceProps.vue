
<script setup>
import { ref } from 'vue'
import OneFriend from './OneFriend.vue'

// Tableau réactif contenant les amis

// Tableau réactif contenant les amis
const lesAmis = ref([
  {
    id: 1,
    name: "Coco l'Asticot",
    phone: '0612345678',
    email: 'coco.asticot@example.com',
    premium: false
  },
  {
    id: 2,
    name: 'Ginette la Crevette',
    phone: '0623456789',
    email: 'ginette.crevette@example.com',
    premium: true
  },
  {
    id: 3,
    name: 'Josette la Chaussette',
    phone: '0634567890',
    email: 'josette.chaussette@example.com',
    premium: false
  },
  {
    id: 4,
    name: 'Brigitte la Frite',
    phone: '0645678901',
    email: 'brigitte.frite@example.com',
    premium: true
  },
  {
    id: 5,
    name: 'Monique la Panique',
    phone: '0656789012',
    email: 'monique.panique@example.com',
    premium: true
  },
  {
    id: 6,
    name: 'Princesse Cornichon',
    phone: '0667890123',
    email: 'princesse.cornichon@example.com',
    premium: false
  }
])

</script>

<template>
  <main class="p-6">

    <h1 class="text-2xl font-bold mb-6 text-center">
      EXO PROPS (Ici c'est le parent)
    </h1>

    <div class="flex flex-col gap-4">
      <OneFriend
        v-for="ami in lesAmis"
        :key="ami.id"
        :id="ami.id"
        :name="ami.name"
        :phone="ami.phone"
        :email="ami.email"
        :premium="ami.premium"
      />
    </div>

  </main>
</template>
