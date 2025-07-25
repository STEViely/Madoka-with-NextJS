export const fallbackLng = "th";
export const languages = [fallbackLng, "en"];
export const cookieName = "i18next";
export const defaultNS = "home";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
