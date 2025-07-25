"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../../i18n/client";

export default function ProfilePage() {
  const pathname = usePathname();
  const lng = pathname.split("/")[1];
  const { t } = useTranslation(lng, "profile");

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{t("profilePage")}</h1>
      <Link href={`/${lng}`}>{t("gotoHome")}</Link>
    </div>
  );
}
