"use client";
import { Solar_Sale } from "@/libs/SVG";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface TimeType {
  hr: string;
  min: string;
  sec: string;
}

export default function NavBar() {
  const [time, setTime] = useState<TimeType>({
    hr: "--",
    min: "--",
    sec: "--",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hr: now.getHours().toString().padStart(2, "0"),
        min: now.getMinutes().toString().padStart(2, "0"),
        sec: now.getSeconds().toString().padStart(2, "0"),
      });
    };

    updateTime();

    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-full bg-black">
      <div className="max-w-[1440px] w-full h-[70px] mx-auto flex relative justify-center overflow-hidden z-50">
        <div className="flex justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            {Solar_Sale}
            <p className="font-clash font-semibold text-[28px] text-white">
              50% OFF |
              <span className="opacity-60"> All Plans | Flash Sale</span>
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <TimeShow time={time.hr} interval="HR" />
            <p className="font-clash font-semibold text-[28px] text-white">:</p>
            <TimeShow time={time.min} interval="MIN" />
            <p className="font-clash font-semibold text-[28px] text-white">:</p>
            <TimeShow time={time.sec} interval="SEC" />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <Image
            width={150}
            height={150}
            alt="navbar_left"
            priority
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e8d_Group%201000004059.svg"
            className="w-[150px] absolute inset-[-60%_auto_auto_3%]"
          />
          <Image
            width={150}
            height={150}
            alt="navbar_right"
            priority
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e8e_Group.svg"
            className="w-[150px] absolute inset-[-23%_1%_-25%_auto]"
          />
        </div>
      </div>
    </div>
  );
}

function TimeShow({ time, interval }: { time: string; interval: string }) {
  return (
    <div className="w-[56px] h-[52px] rounded-[5px] bg-white flex flex-col items-center justify-center">
      <p className="font-clash font-semibold text-[24px] leading-[30px] text-primary">
        {time}
      </p>
      <p className="font-satoshi font-bold text-[12px] leading-[15px] text-black">
        {interval}
      </p>
    </div>
  );
}
