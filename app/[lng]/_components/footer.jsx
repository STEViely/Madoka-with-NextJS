import Image from "next/image";
import Line from "@/public/Line.png";
import facebookIcon from "@/public/facebookIcon.png";

export default function Footer() {
  return (
    <footer className="bg-white  text-[#1A2A40] pt-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 Madoka. All rights reserved.</p>
        <p className="text-xs mt-2">Follow us on social media!</p>
        <div className="flex justify-center items-center gap-4 pt-2">
          <a
            href="https://line.me/ti/p/KXQhqKU34N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <Image src={Line} alt="line" width={25} height={24} />
            </button>
          </a>
          <a
            href="https://m.me/ggdesignlogo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <Image src={facebookIcon} alt="chat" width={28} height={22} />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
