
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import LessonIntroduction from '../lesson/lesson-introduction.vue'
import LessonSetup from '../lesson/lesson-setup.vue'
import LessonSyntax from '../lesson/lesson-syntax.vue'
import LessonTextInterpolation from '../lesson/lesson-text-interpolation.vue'
import LessonAttributeBinding from '../lesson/lesson-attribute-binding.vue'
import LessonProps from '../lesson/lesson-props.vue'
import LessonProps2 from '../lesson/lesson-props-2.vue'

const route = useRoute()
const router = useRouter()

const lessons = [
  {
    id: 'introduction',
    title: 'Introduction à Vue',
    component: LessonIntroduction
  },
  {
    id: 'setup',
    title: 'Installation / Setup',
    component: LessonSetup
  },
  {
    id: 'syntax',
    title: 'Syntaxe Vue',
    component: LessonSyntax
  },
  {
    id: 'text-interpolation',
    title: 'Interpolation de texte',
    component: LessonTextInterpolation
  },
  {
    id: 'attribute-binding',
    title: 'Attribute Binding',
    component: LessonAttributeBinding
  },
  {
    id: 'props',
    title: 'Props',
    component: LessonProps
  },
  {
    id: 'props-2',
    title: 'Props 2',
    component: LessonProps2
  }
]

const activeLesson = computed(() => {
  return lessons.find(
    lesson => lesson.id === route.query.lesson
  )
})

const openLesson = (id) => {
  router.push({
    path: '/lecons',
    query: { lesson: id }
  })
}

const backToLessons = () => {
  router.push('/lecons')
}
</script>

<template>
  <main class="container mx-auto p-6">

    <h1 class="text-3xl font-bold mb-6">
      Mes leçons Vue.js
    </h1>

    <div v-if="!activeLesson">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <button
          v-for="lesson in lessons"
          :key="lesson.id"
          type="button"
          class="btn btn-outline btn-primary h-auto py-5"
          @click="openLesson(lesson.id)"
        >
          {{ lesson.title }}
        </button>

      </div>
    </div>

    <div v-else>

      <button
        type="button"
        class="btn btn-ghost mb-6"
        @click="backToLessons"
      >
        ← Retour aux leçons
      </button>

      <component
        :is="activeLesson.component"
        :key="activeLesson.id"
      />

    </div>

  </main>
</template>
