import Image from "next/image";
import heroPic from "@/public/heroPic.jpg";

export default function Hero() {
  return (
    <div className="relative w-full ">
      <Image
        src={heroPic}
        alt="background"
        width={1920}
        height={1080}
        priority // for LCP optimization
        className="object-contain z-10"
      />
    </div>
  );
}
