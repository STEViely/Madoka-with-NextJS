"use client";

import Link from "next/link";

export default function Button({ name, href }) {
  return (
    <Link
      href={href}
      className="bg-[#7492AA] w-[220px] h-[55px] text-[16px] md:w-[182px] md:h-[56px] md:text-[14px] lg:w-[280px] lg:h-[100px] lg:text-[20px] hover:bg-white hover:text-[#7492AA] hover:border-[#7492AA] hover:border-[4px] rounded-xl text-white flex justify-center items-center drop-shadow-lg transition-all duration-100 ease-in-out"
    >
      {name}
    </Link>
  );
}
