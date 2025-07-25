"use client";

import { use } from "react"; // 👈 ใช้ use() เพื่อแกะ Promise
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

export default function HomePage({ params }) {
  const { lng } = use(params); // 👈 ดึงค่า lng อย่างถูกต้อง

  const { t, i18n } = useTranslation(lng, "home");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [i18n, lng]);

  if (!ready) return null;

  return (
    <div>
      <Hero />
      <div className="w-full flex justify-center items-center">
        <div className=" grid grid-cols-1 p-6 gap-6">
          <Button href={"/contactUs"} name={t("buttonContactUs")} />

          <Button href={"/ourStory"} name={t("buttonOurStory")} />
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <Image
          src={ourStory}
          alt="ourStory"
          width={1920}
          height={1080}
          className="rounded-2xl"
        />
      </div>
      <div className="w-[80%] mx-auto py-4">
        <p className="text-[12px] text-[#1A2A40]">{t("paragraph1")}</p>
      </div>
      <div className="w-[80%] mx-auto py-4">
        <h1>{t("ourStoryTitle")}</h1>
        <p className="text-[12px] text-[#1A2A40]">{t("paragraphDes")}</p>
      </div>
      <div className="w-[80%] mx-auto py-4  grid grid-cols-1 gap-8">
        <div className="flex gap-2">
          <Image src={preservative} alt="preservative" width={50} height={75} />
          <div>
            <h4 className="text-[14px] text-[#1A2A40]">
              {t("NoPreservatives")}
            </h4>
            <p className="text-[12px] text-[#1A2A40]">
              {t("NoPreservativesDes")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src={alcohol} alt="alcohol" width={50} height={75} />
          <div>
            <h4 className="text-[14px] text-[#1A2A40]">{t("NoAlcohol")}</h4>
            <p className="text-[12px] text-[#1A2A40]">{t("NoAlcoholDes")}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src={droplet} alt="droplet" width={50} height={75} />
          <div>
            <h4 className="text-[14px] text-[#1A2A40]">{t("NoMoreTears")}</h4>
            <p className="text-[12px] text-[#1A2A40]">{t("NoMoreTearsDes")}</p>
          </div>
        </div>
        <Link
          href={"/ourStory"}
          className="flex items-center gap-2 text-[#1A2A40] text-[14px] font-bold"
        >
          OUR STORY
          <Image src={arrow} alt="arrow" width={22} height={26} />
        </Link>
      </div>
      <Review title={t("ourReviews")} />
      <FloatingContact />
    </div>
  );
}
