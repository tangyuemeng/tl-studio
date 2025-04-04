// i18n.js
import { createI18n } from 'vue-i18n'

import ja from './locales/ja.json'
import zh from './locales/zh.json'

const browserLang = navigator.language || navigator.userLanguage;
const initialLang = browserLang.startsWith('zh') ? 'zh' : 'ja';

const i18n = createI18n({
  legacy: false, 
  locale: initialLang, 
  fallbackLocale: 'zh',
  messages: {
    ja,
    zh
  }
})

export default i18n