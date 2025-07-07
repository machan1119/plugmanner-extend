import React, { memo } from "react";
import Image from "next/image";

export default function Summary() {
  return (
    <div className="flex flex-col gap-5 w-full md:max-w-[280px] pb-4 sm:pb-0">
      <div className="flex flex-col gap-4">
        <Image
          width={164}
          height={32}
          alt="SocialPlug Logo"
          src="/img/title_logo.png"
        />
        <p className="font-satoshi font-normal text-[16px] leading-[18px] text-white/50">
          Socialplug is the industry-leading media shop offering variety of
          services across social media platforms.
        </p>
      </div>

      <div className="flex p-2.5 items-center justify-start rounded-lg border border-white/20 bg-white/10 gap-2 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
        </span>
        <p className="font-satoshi font-normal text-[16px] leading-[18px] text-white">
          All services are online
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-clash font-semibold text-[20px] text-white leading-[25px]">
          Company
        </p>
        <p className="font-satoshi font-normal text-[16px] leading-[18px] text-white/50">
          CB SOLUTIONS OÜ (16474680) Hobujaama 5, Talinn, Estonia, 10111
        </p>
        <p className="font-satoshi font-normal text-[16px] leading-[18px] text-white">
          Open 24/7 Mon - Sun
        </p>
      </div>
    </div>
  );
}
