"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "../../i18n/client";

export default function ClientPage({ params: { lng } }) {
  const { t } = useTranslation(lng, "client");

  useEffect(() => {}, []);

  return (
    <>
      <h1>{t("clientPage")}</h1>
      <Link href={`/${lng}/profile`}>{t("gotoProfile")}</Link>
      <br />
      <Link href={`/${lng}`}>{t("gotoHome")}</Link>
    </>
  );
}
