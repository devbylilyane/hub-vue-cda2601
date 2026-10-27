
<script setup>
import { ref } from 'vue'
import OneFriend from './OneFriend.vue'

// Tableau réactif contenant les amis
const lesAmis = ref([
  {
    id: 1,
    name: 'COCO L\'ASTICOT',
    phone: '01234567891',
    email: 'cocolasticot@outlook.com',
    premium: false
  },
  {
    id: 2,
    name: 'Steven Seagal',
    phone: '+338765477',
    email: 'stevenseagal@gmail.fr',
    premium: true
  },
  {
    id: 3,
    name: 'Lola',
    phone: '+338765477',
    email: 'lolaseagal@live.fr',
    premium: true
  },
  {
    id: 4,
    name: 'GussDX',
    phone: '+338765477',
    email: 'guss@example.com',
    premium: true
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
