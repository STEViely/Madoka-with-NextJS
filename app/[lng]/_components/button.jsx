"use client";

import Link from "next/link";

export default function Button({ name, href }) {
  return (
    <Link
      href={href}
      className="bg-[#7492AA] w-[161px] h-[45px] rounded-xl text-white text-[12px] flex justify-center items-center drop-shadow-2xl"
    >
      {name}
    </Link>
  );
}
