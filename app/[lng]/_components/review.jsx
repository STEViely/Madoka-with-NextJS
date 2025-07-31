"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import cat1 from "@/public/cat1.jpg";
import cat2 from "@/public/cat2.jpg";
import cat3 from "@/public/cat3.jpg";
import cat4 from "@/public/cat4.jpg";
import cat5 from "@/public/cat5.jpg";
import dog1 from "@/public/dog1.jpg";
import dog2 from "@/public/dog2.jpg";

const reviews = [
  {
    name: "Tendency",
    text: "กลิ่นหอม เย็น น้องชอบมากค่ะ เเต่น้องขนยาว เลยต้องใช้เยอะนิดนึงค่ะ",
    picture: dog1,
    orientation: "portrait",
    stars: 4,
  },
  {
    name: "Ammara Sukjai",
    text: "กลิ่นสะอาดมากค่ะ ใช้แล้วรู้สึกสดชื่น และเย็นสบาย อยากให้มีหลายกลิ่นกว่านี้ค่ะ",
    picture: cat1,
    orientation: "portrait",
    stars: 5,
  },
  {
    name: "ปลา ปานิตา",
    text: "ปกติจับน้องอาบน้ำไม่ได้บ่อยอยู่เเล้ว แต่พอได้ลองใช้ตัวนี้แล้วน้องไม่ดื้อเลยค่ะ",
    picture: cat2,
    orientation: "portrait",
    stars: 5,
  },
  {
    name: "FhaNittha",
    text: "ประหยัดเวลาไปเยอะเลยค่ะ น้องไม่ดื้อเลย ใช้เวลาอาบน้ำแค่ 2 นาที ก็เสร็จแล้ว",
    picture: dog2,
    orientation: "portrait",
    stars: 5,
  },
  {
    name: "Nimbo NimBo",
    text: "ไม่ต้องรบกันวลาอาบน้ำให้น้องอีกเเล้วค่ะ นางทาสคนนี้ชอบมากๆ 555555",
    picture: cat3,
    orientation: "portrait",
    stars: 5,
  },
  {
    name: "ณิชา Nicha",
    text: "ตัวขวดสเปรย์จับถือง่าย การกระจายตัวของสเปรย์ทำได้ดี ฉีดเเล้วทั่วถึง",
    picture: cat4,
    orientation: "portrait",
    stars: 5,
  },
  {
    name: "Bubblebeam Malee",
    text: "อยากให้มีกลิ่นที่หลากหลาย เเละให้กลิ่นคงทนติดนานกว่านี้อีกสักหน่อยค่ะ",
    picture: cat5,
    orientation: "portrait",
    stars: 5,
  },
];

export default function Review({ title }) {
  const containerRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const userDelayTimeoutRef = useRef(null);

  const [autoScrollDirection, setAutoScrollDirection] = useState("right");
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto scroll step
  const scrollStep = 1; // 🔁 ความเร็วลดลงครึ่งหนึ่ง (จาก 2 เป็น 1)
  const pauseDuration = 2000; // ⏸ หยุด 2 วินาที

  const autoScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    const step = () => {
      if (!container) return;

      if (autoScrollDirection === "right") {
        container.scrollLeft += scrollStep;
        if (container.scrollLeft >= maxScrollLeft) {
          stopAutoScrollTemporarily("left");
          return;
        }
      } else {
        container.scrollLeft -= scrollStep;
        if (container.scrollLeft <= 0) {
          stopAutoScrollTemporarily("right");
          return;
        }
      }

      scrollFrameRef.current = requestAnimationFrame(step);
    };

    scrollFrameRef.current = requestAnimationFrame(step);
  };

  const stopAutoScrollTemporarily = (nextDirection) => {
    cancelAnimationFrame(scrollFrameRef.current);
    setIsAutoScrolling(false);

    pauseTimeoutRef.current = setTimeout(() => {
      setAutoScrollDirection(nextDirection);
      setIsAutoScrolling(true);
      autoScroll();
    }, pauseDuration);
  };

  const handleUserScroll = () => {
    // หยุด auto scroll ชั่วคราว
    if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    setIsAutoScrolling(false);

    // รีเซ็ตตัวจับเวลาหลัง user scroll
    if (userDelayTimeoutRef.current) clearTimeout(userDelayTimeoutRef.current);

    userDelayTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
      autoScroll();
    }, 2000);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      autoScroll();
    }

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleUserScroll, { passive: true });
    container.addEventListener("touchmove", handleUserScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(scrollFrameRef.current);
      clearTimeout(pauseTimeoutRef.current);
      clearTimeout(userDelayTimeoutRef.current);
      container.removeEventListener("wheel", handleUserScroll);
      container.removeEventListener("touchmove", handleUserScroll);
    };
  }, [autoScrollDirection]);

  return (
    <div className="w-full flex flex-col items-center py-8 overflow-hidden">
      <h1 className="my-4 text-[20px] lg:text-[28px] font-bold">{title}</h1>

      <div
        ref={containerRef}
        className="bg-[#7492AA] w-full overflow-x-auto overflow-y-hidden py-4 lg:mt-8 px-8 scroll-smooth"
      >
        <div className="flex gap-4 w-max">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col gap-2 w-[140px] lg:w-[220px]"
            >
              <Image
                src={review.picture}
                alt={`review-by-${review.name}`}
                className={`rounded-2xl object-cover ${
                  review.orientation === "landscape"
                    ? "w-[220px] h-[140px] lg:w-[330px] lg:h-[220px]"
                    : "w-[140px] h-[220px] lg:w-[220px] lg:h-[330px]"
                }`}
              />
              <div className="flex justify-start items-center">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <div key={i}>⭐</div>
                ))}
              </div>
              <p className="text-[12px] lg:text-[16px] text-white">
                {review.text}
              </p>
              <h5 className="font-bold lg:text-[16px] text-white">
                {review.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
