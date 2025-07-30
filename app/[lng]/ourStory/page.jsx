"use client";

import Image from "next/image";
import ourStoryHero from "@/public/ourStoryHero.jpg";
import { useTranslation } from "../../i18n/client";
import bottleSpray from "@/public/bottleSpray.jpg";
import ourStoryending from "@/public/ourStoryending.jpg";
import { useEffect, useState } from "react";
// import FloatingContact from "../_components/FloatingContact";
import FadeInSection from "../_components/fadeInSection";

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
      <FadeInSection delay={0.2}>
        <Image
          src={ourStoryHero}
          alt="background"
          width={1920}
          height={1080}
          priority
          className="object-contain z-10 w-full h-auto drop-shadow-lg"
        />
      </FadeInSection>
      <div className="px-8 py-4">
        <FadeInSection delay={0.2}>
          <h1 className="font-bold text-[18px] md:text-[24px] lg:text-[28px] my-4">
            {t("ourStory")}
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <p className="text-[16px] md:text-[18px] lg:text-[24px]">
            {t("paragraph1")}
          </p>
        </FadeInSection>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 lg:border-y lg:py-4 ">
          <FadeInSection delay={0.2}>
            <div className="w-full  text-[16px] text-[#1A2A40] flex justify-center items-center h-[600px] ">
              <p className="text-[16px] md:text-[18px] lg:text-[24px]">
                {t("paragraph2")}
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="w-full  ">
              <Image
                src={bottleSpray}
                alt="bottleSprayPicture"
                width={500}
                style={{ height: "auto" }}
                className="rounded-2xl lg:w-[600px] drop-shadow-lg"
              />
            </div>
          </FadeInSection>
        </div>

        <div className="mt-4 lg:mt-16 flex flex-col items-center gap-4 font-bold">
          <FadeInSection delay={0.2}>
            <p className="text-[20px] lg:text-[26px] text-[#1A2A40] text-center drop-shadow-lg">
              {t("byebye")}
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Image
              src={ourStoryending}
              alt="ending"
              className="rounded-2xl w-full h-auto drop-shadow-lg"
            />
          </FadeInSection>
        </div>
      </div>
      {/* <FloatingContact /> */}
    </div>
  );
}
