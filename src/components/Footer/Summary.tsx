import React from "react";
import Image from "next/image";
import Company from "./Company";

export default function Summary() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[40%] xl:w-full md:max-w-[280px] h-full justify-between pb-7">
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
        <div className="flex p-2.5 items-center justify-center xl:justify-start rounded-lg border border-white/20 bg-white/10 gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
          </span>
          <p className="font-satoshi font-normal text-[16px] leading-[18px] text-white">
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
