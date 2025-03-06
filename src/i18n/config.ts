import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from './locale/en/common.json';


import commonFa from './locale/fa/common.json';




// import {   LANGUAGE_KEY } from '~/store/constants';
import { useGeneralStore } from '~/store/general';
import { DEFAULT_LANGUAGE, LANGUAGE_KEY } from '~/store/consts';


export const defaultNS = 'common';

export const resources = {
  en: {
    common,

  },
  fa: {
    common: commonFa,
  }
};

i18next.use(initReactI18next).init({
  lng: useGeneralStore.getState()[LANGUAGE_KEY] || DEFAULT_LANGUAGE,
  debug: true,
  returnNull: false,
  resources,
  defaultNS,
});
export default i18next;
