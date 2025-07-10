import React from "react";
import Link from "next/link";

interface ServicesDataType {
  label: string;
  href: string;
}

const ServicesData: ServicesDataType[] = [
  {
    label: "Buy Twitter (X) Followers",
    href: "/",
  },
  {
    label: "Buy Instagram Followers",
    href: "/",
  },
  {
    label: "Buy Instagram Followers",
    href: "/",
  },
  {
    label: "Buy Reddit Upvotes",
    href: "/",
  },
  {
    label: "Buy Twitter Likes",
    href: "/",
  },
  {
    label: "Buy LinkedIn Followers",
    href: "/",
  },
  {
    label: "Buy Spotify Streams",
    href: "/",
  },
  {
    label: "Buy Spotify Followers",
    href: "/",
  },
  {
    label: "Buy Youtube Subscribers",
    href: "/",
  },
  {
    label: "Buy Youtbe Views",
    href: "/",
  },
  {
    label: "Buy Telegram Members",
    href: "/",
  },
];

export default function SellingService() {
  return (
    <div className="min-w-[200px] w-full xl:max-w-[250px] pt-4 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-4 border-t border-white/10 sm:border-none sm:pt-0 transition-all duration-300">
      <button className="font-clash leading-[20px] sm:leading-[22px] md:leading-[25px] lg:leading-[25px] xl:leading-[25px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-semibold flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 text-white hover:text-primary focus:outline-none focus:text-primary group mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-8">
        Best Selling Services
      </button>
      <div className="md:flex md:flex-col columns-[200px] gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 overflow-hidden w-full xl:max-h-[600px]">
        <div className="w-full grid xl:grid-cols-1 grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4">
          <Link
            className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[10px] sm:leading-[11px] md:leading-[11px] lg:leading-[11px] xl:leading-[11px] font-normal text-white/50 hover:text-primary hover:underline transition-colors duration-300"
            href="/"
          >
            All Services
          </Link>
          {ServicesData.map((subservice, index) => (
            <Link
              className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[20px] xl:leading-[20px] font-normal text-white/50 hover:text-primary hover:underline transition-colors duration-300"
              href={subservice.href}
              key={index}
            >
              {subservice.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
