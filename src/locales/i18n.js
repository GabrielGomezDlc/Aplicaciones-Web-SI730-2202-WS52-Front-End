import { createI18n } from 'vue-i18n';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';

const i18n = createI18n({
  locale:"es",
  messages:{
    en,
    es,
    fr
  }
})

export default i18n;