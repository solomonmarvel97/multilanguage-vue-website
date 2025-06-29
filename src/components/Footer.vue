<script setup lang="ts">
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()

const currentYear = new Date().getFullYear()

const footerLinks = {
  course: [
    { key: 'aboutCourse', href: '#about' },
    { key: 'curriculum', href: '#curriculum' },
    { key: 'instructors', href: '#instructors' },
    { key: 'testimonials', href: '#testimonials' }
  ],
  support: [
    { key: 'helpCenter', href: '#help' },
    { key: 'documentation', href: '#docs' },
    { key: 'community', href: '#community' },
    { key: 'contact', href: '#contact' }
  ],
  company: [
    { key: 'aboutUs', href: '#about-us' },
    { key: 'careers', href: '#careers' },
    { key: 'blog', href: '#blog' },
    { key: 'press', href: '#press' }
  ]
}

const socialLinks = [
  { name: 'Twitter', icon: '𝕏', href: '#twitter' },
  { name: 'LinkedIn', icon: '💼', href: '#linkedin' },
  { name: 'GitHub', icon: '🐙', href: '#github' },
  { name: 'YouTube', icon: '📺', href: '#youtube' }
]
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="text-2xl font-bold text-white mb-4">WebDev</div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            {{ t('footerDescription') }}
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
            >
              <span class="text-lg">{{ social.icon }}</span>
            </a>
          </div>
        </div>
        
        <!-- Course Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">{{ t('courseSection') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.course" :key="link.key">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                {{ t(link.key) }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Support Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">{{ t('supportSection') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.support" :key="link.key">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                {{ t(link.key) }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Company Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">{{ t('companySection') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.key">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                {{ t(link.key) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm text-center md:text-left">
            © {{ currentYear }} WebDev. {{ t('allRightsReserved') }}
          </div>
          
          <div class="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="#privacy" class="text-gray-400 hover:text-green-400 transition-colors duration-200">
              {{ t('privacyPolicy') }}
            </a>
            <a href="#terms" class="text-gray-400 hover:text-green-400 transition-colors duration-200">
              {{ t('termsOfService') }}
            </a>
            <a href="#cookies" class="text-gray-400 hover:text-green-400 transition-colors duration-200">
              {{ t('cookiePolicy') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>