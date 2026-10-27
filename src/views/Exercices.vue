
<script setup>
import ExerciceInterpolation from '../components/ExerciceInterpolation.vue'
import ExerciceDynamicStyling from '../components/ExerciceDynamicStyling.vue'
import ExerciceMovieList from '../components/ExerciceMovieList.vue'
import ExerciceCrashTestComputed from '../components/ExerciceCrashTestComputed.vue'
import ExerciceWatchers from '../components/ExerciceWatchers.vue'
import ExerciceFetchApi from './ExerciceFetchApi.vue'
import ExerciceChart from './ExerciceChart.vue'
import ExerciceProps from '../components/ExerciceProps.vue'
</script>

<template>
  <main class="space-y-10">
    <h1 class="text-3xl font-bold">
      Mes exercices Vue
    </h1>

    <section id="interpolation" class="scroll-mt-8">
      <ExerciceInterpolation />
    </section>

    <section id="dynamic-styling" class="scroll-mt-8">
      <ExerciceDynamicStyling />
    </section>

    <section id="movie-list" class="scroll-mt-8">
      <ExerciceMovieList />
    </section>

    <section id="computed" class="scroll-mt-8">
      <ExerciceCrashTestComputed />
    </section>

    <section id="watchers" class="scroll-mt-8">
      <ExerciceWatchers />
    </section>

    <section id="fetch-api" class="scroll-mt-8">
      <ExerciceFetchApi />
    </section>

    <section id="chart" class="scroll-mt-8">
      <ExerciceChart />
    </section>

    <section id="props" class="scroll-mt-8">
      <ExerciceProps />
    </section>

  </main>
</template>
