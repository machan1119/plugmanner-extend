import React, { memo } from "react";
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
    <div className="min-w-[200px] max-w-[250px] pt-4 border-t border-white/10 sm:border-none sm:pt-0 transition-all duration-300">
      <button className="font-clash leading-[25px] text-[20px] font-semibold flex items-center gap-4 text-white hover:text-primary focus:outline-none focus:text-primary group mb-4 md:mb-8">
        Best Selling Services
      </button>
      <div className="md:flex md:flex-col columns-[200px] gap-4 overflow-hidden max-h-[600px]">
        <div className="w-full flex flex-col gap-4">
          <Link
            className="font-satoshi text-[16px] leading-[11px] font-normal text-white/50 hover:text-primary hover:underline"
            href="/"
          >
            All Services
          </Link>
          {ServicesData.map((subservice, index) => (
            <Link
              className="font-satoshi text-[16px] leading-[20px] font-normal text-white/50 hover:text-primary hover:underline"
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
