import { ref, computed } from 'vue'

export type Language = 'en' | 'ig' | 'yo'

const currentLanguage = ref<Language>('en')

const translations = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Master Web Development',
    heroSubtitle: 'Build Modern Applications',
    heroDescription: 'Learn the latest web technologies with our comprehensive course. From beginner to expert, we\'ll guide you through every step of your coding journey.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features Section
    featuresTitle: 'Why Choose Our Course?',
    featuresSubtitle: 'Everything you need to become a successful developer',
    
    feature1Title: 'Expert Instructors',
    feature1Description: 'Learn from industry professionals with years of experience in web development.',
    
    feature2Title: 'Hands-on Projects',
    feature2Description: 'Build real-world applications that you can add to your portfolio.',
    
    feature3Title: 'Lifetime Access',
    feature3Description: 'Get unlimited access to course content and future updates.',
    
    feature4Title: 'Community Support',
    feature4Description: 'Join our active community of learners and get help when you need it.',
    
    // Stats Section
    studentsEnrolled: 'Students Enrolled',
    coursesCompleted: 'Courses Completed',
    satisfactionRate: 'Satisfaction Rate',
    
    // Footer
    footerDescription: 'Empowering developers worldwide with cutting-edge web development education and practical skills.',
    courseSection: 'Course',
    supportSection: 'Support',
    companySection: 'Company',
    
    // Footer Links
    aboutCourse: 'About Course',
    curriculum: 'Curriculum',
    instructors: 'Instructors',
    testimonials: 'Testimonials',
    
    helpCenter: 'Help Center',
    documentation: 'Documentation',
    community: 'Community',
    
    aboutUs: 'About Us',
    careers: 'Careers',
    blog: 'Blog',
    press: 'Press',
    
    // Footer Bottom
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    
    language: 'Language'
  },
  
  ig: {
    // Navigation
    home: 'Ụlọ',
    features: 'Njirimara',
    pricing: 'Ọnụ ahịa',
    contact: 'Kpọtụrụ anyị',
    
    // Hero Section
    heroTitle: 'Mụta Mmepe Webụsaịtị',
    heroSubtitle: 'Wuo Ngwa Ọgbara Ọhụrụ',
    heroDescription: 'Mụta teknụzụ webụsaịtị kacha ọhụrụ site na kọọsụ anyị zuru oke. Site na mbido ruo na ọkachamara, anyị ga-eduzi gị na nzọụkwụ ọ bụla nke njem koodu gị.',
    getStarted: 'Malite',
    learnMore: 'Mụtakwuo',
    
    // Features Section
    featuresTitle: 'Gịnị Mere Ị Ga-ahọrọ Kọọsụ Anyị?',
    featuresSubtitle: 'Ihe niile ị chọrọ iji bụrụ onye mmepe na-aga nke ọma',
    
    feature1Title: 'Ndị Nkuzi Ọkachamara',
    feature1Description: 'Mụta n\'aka ndị ọkachamara ụlọ ọrụ nwere ọtụtụ afọ ahụmahụ na mmepe webụsaịtị.',
    
    feature2Title: 'Ọrụ Aka',
    feature2Description: 'Wuo ngwa ụwa n\'ezie nke ị nwere ike itinye na pọtfoliyo gị.',
    
    feature3Title: 'Nnweta Ndụ',
    feature3Description: 'Nweta nnweta na-enweghị oke na ọdịnaya kọọsụ na mmelite n\'ọdịnihu.',
    
    feature4Title: 'Nkwado Obodo',
    feature4Description: 'Sonye na obodo anyị na-arụ ọrụ nke ndị na-amụ ihe ma nweta enyemaka mgbe ị chọrọ ya.',
    
    // Stats Section
    studentsEnrolled: 'Ụmụ akwụkwọ Debanyere Aha',
    coursesCompleted: 'Kọọsụ Emechara',
    satisfactionRate: 'Ọnụ Ọgụgụ Afọ Ojuju',
    
    // Footer
    footerDescription: 'Na-enyere ndị mmepe n\'ụwa niile aka site na agụmakwụkwọ mmepe webụsaịtị na-aga n\'ihu na nkà bara uru.',
    courseSection: 'Kọọsụ',
    supportSection: 'Nkwado',
    companySection: 'Ụlọ Ọrụ',
    
    // Footer Links
    aboutCourse: 'Maka Kọọsụ',
    curriculum: 'Usoro Ọmụmụ',
    instructors: 'Ndị Nkuzi',
    testimonials: 'Akaebe',
    
    helpCenter: 'Ebe Enyemaka',
    documentation: 'Akwụkwọ',
    community: 'Obodo',
    
    aboutUs: 'Maka Anyị',
    careers: 'Ọrụ',
    blog: 'Blog',
    press: 'Mgbasa Ozi',
    
    // Footer Bottom
    allRightsReserved: 'Ikike niile echekwabara.',
    privacyPolicy: 'Iwu Nzuzo',
    termsOfService: 'Usoro Ọrụ',
    cookiePolicy: 'Iwu Cookie',
    
    language: 'Asụsụ'
  },
  
  yo: {
    // Navigation
    home: 'Ile',
    features: 'Awọn ẹya',
    pricing: 'Idiyele',
    contact: 'Kan si wa',
    
    // Hero Section
    heroTitle: 'Kọ Idagbasoke Wẹẹbu',
    heroSubtitle: 'Kọ Awọn Ohun elo Ode oni',
    heroDescription: 'Kọ awọn imọ-ẹrọ wẹẹbu tuntun pẹlu ẹkọ pipe wa. Lati ibẹrẹ si alamọdaju, a yoo ṣe itọsọna rẹ nipasẹ gbogbo igbesẹ ti irin-ajo koodu rẹ.',
    getStarted: 'Bẹrẹ',
    learnMore: 'Kọ Sii',
    
    // Features Section
    featuresTitle: 'Kilode Ti O Yẹ Ki O Yan Ẹkọ Wa?',
    featuresSubtitle: 'Ohun gbogbo ti o nilo lati di olùdàgbàsókè aṣeyọri',
    
    feature1Title: 'Awọn Olukọ Alamọdaju',
    feature1Description: 'Kọ lati ọdọ awọn alamọdaju ile-iṣẹ pẹlu ọdun pupọ ti iriri ni idagbasoke wẹẹbu.',
    
    feature2Title: 'Awọn Iṣẹ Akanṣe Ọwọ',
    feature2Description: 'Kọ awọn ohun elo agbaye gidi ti o le ṣafikun si apo-iṣẹ rẹ.',
    
    feature3Title: 'Iwọle Igbesi-aye',
    feature3Description: 'Gba iwọle ailopin si akoonu ẹkọ ati awọn imudojuiwọn ọjọ iwaju.',
    
    feature4Title: 'Atilẹyin Agbegbe',
    feature4Description: 'Darapọ mọ agbegbe ti n ṣiṣẹ ti awọn akẹkọ ati gba iranlọwọ nigbati o ba nilo rẹ.',
    
    // Stats Section
    studentsEnrolled: 'Awọn Akẹkọ Ti Forukọsilẹ',
    coursesCompleted: 'Awọn Ẹkọ Ti Pari',
    satisfactionRate: 'Oṣuwọn Itẹlọrun',
    
    // Footer
    footerDescription: 'Fifun awọn olùdàgbàsókè ni agbaye lagbara pẹlu ẹkọ idagbasoke wẹẹbu ti o ga julọ ati awọn ọgbọn to wulo.',
    courseSection: 'Ẹkọ',
    supportSection: 'Atilẹyin',
    companySection: 'Ile-iṣẹ',
    
    // Footer Links
    aboutCourse: 'Nipa Ẹkọ',
    curriculum: 'Eto Ẹkọ',
    instructors: 'Awọn Olukọ',
    testimonials: 'Awọn Ẹri',
    
    helpCenter: 'Ile-iṣẹ Iranlọwọ',
    documentation: 'Iwe Akọsilẹ',
    community: 'Agbegbe',
    
    aboutUs: 'Nipa Wa',
    careers: 'Awọn Iṣẹ',
    blog: 'Blog',
    press: 'Atẹjade',
    
    // Footer Bottom
    allRightsReserved: 'Gbogbo ẹtọ ni a daabobo.',
    privacyPolicy: 'Eto Aṣiri',
    termsOfService: 'Awọn Ofin Iṣẹ',
    cookiePolicy: 'Eto Cookie',
    
    language: 'Ede'
  }
}

export function useTranslation() {
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
  }
  
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  const currentLang = computed(() => currentLanguage.value)
  
  return {
    t,
    setLanguage,
    currentLang
  }
}