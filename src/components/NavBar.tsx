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
      <div className="container-responsive h-[47px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px] flex relative justify-center overflow-hidden z-50">
        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-8">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="size-[20px] sm:size-[24px] md:size-[28px] lg:size-[32px] xl:size-[34px]">{Solar_Sale}</div>
            <p className="font-clash font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] text-white">
              50% OFF |
              <span className="opacity-60"> All Plans | Flash Sale</span>
            </p>
          </div>
          <div className="flex gap-[2px] sm:gap-[3px] md:gap-[4px] lg:gap-[5px] xl:gap-[6px] items-center">
            <TimeShow time={time.hr} interval="HR" />
            <p className="font-clash font-semibold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-white">:</p>
            <TimeShow time={time.min} interval="MIN" />
            <p className="font-clash font-semibold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-white">:</p>
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
            className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[150px] absolute inset-[30%_auto_auto_-8%] sm:inset-[25%_auto_auto_-5%] md:inset-[20%_auto_auto_-3%] lg:inset-[15%_auto_auto_-2%] xl:inset-[-60%_auto_auto_3%] rotate-[30deg] sm:rotate-[25deg] md:rotate-[20deg] lg:rotate-[15deg] xl:rotate-[30deg]"
          />
          <Image
            width={150}
            height={150}
            alt="navbar_right"
            priority
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e8e_Group.svg"
            className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[150px] absolute inset-[35%_-8%_-25%_auto] sm:inset-[30%_-6%_-20%_auto] md:inset-[25%_-4%_-15%_auto] lg:inset-[20%_-2%_-10%_auto] xl:inset-[-23%_1%_-25%_auto] rotate-[113.27deg] sm:rotate-[90deg] md:rotate-[60deg] lg:rotate-[30deg] xl:rotate-0"
          />
        </div>
      </div>
    </div>
  );
}

function TimeShow({ time, interval }: { time: string; interval: string }) {
  return (
    <div className="w-[24px] h-[22px] sm:w-[32px] sm:h-[30px] md:w-[40px] md:h-[38px] lg:w-[48px] lg:h-[46px] xl:w-[56px] xl:h-[52px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] bg-white flex flex-col items-center justify-center">
      <p className="font-clash font-semibold text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[10px] sm:leading-[15px] md:leading-[20px] lg:leading-[25px] xl:leading-[30px] text-primary">
        {time}
      </p>
      <p className="font-satoshi font-bold text-[4px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:text-[12px] leading-[4px] sm:leading-[6px] md:leading-[8px] lg:leading-[10px] xl:leading-[15px] text-black">
        {interval}
      </p>
    </div>
  );
}
