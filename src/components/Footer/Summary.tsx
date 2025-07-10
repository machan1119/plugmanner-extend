import React from "react";
import Image from "next/image";
import Company from "./Company";

export default function Summary() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5 w-full md:max-w-[280px] h-full justify-between pb-6 sm:pb-7 md:pb-7 lg:pb-7 xl:pb-7">
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4">
        <Image
          width={164}
          height={32}
          alt="SocialPlug Logo"
          src="/img/title_logo.png"
          className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] xl:w-[164px] h-auto"
        />
        <p className="font-satoshi font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] text-white/50">
          Socialplug is the industry-leading media shop offering variety of
          services across social media platforms.
        </p>
        <div className="flex p-2 sm:p-2.5 md:p-2.5 lg:p-2.5 xl:p-2.5 items-center justify-center lg:justify-start xl:justify-start rounded-lg border border-white/20 bg-white/10 gap-2">
          <span className="relative flex size-2.5 sm:size-3 md:size-3 lg:size-3 xl:size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex size-2.5 sm:size-3 md:size-3 lg:size-3 xl:size-3 rounded-full bg-primary"></span>
          </span>
          <p className="font-satoshi font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] text-white">
            All services are online
          </p>
        </div>
      </div>
      <div className="hidden xl:block">
        <Company />
      </div>
    </div>
  );
}
