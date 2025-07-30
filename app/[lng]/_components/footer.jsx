import Image from "next/image";
import Line from "@/public/Line.png";
import facebookIcon from "@/public/facebookIcon.png";
import fullLogo from "@/public/fullLogo.png";
import FadeInSection from "../_components/fadeInSection";

export default function Footer() {
  return (
    <footer className="bg-white  text-[#1A2A40] ">
      <FadeInSection delay={0.2}>
        <div className="h-20 w-20 mx-auto mb-4 relative">
          <a href="/">
            <Image
              src={fullLogo}
              alt="logo"
              width={150}
              style={{ height: "auto" }}
              className="mx-auto pb-4"
              priority
            />
          </a>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
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
                <Image
                  src={Line}
                  alt="line"
                  width={25}
                  style={{ height: "auto" }}
                />
              </button>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576768495177#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image
                  src={facebookIcon}
                  alt="chat"
                  width={28}
                  style={{ height: "auto" }}
                />
              </button>
            </a>
          </div>
        </div>
      </FadeInSection>
    </footer>
  );
}
