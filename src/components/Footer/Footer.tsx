"use client";
import React, { memo } from "react";
import FollowUs from "./Followus";
import Summary from "./Summary";
import SellingService from "./SellingService";
import FreeTool from "./FreeTool";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full bg-black bg-center-top bg-no-repeat bg-[size:1234px] bg-[image:url(https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338ebe_footer_bg.webp)]">
      <div className="max-w-[1440px] w-full pt-[48px] pl-[48px] pr-[72px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr_1fr] pb-14 border-solid border-b border-white/40 gap-x-8 md:gap-x-16">
          <Summary />
          <div className="flex flex-col md:flex-row gap-16 justify-self-end">
            <SellingService />
            <FreeTool />
          </div>
          <FollowUs />
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between py-4 text-sm text-white/80 gap-2">
          <div className="font-satoshi font-normal text-[16px] leading-[18px] text-white">
            © SocialPlug 2025. All rights reserved.
          </div>
          <Image
            width={316}
            height={24}
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/66292d46e99717b0f56ae2a2_payment-icons-24.svg"
            alt="payments methods"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
