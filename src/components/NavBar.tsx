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
      <div className="max-w-[1440px] w-full h-[47px] md:h-max xl:h-[70px] xl:mx-auto py-2 flex relative justify-center overflow-hidden z-50">
        <div className="flex justify-center items-center xl:gap-8 gap-2">
          <div className="flex items-center gap-2">
            <div className="xl:size-[34px] size-[20px]">{Solar_Sale}</div>
            <p className="font-clash font-semibold text-[16px] md:text-[24px] xl:text-[28px] text-white">
              50% OFF |
              <span className="opacity-60"> All Plans | Flash Sale</span>
            </p>
          </div>
          <div className="flex gap-[3px] xl:gap-[6px] items-center">
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
            className="xl:w-[150px] md:w-[120px] w-[80px] absolute md:inset-[-60%_auto_auto_3%] rotate-[30deg] inset-[30%_auto_auto_-8%]"
          />
          <Image
            width={150}
            height={150}
            alt="navbar_right"
            priority
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e8e_Group.svg"
            className="xl:w-[150px] md:w-[120px] w-[70px] absolute md:inset-[-23%_1%_-25%_auto] md:rotate-0 rotate-[113.27deg] inset-[35%_-8%_-25%_auto]"
          />
        </div>
      </div>
    </div>
  );
}

function TimeShow({ time, interval }: { time: string; interval: string }) {
  return (
    <div className="xl:w-[56px] xl:h-[52px] md:size-[40px] size-[27px] rounded-[5px] bg-white flex flex-col items-center justify-center">
      <p className="font-clash font-semibold text-[12px] md:text-[20px] xl:text-[24px] leading-[15px] xl:leading-[30px] text-primary">
        {time}
      </p>
      <p className="font-satoshi font-bold text-[6px] md:text-[10px] xl:text-[12px] leading-[4px] md:leading-3 xl:leading-[15px] text-black">
        {interval}
      </p>
    </div>
  );
}
