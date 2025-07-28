"use client";

import Image from "next/image";
import ourStoryHero from "@/public/ourStoryHero.jpg";
import { useTranslation } from "../../i18n/client";
import bottleSpray from "@/public/bottleSpray.jpg";
import ourStoryending from "@/public/ourStoryending.jpg";
import { useEffect, useState } from "react";
import FloatingContact from "../_components/FloatingContact";

export default function OurStoryPage({ params }) {
  const { lng } = params;
  const { t, i18n } = useTranslation(lng, "ourStory");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [lng, i18n]);

  if (!ready) {
    // รอโหลดภาษาเสร็จค่อย render (เพื่อแก้ hydration mismatch)
    return null;
  }

  return (
    <div className=" lg:mx-[200px]">
      <Image
        src={ourStoryHero}
        alt="background"
        width={1920}
        height={1080}
        priority
        className="object-contain z-10 w-full h-auto"
      />
      <div className="px-8 py-4">
        <h1 className="font-bold text-[18px] md:text-[24px] my-4">
          {t("ourStory")}
        </h1>
        <p className="text-[14px] md:text-[16px]">{t("paragraph1")}</p>

        <div className="mt-4 flex flex-col-reverse  md:flex-row items-start gap-4">
          <div className="w-full md:w-[40%] text-[16px] text-[#1A2A40] ">
            <p className="text-[14px] md:text-[16px] ">{t("paragraph2")}</p>
          </div>

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
      <FloatingContact />
    </div>
  );
}
