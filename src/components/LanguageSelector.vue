<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation, type Language } from '../composables/useTranslation'

interface Props {
  isScrolled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isScrolled: false
})

const { setLanguage, currentLang } = useTranslation()
const isOpen = ref(false)

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'ig' as Language, name: 'Igbo', flag: '🇳🇬' },
  { code: 'yo' as Language, name: 'Yoruba', flag: '🇳🇬' }
]

const selectLanguage = (lang: Language) => {
  setLanguage(lang)
  isOpen.value = false
}

const getCurrentLanguage = () => {
  return languages.find(lang => lang.code === currentLang.value)
}
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      :class="[
        'flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border transition-all duration-200',
        props.isScrolled 
          ? 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700' 
          : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white'
      ]"
    >
      <span class="text-sm sm:text-lg">{{ getCurrentLanguage()?.flag }}</span>
      <span class="font-medium text-sm sm:text-base hidden sm:inline">{{ getCurrentLanguage()?.name }}</span>
      <svg
        :class="{ 'rotate-180': isOpen }"
        class="w-4 h-4 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div
      v-show="isOpen"
      class="absolute right-0 top-full mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
    >
      <button
        v-for="language in languages"
        :key="language.code"
        @click="selectLanguage(language.code)"
        :class="[
          'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 text-gray-700',
          { 'bg-green-50 text-green-700': currentLang === language.code }
        ]"
      >
        <span class="text-lg">{{ language.flag }}</span>
        <span class="font-medium text-sm sm:text-base">{{ language.name }}</span>
      </button>
    </div>
  </div>
</template>