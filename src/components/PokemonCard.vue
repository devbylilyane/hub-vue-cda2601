<script setup>
defineProps({
  name: String,
  id: Number
})
</script>

<template>
  <div class="flex flex-col items-center">
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`"
      :alt="name"
      class="w-20 h-20"
    />

    <span class="badge badge-primary">
      {{ name }}
    </span>
  </div>
</template>