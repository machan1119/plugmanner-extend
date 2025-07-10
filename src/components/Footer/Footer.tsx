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
    <section className="w-full bg-black bg-center-top bg-no-repeat bg-[size:400px] sm:bg-[size:500px] md:bg-[size:600px] lg:bg-[size:800px] xl:bg-[size:1234px] bg-[image:url(https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338ebe_footer_bg.webp)]">
      <div className="container-responsive relative pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[48px] xl:pl-[48px] xl:pr-[72px]">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-0 md:grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr_1fr] pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-14 border-solid border-b border-white/40 gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-16">
          <Summary />
          <div className="flex flex-col md:flex-row gap-12 sm:gap-14 md:gap-16 lg:gap-16 xl:gap-16 justify-self-end">
            <SellingService />
            <FreeTool />
          </div>
          <div className="xl:hidden block">
            <Company />
          </div>
          <FollowUs />
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between py-4 sm:py-5 md:py-6 lg:py-6 xl:py-4 text-sm text-white/80 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-2">
          <div className="font-satoshi font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] text-white">
            © SocialPlug 2025. All rights reserved.
          </div>
          <Image
            width={316}
            height={24}
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/66292d46e99717b0f56ae2a2_payment-icons-24.svg"
            alt="payments methods"
            priority={false}
            className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[280px] xl:w-[316px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
