"use client";

import { useTranslation } from "../i18n/client";
import Button from "./_components/button";
import { useEffect, useState } from "react";
import Hero from "./_components/hero";
import ourStory from "../../public/ourStory.jpg";
import alcohol from "../../public/alcohol.svg";
import droplet from "../../public/droplet.svg";
import preservative from "../../public/preservative.svg";
import Review from "./_components/review";
import Image from "next/image";
import arrow from "../../public/arrow.svg";
import Link from "next/link";
import FloatingContact from "./_components/FloatingContact";
import cartoonCat from "@/public/cartoonCat.png";
import cartoonDog from "@/public/cartoonDog.png";
import FadeInSection from "./_components/fadeInSection";

export default function HomePage({ params }) {
  // ตรงนี้เอา params มาใช้ตรงๆเลย ไม่ต้องใช้ use()
  const { lng } = params;

  // ใช้ useTranslation กับภาษาที่ได้มา
  const { t, i18n } = useTranslation(lng, "home");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // เปลี่ยนภาษา ถ้าไม่ตรงกับ lng ที่รับมา
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [i18n, lng]);

  // รอจนกว่าจะพร้อมค่อยแสดงผล
  if (!ready) return null;

  return (
    <div className="relative xl:mx-[200px] max-w-screen overflow-x-hidden">
      <FadeInSection delay={0.2}>
        <Hero />
      </FadeInSection>

      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 p-6 gap-6 xl:mt-8">
          <FadeInSection delay={0.2}>
            <Button href={"/contactUs"} name={t("buttonContactUs")} />{" "}
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Button href={"/ourStory"} name={t("buttonOurStory")} />
          </FadeInSection>
        </div>
      </div>

      <FadeInSection delay={0.2}>
        <div className="w-[80%] mx-auto xl:mt-8 drop-shadow-xl">
          <Image
            src={ourStory}
            alt="ourStory"
            width={1920}
            height={1080}
            className="rounded-2xl"
          />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="w-[80%] mx-auto py-4 xl:mt-8">
          <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] text-[#1A2A40]">
            {t("paragraph1")}
          </p>
        </div>
      </FadeInSection>
      <div className="w-[80%] mx-auto py-4 xl:mt-8">
        <FadeInSection delay={0.2}>
          <h1 className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold">
            {t("ourStoryTitle")}
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <p className="text-[16px] lg:text-[20px] xl:text-[20px] md:text-[16px] text-[#1A2A40] xl:mt-8">
            {t("paragraphDes")}
          </p>
        </FadeInSection>
      </div>

      <div className="w-[80%] mx-auto py-4 grid grid-cols-1 gap-8 xl:mt-8">
        <FadeInSection delay={0.2}>
          <div className="flex gap-2 xl:mt-8">
            <Image
              src={preservative}
              alt="preservative"
              width={50}
              height={75}
            />
            <div>
              <h4 className="text-[16px] lg:text-[20px] xl:text-[20px] md:text-[16px] font-bold text-[#1A2A40]">
                {t("NoPreservatives")}
              </h4>
              <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] text-[#1A2A40]">
                {t("NoPreservativesDes")}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="flex gap-2 xl:mt-8">
            <Image src={alcohol} alt="alcohol" width={50} height={75} />
            <div>
              <h4 className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] font-bold text-[#1A2A40]">
                {t("NoAlcohol")}
              </h4>
              <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] text-[#1A2A40]">
                {t("NoAlcoholDes")}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="flex gap-2 xl:mt-8">
            <Image src={droplet} alt="droplet" width={50} height={75} />
            <div>
              <h4 className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] font-bold text-[#1A2A40]">
                {t("NoMoreTears")}
              </h4>
              <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] text-[#1A2A40]">
                {t("NoMoreTearsDes")}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <Link
            href={"/ourStory"}
            className="flex items-center gap-2 text-[#1A2A40] text-[16px] md:text-[16px] lg:text-[22px] xl:text-[20px] font-bold xl:mt-8 underline  md:w-1/5"
          >
            OUR STORY
            <Image src={arrow} alt="arrow" width={22} height={26} />
          </Link>
        </FadeInSection>
      </div>

      <FadeInSection delay={0.2}>
        <div className="relative flex justify-center items-center mt-8 w-screen">
          <div className="absolute top-[-140px] right-[-24%] rotate-[-23deg] md:top-[-200px] md:right-[-12%] lg:top-[-210px] lg:right-[-80px] xl:right-[12%] xl:rotate-[-52deg] xl:top-[-400px]   z-[-1]">
            <Image
              src={cartoonDog}
              alt="dog"
              className="w-[260px] md:w-[360px] xl:w-[540px] drop-shadow-xl "
              style={{ height: "auto" }}
            />
          </div>
          <div className=" absolute top-[-100px] left-[-25%] rotate-[23deg] md:top-[-150px] md:left-[-10%] lg:top-[-110px] lg:left-[-80px]  xl:left-[-8%] xl:rotate-[42deg] xl:top-[-400px]  z-[-1]">
            <Image
              src={cartoonCat}
              alt="Cat"
              className="w-[260px] md:w-[300px] xl:w-[740px] drop-shadow-xl "
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </FadeInSection>
      <Review title={t("ourReviews")} />
    </div>
  );
}
