<script setup lang="ts">
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()

const features = [
  {
    icon: '👨‍🏫',
    titleKey: 'feature1Title',
    descriptionKey: 'feature1Description'
  },
  {
    icon: '💼',
    titleKey: 'feature2Title',
    descriptionKey: 'feature2Description'
  },
  {
    icon: '♾️',
    titleKey: 'feature3Title',
    descriptionKey: 'feature3Description'
  },
  {
    icon: '🤝',
    titleKey: 'feature4Title',
    descriptionKey: 'feature4Description'
  }
]
</script>

<template>
  <section class="py-16 sm:py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ t('featuresTitle') }}
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          {{ t('featuresSubtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="card"
        >
          <div class="text-3xl sm:text-4xl mb-4 sm:mb-6">{{ feature.icon }}</div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            {{ t(feature.titleKey) }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
            {{ t(feature.descriptionKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>