import Image from "next/image";
import heroPic from "@/public/heroPic.jpg";

export default function Hero() {
  return (
    <div className="relative w-full drop-shadow-lg">
      <Image
        src={heroPic}
        alt="background"
        width={1920}
        style={{ height: "auto" }}
        priority
      />
    </div>
  );
}
