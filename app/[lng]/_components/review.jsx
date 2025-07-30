"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import reviewPic from "@/public/reviewPic.jpg";

const reviews = [
  { name: "Madoka", text: "Lorem ipsum dolor sit amet.", stars: 5 },
  { name: "Homura", text: "Et doloremque aperiam possimus vitae.", stars: 5 },
  { name: "Sayaka", text: "Voluptatibus autem et doloremque.", stars: 5 },
  { name: "Mami", text: "Quisquam laboriosam voluptatibus.", stars: 5 },
  { name: "Madoka", text: "Lorem ipsum dolor sit amet.", stars: 5 },
  { name: "Homura", text: "Et doloremque aperiam possimus vitae.", stars: 5 },
  { name: "Sayaka", text: "Voluptatibus autem et doloremque.", stars: 5 },
  { name: "Mami", text: "Quisquam laboriosam voluptatibus.", stars: 5 },
];

export default function Review({ title }) {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const animate = async () => {
      if (!containerRef.current || !contentRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      const maxScroll = contentWidth - containerWidth;

      if (direction === "left") {
        await controls.start({
          x: -maxScroll,
          transition: {
            duration: 10,
            ease: "linear",
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
        setDirection("right");
      } else {
        await controls.start({
          x: 0,
          transition: {
            duration: 10,
            ease: "linear",
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
        setDirection("left");
      }
    };

    animate();
  }, [direction, controls]);

  return (
    <div className="w-full flex flex-col items-center py-8 overflow-hidden">
      <h1 className="my-4 text-[20px] lg:text-[28px] font-bold">{title}</h1>
      <div
        className="bg-[#7492AA] w-full overflow-hidden py-4 lg:mt-8"
        ref={containerRef}
      >
        <motion.div
          className="flex gap-4 w-max"
          animate={controls}
          ref={contentRef}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col gap-2 w-[140px] lg:w-[220px] "
            >
              <Image
                src={reviewPic}
                alt="reviewPicSample"
                className="rounded-2xl w-[140px] h-[220px] lg:w-[220px] lg:h-[330px] "
              />
              <div className="flex justify-start items-center ">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <div key={i}>⭐</div>
                ))}
              </div>
              <div>
                <p className="text-[12px] lg:text-[16px] text-white">
                  {review.text}
                </p>
              </div>
              <div>
                <h5 className="font-bold lg:text-[16px] text-white">
                  {review.name}
                </h5>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
