"use client";
import React from "react";
import FollowUs from "./Followus";
import Summary from "./Summary";
import SellingService from "./SellingService";
import FreeTool from "./FreeTool";
import Image from "next/image";
import Company from "./Company";

export default function Footer() {
  return (
    <section className="w-full bg-black bg-center-top bg-no-repeat bg-[size:600px] xl:bg-[size:1234px] bg-[image:url(https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338ebe_footer_bg.webp)]">
      <div className="relative max-w-[1440px] w-full px-4 pt-[43px] xl:px-0 xl:pt-[48px] xl:pl-[48px] xl:pr-[72px] mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between gap-10 pb-14 border-solid border-b border-white/40 gap-x-8 md:gap-x-16">
          <div className="flex flex-col md:flex-row xl:w-[60%] md:w-full justify-between md:gap-8">
            <Summary />
            <SellingService />
          </div>
          <div className="flex flex-col md:flex-row xl:w-[40%] md:w-full justify-between md:gap-8">
            <FreeTool />
            <FollowUs />
          </div>
          <div className="xl:hidden flex flex-col">
            <Company />
          </div>
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
