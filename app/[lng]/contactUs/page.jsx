"use client";

import { useTranslation } from "../../i18n/client";
import Image from "next/image";
import facebookBanner from "@/public/facebookBanner.jpg";
import Link from "next/link";
import Line from "@/public/Line.png";
import Chat from "@/public/Chat.png";
import { useEffect, useState } from "react";
import cartoonDog from "@/public/cartoonDog.png";
import cartoonCat from "@/public/cartoonCat.png";
import FadeInSection from "../_components/fadeInSection";

export default function ContactUsPage({ params }) {
  const { lng } = params;
  const { t, i18n } = useTranslation(lng, "contactUs");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [lng, i18n]);

  if (!ready) return null;

  return (
    <div className="relative overflow-hidden ">
      <div>
        <FadeInSection delay={0.2}>
          <div className="absolute top-[670px] right-[-20%] rotate-[-23deg] md:top-[810px] lg:top-[750px] lg:right-[-6%] md:right-[-8%] xl:right-[-8%] xl:rotate-[-32deg] xl:top-[880px]  z-[-1]">
            <Image
              src={cartoonDog}
              alt="dog"
              className="w-[220px] md:w-[280px] lg:w-[320px] xl:w-[540px]"
              style={{ height: "auto" }}
            />
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className=" absolute top-[700px] left-[-20%] rotate-[23deg] md:top-[860px] md:left-[-8%] lg:top-[760px] xl:left-[-14%] xl:rotate-[32deg] xl:top-[860px]  z-[-1]">
            <Image
              src={cartoonCat}
              alt="Cat"
              className="w-[200px] lg:w-[400px] xl:w-[740px] "
              style={{ height: "auto" }}
            />
          </div>
        </FadeInSection>
      </div>
      <div className=" mx-8 mt-4 xl:mt-8 xl:mx-[200px]">
        <FadeInSection delay={0.2}>
          <div>
            <h1 className="text-[42px] font-bold text-[#1A2A40] drop-shadow-lg ">
              {t("contactUs")}
            </h1>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-4 xl:mt-8">
            <p className="text-[16px] md:text-[18px] xl:text-[24px] text-[#1A2A40]">
              {t("Description")}
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-4 xl:mt-8">
            <p className="text-[16px] md:text-[18px] xl:text-[24px] text-[#1A2A40]">
              {t("contactHere")}
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-4 xl:mt-8">
            <h1 className="font-bold text-center text-[#0080FF] text-[16px] md:text-[18px] xl:text-[28px]">
              Facebook Page :
            </h1>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-4 xl:mt-8 flex flex-col items-center gap-4 cursor-pointer">
            <Link
              href={"https://www.facebook.com/profile.php?id=61576768495177#"}
              target="_blank"
            >
              <Image
                src={facebookBanner}
                alt="Facebook Banner"
                width={760}
                style={{ height: "auto" }}
                className="rounded-2xl xl:w-[1000px] "
              />
            </Link>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="flex justify-center items-center mt-12 font-bold">
            <p className="text-[16px] md:text-[18px] xl:text-[24px] text-[#1A2A40]">
              {t("hotLine")}
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-4 xl:mt-8 flex flex-col items-center gap-2">
            <p className="font-bold text-[16px] md:text-[18px] xl:text-[24px] text-[#1A2A40]">
              {t("or")}
            </p>
          </div>
        </FadeInSection>

        <div className="flex justify-center items-center gap-8 xl:gap-16 mt-4 xl:mt-8 mb-8">
          <FadeInSection delay={0.2}>
            <Link href="https://line.me/ti/p/KXQhqKU34N" target="_blank">
              <Image
                src={Line}
                alt="Line"
                width={60}
                style={{ height: "auto" }}
              />
            </Link>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Link
              href="https://m.me/650965728100609?source=qr_link_share"
              target="_blank"
            >
              <Image
                src={Chat}
                alt="Messenger Chat"
                width={58}
                style={{ height: "auto" }}
              />
            </Link>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
