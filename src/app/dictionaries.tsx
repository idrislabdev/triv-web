const dictionariesHome: any = {
  id: () => import("./dictionaries/home/id.json").then((module) => module.default),
  en: () => import("./dictionaries/home/en.json").then((module) => module.default),
};

const dictionariesStaking: any = {
    id: () => import("./dictionaries/staking/id.json").then((module) => module.default),
    en: () => import("./dictionaries/staking/en.json").then((module) => module.default),
};

const dictionariesLiverate: any = {
  id: () => import("./dictionaries/staking/id.json").then((module) => module.default),
  en: () => import("./dictionaries/staking/en.json").then((module) => module.default),
};

export const getDictionaryHome = async (locale: any) => dictionariesHome[locale]();  
export const getDictionaryStaking = async (locale: any) => dictionariesStaking[locale]();
export const getDictionaryLierate = async (locale: any) => dictionariesLiverate[locale]();