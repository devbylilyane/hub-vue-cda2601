
<script setup>
import TPDataBinding from '../components/TPDataBinding.vue'
import TPDynamicStyling from '../components/TPDynamicStyling.vue'
import TPWatcherComputed from '../components/TPWatcherComputed.vue'
import TPListConditionalRendering from '../components/TPListConditionalRendering.vue'
import TPRouterProps from '../components/TPRouterProps.vue'
</script>

<template>
  <main class="space-y-10">

    <h1 class="text-3xl font-bold mb-6">
      Mes TP Vue
    </h1>

    <section id="data-binding" class="scroll-mt-8">
      <TPDataBinding />
    </section>

    <section id="dynamic-styling-tp" class="scroll-mt-8">
      <TPDynamicStyling />
    </section>

    <section id="watcher-computed-tp" class="scroll-mt-8">
      <TPWatcherComputed />
    </section>

    <section id="list-conditional-tp" class="scroll-mt-8">
      <TPListConditionalRendering />
    </section>

    <section id="router-props-tp" class="scroll-mt-8">
      <TPRouterProps />
    </section>

  </main>
</template>
