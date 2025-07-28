"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { languages } from "../../i18n/settings";
import { useTranslation } from "../../i18n/client";

export default function Header({ lng }) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation(lng, "header");

  const otherLang = languages.find((l) => l !== lng);
  const newPath = pathname.replace(`/${lng}`, `/${otherLang}`);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [lng, i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // ✅ ฟังก์ชันตรวจว่าเมนูนี้ Active ไหม (ตรวจแบบเป๊ะ)
  const isActive = (targetPath) => {
    const normalizedPath = targetPath.endsWith("/")
      ? targetPath.slice(0, -1)
      : targetPath;
    const currentPath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    return currentPath === normalizedPath;
  };

  if (!ready) return null;

  return (
    <header>
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-[#ffffff]">
        <Link href={`/${lng}`}>
          <div className="w-[96px] md:w-[120px] lg:w-[193px]">
            <Image
              src={logo}
              alt="Madoka"
              width={96}
              height={96}
              className="lg:w-[180px]"
            />
          </div>
        </Link>
        <div className="flex items-center gap-4 lg:gap-16">
          <Link
            href={newPath}
            className="bg-[#D66C5E] text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {t("switchTo")} {otherLang.toUpperCase()}
          </Link>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-8 h-8 text-[#7492AA]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-[#7492AA]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          <ul className="hidden lg:flex flex-row gap-16 text-[#1A2A40] text-[16px] sm:text-[20px] md:text-[24px] z-10">
            <li
              className={`hover:underline ${
                isActive(`/${lng}`) ? "underline" : ""
              }`}
            >
              <Link href={`/${lng}`}>{t("home")}</Link>
            </li>
            <li
              className={`hover:underline ${
                isActive(`/${lng}/ourStory`) ? "underline" : ""
              }`}
            >
              <Link href={`/${lng}/ourStory`}>{t("ourStory")}</Link>
            </li>
            <li
              className={`hover:underline ${
                isActive(`/${lng}/contactUs`) ? "underline" : ""
              }`}
            >
              <Link href={`/${lng}/contactUs`}>{t("contactUs")}</Link>
            </li>
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div className="fixed right-0 top-14 bg-white opacity-50 w-full h-full z-40"></div>
          <div className="absolute right-0 top-14 bg-[#7492AA] w-[40%] flex rounded-lg flex-col items-end px-4 py-6 z-50">
            <ul className="flex flex-col gap-4 justify-center items-end text-white text-[16px] sm:text-[20px]">
              <li>
                <Link
                  href={`/${lng}`}
                  className={`hover:underline ${
                    isActive(`/${lng}`) ? "underline" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lng}/ourStory`}
                  className={`hover:underline ${
                    isActive(`/${lng}/ourStory`) ? "underline" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {t("ourStory")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lng}/contactUs`}
                  className={`hover:underline ${
                    isActive(`/${lng}/contactUs`) ? "underline" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
