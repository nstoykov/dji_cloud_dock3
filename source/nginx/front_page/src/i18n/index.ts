import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zh from './locales/zh'

const getInitialLocale = () => {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLocale = localStorage.getItem('locale')
  return storedLocale === 'en' || storedLocale === 'zh' || storedLocale === 'bg' ? storedLocale : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    zh,
    bg: en
  }
})

export default i18n
