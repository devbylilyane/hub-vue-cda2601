<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card bg-base-100 shadow-md w-full max-w-sm">
    <figure class="bg-white p-4">
      <img
        :src="img"
        :alt="name"
        class="w-full h-64 object-contain"
      />
    </figure>

    <div class="card-body">
      <h3 class="card-title">
        {{ name }}
      </h3>
    </div>
  </div>
</template>