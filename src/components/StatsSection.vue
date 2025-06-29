<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()

const stats = ref([
  { value: 0, target: 2547, suffix: '+', labelKey: 'studentsEnrolled' },
  { value: 0, target: 1200, suffix: '+', labelKey: 'coursesCompleted' },
  { value: 0, target: 98, suffix: '%', labelKey: 'satisfactionRate' }
])

const animateValue = (stat: any, duration = 2000) => {
  const start = Date.now()
  const initial = stat.value
  const difference = stat.target - initial
  
  const step = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    
    stat.value = Math.floor(initial + (difference * progress))
    
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  
  requestAnimationFrame(step)
}

onMounted(() => {
  setTimeout(() => {
    stats.value.forEach(stat => animateValue(stat))
  }, 500)
})
</script>

<template>
  <section class="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-700">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center"
        >
          <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            {{ stat.value }}{{ stat.suffix }}
          </div>
          <div class="text-blue-100 text-base sm:text-lg font-medium px-2">
            {{ t(stat.labelKey) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>