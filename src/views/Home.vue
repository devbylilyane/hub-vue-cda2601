<script setup>
import ExerciceInterpolation from '../components/ExerciceInterpolation.vue'
import ExerciceDynamicStyling from '../components/ExerciceDynamicStyling.vue'
import ExerciceDynamicStyling2 from '../components/ExerciceDynamicStyling2.vue'
import ExerciceMovieList from '../components/ExerciceMovieList.vue'
import ExerciceCrashTestComputed from '../components/ExerciceCrashTestComputed.vue'
import ExerciceWatchers from '../components/ExerciceWatchers.vue'
import ExerciceNumeroGagnant from '../components/ExerciceNumeroGagnant.vue'
</script>

<template>
  <h1 class="text-3xl font-bold mb-6">
    Mes exercices Vue
  </h1>
  <ExerciceInterpolation />
  <ExerciceDynamicStyling />
  <ExerciceDynamicStyling2 />
  <ExerciceMovieList />
  <ExerciceCrashTestComputed />
  <ExerciceWatchers />
  <ExerciceNumeroGagnant />
</template>