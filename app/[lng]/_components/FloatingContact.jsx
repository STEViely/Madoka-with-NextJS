import Image from "next/image";
import Line from "@/public/Line.png";
import Chat from "@/public/Chat.png";

export default function FloatingContact() {
  return (
    <div className="flex fixed bottom-5 right-1 md:right-3 flex-col justify-center items-center gap-2 z-[9999] isolation-auto">
      <a
        href="https://lin.ee/MsoarOB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <Image
            src={Line}
            alt="line"
            width={80}
            height={80}
            className="w-[42px] transition-transform duration-300 ease-in-out transform hover:scale-125 md:w-[62px]"
          />
        </button>
      </a>
      <a
        href="https://m.me/ggdesignlogo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <Image
            src={Chat}
            alt="chat"
            width={49}
            height={49}
            className="w-[40px] transition-transform duration-300 ease-in-out transform hover:scale-125 md:w-[60px]"
          />
        </button>
      </a>
    </div>
  );
}
// export default function FloatingContact() {
//   return (
//     <div className="fixed bottom-5 right-5 z-[9999] bg-red-500 text-white p-2">
//       Floating Contact!
//     </div>
//   );
// }
