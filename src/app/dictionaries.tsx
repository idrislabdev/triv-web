const dictionariesLogin: any = {
  id: () => import("./dictionaries/login/id.json").then((module) => module.default),
  en: () => import("./dictionaries/login/en.json").then((module) => module.default),
};

const dictionariesRegister: any = {
  id: () => import("./dictionaries/register/id.json").then((module) => module.default),
  en: () => import("./dictionaries/register/en.json").then((module) => module.default),
};

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

const dictionariesStocks: any = {
  id: () => import("./dictionaries/stocks/id.json").then((module) => module.default),
  en: () => import("./dictionaries/stocks/en.json").then((module) => module.default),
};

const dictionariesContactUs: any = {
  id: () => import("./dictionaries/contact-us/id.json").then((module) => module.default),
  en: () => import("./dictionaries/contact-us/en.json").then((module) => module.default),
};

const dictionariesBlog: any = {
  id: () => import("./dictionaries/blog/id.json").then((module) => module.default),
  en: () => import("./dictionaries/blog/en.json").then((module) => module.default),
};

const dictionariesAffliate: any = {
  id: () => import("./dictionaries/affliate/id.json").then((module) => module.default),
  en: () => import("./dictionaries/affliate/en.json").then((module) => module.default),
};

const dictionariesFaqs: any = {
  id: () => import("./dictionaries/faqs/id.json").then((module) => module.default),
  en: () => import("./dictionaries/faqs/en.json").then((module) => module.default),
};

const dictionariesProductsPulsa: any = {
  id: () => import("./dictionaries/product-pulsa/id.json").then((module) => module.default),
  en: () => import("./dictionaries/product-pulsa/en.json").then((module) => module.default),
};

const dictionariesProductsTokenListrik: any = {
  id: () => import("./dictionaries/product-token-listrik/id.json").then((module) => module.default),
  en: () => import("./dictionaries/product-token-listrik/en.json").then((module) => module.default),
};

const dictionariesProductsTagihan: any = {
  id: () => import("./dictionaries/product-tagihan/id.json").then((module) => module.default),
  en: () => import("./dictionaries/product-tagihan/en.json").then((module) => module.default),
};
export const getDictionaryLogin = async (locale: any) => dictionariesLogin[locale]();  
export const getDictionaryRegister = async (locale: any) => dictionariesRegister[locale]();  
export const getDictionaryHome = async (locale: any) => dictionariesHome[locale]();  
export const getDictionaryStaking = async (locale: any) => dictionariesStaking[locale]();
export const getDictionaryLierate = async (locale: any) => dictionariesLiverate[locale]();
export const getDictionariesStocks = async (locale: any) => dictionariesStocks[locale]();
export const getDictionariesContactUs = async (locale: any) => dictionariesContactUs[locale]();
export const getDictionariesBlog = async (locale: any) => dictionariesBlog[locale]();
export const getDictionariesAffliate = async (locale: any) => dictionariesAffliate[locale]();
export const getDictionariesFaqs = async (locale: any) => dictionariesFaqs[locale]();
export const getDictionariesProductsPulsa = async (locale: any) => dictionariesProductsPulsa[locale]();
export const getDictionariesProductsTokenListrik = async (locale: any) => dictionariesProductsTokenListrik[locale]();
export const getDictionariesProductsTagihan = async (locale: any) => dictionariesProductsTagihan[locale]();