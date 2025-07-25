"use client";

import Image from "next/image";
import ourStoryHero from "@/public/ourStoryHero.jpg";
import { useTranslation } from "../../i18n/client";
import bottleSpray from "@/public/bottleSpray.jpg";
import ourStoryending from "@/public/ourStoryending.jpg";

export default function OurStortyPage({ lng }) {
  const { t, i18n } = useTranslation(lng, "ourStory");

  return (
    <div className="w-full ">
      <Image
        src={ourStoryHero}
        alt="background"
        width={1920}
        height={1080}
        priority // for LCP optimization
        className="object-contain z-10 w-full h-auto"
      />
      <div className="px-8 py-4">
        <h1 className="font-bold text-2xl my-4">{t("ourStory")} </h1>
        <p>{t("paragraph1")}</p>

        <div className="mt-4 flex flex-col-reverse md:flex-row items-start gap-4">
          {/* ข้อความ */}
          <div className="w-full md:w-[40%] text-[16px] text-[#1A2A40]">
            <p>{t("paragraph2")}</p>
          </div>

          {/* รูป */}
          <div className="w-full md:w-[60%]">
            <Image
              src={bottleSpray}
              alt="bottleSprayPicture"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-4 font-bold">
          <p className="text-[18px] text-[#1A2A40] text-center">
            {t("byebye")}
          </p>
          <Image
            src={ourStoryending}
            alt="ending"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
