<script setup lang="ts">
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <div class="animate-fade-in-up">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {{ t('heroTitle') }}
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl font-medium text-green-100 mb-6 sm:mb-8">
          {{ t('heroSubtitle') }}
        </p>
        <p class="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          {{ t('heroDescription') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <button class="btn-primary w-full sm:w-auto">
            {{ t('getStarted') }}
          </button>
          <button class="btn-secondary w-full sm:w-auto">
            {{ t('learnMore') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>