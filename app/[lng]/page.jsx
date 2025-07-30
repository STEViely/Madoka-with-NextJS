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
    <div className="relative lg:mx-[200px]">
      <FadeInSection delay={0.2}>
        <Hero />
      </FadeInSection>

      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 p-6 gap-6 lg:mt-8">
          <FadeInSection delay={0.2}>
            <Button href={"/contactUs"} name={t("buttonContactUs")} />{" "}
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Button href={"/ourStory"} name={t("buttonOurStory")} />
          </FadeInSection>
        </div>
      </div>

      <FadeInSection delay={0.2}>
        <div className="w-[80%] mx-auto lg:mt-8 drop-shadow-lg">
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
        <div className="w-[80%] mx-auto py-4 lg:mt-8">
          <p className="text-[16px] md:text-[16px] lg:text-[20px] text-[#1A2A40]">
            {t("paragraph1")}
          </p>
        </div>
      </FadeInSection>
      <div className="w-[80%] mx-auto py-4 lg:mt-8">
        <FadeInSection delay={0.2}>
          <h1 className="text-[20px] lg:text-[24px] font-bold">
            {t("ourStoryTitle")}
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <p className="text-[16px] lg:text-[20px] md:text-[16px] text-[#1A2A40] lg:mt-8">
            {t("paragraphDes")}
          </p>
        </FadeInSection>
      </div>

      <div className="w-[80%] mx-auto py-4 grid grid-cols-1 gap-8 lg:mt-8">
        <FadeInSection delay={0.2}>
          <div className="flex gap-2 lg:mt-8">
            <Image
              src={preservative}
              alt="preservative"
              width={50}
              height={75}
            />
            <div>
              <h4 className="text-[16px] lg:text-[20px] md:text-[16px] font-bold text-[#1A2A40]">
                {t("NoPreservatives")}
              </h4>
              <p className="text-[16px] md:text-[16px] lg:text-[20px] text-[#1A2A40]">
                {t("NoPreservativesDes")}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="flex gap-2 lg:mt-8">
            <Image src={alcohol} alt="alcohol" width={50} height={75} />
            <div>
              <h4 className="text-[16px] md:text-[16px] lg:text-[20px] font-bold text-[#1A2A40]">
                {t("NoAlcohol")}
              </h4>
              <p className="text-[16px] md:text-[16px] lg:text-[20px] text-[#1A2A40]">
                {t("NoAlcoholDes")}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="flex gap-2 lg:mt-8">
            <Image src={droplet} alt="droplet" width={50} height={75} />
            <div>
              <h4 className="text-[16px] md:text-[16px] lg:text-[20px] font-bold text-[#1A2A40]">
                {t("NoMoreTears")}
              </h4>
              <p className="text-[16px] md:text-[16px] lg:text-[20px] text-[#1A2A40]">
                {t("NoMoreTearsDes")}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <Link
            href={"/ourStory"}
            className="flex items-center gap-2 text-[#1A2A40] text-[16px] md:text-[16px] lg:text-[20px] font-bold lg:mt-8"
          >
            OUR STORY
            <Image src={arrow} alt="arrow" width={22} height={26} />
          </Link>
        </FadeInSection>
      </div>

      <Review title={t("ourReviews")} />
      <FadeInSection delay={0.2}>
        <div>
          <div className="absolute top-[1450px] right-[-24%] rotate-[-23deg] md:top-[1520px] md:right-[-12%] lg:right-[-32%] lg:rotate-[-52deg] lg:top-[2000px]   z-[-1]">
            <Image
              src={cartoonDog}
              alt="dog"
              className="w-[260px] md:w-[360px] lg:w-[740px] drop-shadow-lg"
              style={{ height: "auto" }}
            />
          </div>
          <div className=" absolute top-[1500px] left-[-25%] rotate-[23deg] md:top-[1650px] md:left-[-14%]  lg:left-[-35%] lg:rotate-[42deg] lg:top-[2200px]  z-[-1]">
            <Image
              src={cartoonCat}
              alt="Cat"
              className="w-[260px] md:w-[300px] lg:w-[740px] drop-shadow-lg"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
