import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zh from './locales/zh'

const getInitialLocale = () => {
  if (typeof window === 'undefined') {
    return 'zh'
  }

  const storedLocale = localStorage.getItem('locale')
  return storedLocale === 'en' || storedLocale === 'zh' ? storedLocale : 'zh'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'zh',
  globalInjection: true,
  messages: {
    en,
    zh
  }
})

export default i18n
