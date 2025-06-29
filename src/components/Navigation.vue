<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslation } from '../composables/useTranslation'
import LanguageSelector from './LanguageSelector.vue'

const { t } = useTranslation()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'features', href: '#features' },
  { key: 'pricing', href: '#pricing' },
  { key: 'contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white/10 backdrop-blur-md border-b border-white/20'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div 
            :class="[
              'text-2xl font-bold transition-colors duration-300',
              isScrolled ? 'text-gray-900' : 'text-white'
            ]"
          >
            WebDev
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            :class="[
              'transition-colors duration-200 font-medium',
              isScrolled 
                ? 'text-gray-700 hover:text-green-600' 
                : 'text-white hover:text-green-200'
            ]"
          >
            {{ t(item.key) }}
          </a>
        </div>
        
        <!-- Language Selector and Mobile Menu -->
        <div class="flex items-center space-x-4">
          <LanguageSelector :is-scrolled="isScrolled" />
          
          <!-- Mobile menu button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            :class="[
              'md:hidden transition-colors duration-200',
              isScrolled ? 'text-gray-700' : 'text-white'
            ]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-show="isMenuOpen" 
        class="md:hidden py-4 border-t"
        :class="isScrolled ? 'border-gray-200' : 'border-white/20'"
      >
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="item.href"
          :class="[
            'block py-2 transition-colors duration-200',
            isScrolled 
              ? 'text-gray-700 hover:text-green-600' 
              : 'text-white hover:text-green-200'
          ]"
          @click="isMenuOpen = false"
        >
          {{ t(item.key) }}
        </a>
      </div>
    </div>
  </nav>
</template>