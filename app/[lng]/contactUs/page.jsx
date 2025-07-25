"use client";

import { useTranslation } from "../../i18n/client";
import Image from "next/image";
import facebookBanner from "@/public/facebookBanner.jpg";
import Link from "next/link";
import Line from "@/public/Line.png";
import Chat from "@/public/Chat.png";
import { useEffect, useState } from "react";

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
    <div className="mx-8 mt-4">
      <div>
        <h1 className="text-[42px]">{t("contactUs")}</h1>
      </div>

      <div className="mt-2">
        <p>{t("Description")}</p>
      </div>

      <div className="mt-4">
        <p>{t("contactHere")}</p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4">
        <Image src={facebookBanner} alt="Facebook Banner" />
      </div>

      <div className="flex justify-center items-center mt-12 font-bold">
        <p>สายด่วนโทร : 099-201 8623</p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <p className="font-bold">{t("or")}</p>
      </div>

      <div className="flex justify-center items-center gap-8 mt-4 mb-8">
        <Link href="https://line.me/ti/p/KXQhqKU34N" target="_blank">
          <Image src={Line} alt="Line" />
        </Link>

        <Link
          href="https://m.me/650965728100609?source=qr_link_share"
          target="_blank"
        >
          <Image src={Chat} alt="Messenger Chat" />
        </Link>
      </div>
    </div>
  );
}
