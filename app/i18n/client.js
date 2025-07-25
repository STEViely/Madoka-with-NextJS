"use client";

import { useEffect } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useCookies } from "react-cookie";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// ✅ Init i18next once
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend((lng, ns) =>
        import(`./locales/${lng}/${ns}.json`).catch(
          () => import(`./locales/th/${ns}.json`) // fallback locale
        )
      )
    )
    .init({
      ...getOptions(),
      lng: undefined, // let detector decide
      detection: {
        order: ["path", "htmlTag", "cookie", "navigator"],
      },
      preload: runsOnServerSide ? languages : [],
    });
}

// ✅ Hook ใช้งาน i18n พร้อมเซ็ต cookie และเปลี่ยนภาษา
export function useTranslation(lng, ns) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  // ✅ Set cookie (only run on client, ป้องกัน loop)
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (cookies[cookieName] !== lng) {
      setCookie(cookieName, lng, { path: "/" });
    }
    // ⚠️ อย่าใส่ cookies หรือ setCookie ใน dependency array!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lng]);

  // ✅ Change language in i18n
  useEffect(() => {
    if (i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return ret;
}
