<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import StatsSection from './components/StatsSection.vue'
import Footer from './components/Footer.vue'
import { useTranslation } from './composables/useTranslation'
const { t } = useTranslation()

</script>

<template>
  <div class="min-h-screen">
    <Navigation />
    
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </main>
    
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
</style>