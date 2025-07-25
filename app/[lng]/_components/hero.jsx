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
      <div className="absolute  top-1/6 left-1/5 transform z-20 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">DOG & CAT</h1>
        <h1 className="text-4xl font-bold">PERFUME</h1>
      </div>
    </div>
  );
}
