"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LinkedInIcon, TwitterIcon, YoutubeIcon } from "@/libs/SVG";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.youtube.com/@socialplug",
    icon: YoutubeIcon,
    label: "YouTube",
  },
  {
    href: "https://twitter.com/socialplugio",
    icon: TwitterIcon,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/socialplug-io/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
];

export default function FollowUs() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    setEmail("");
  };

  return (
    <div className="border-t border-white/10 pt-4 sm:border-none md:mt-[-300px] sm:border-t sm:border-white/10 md:border-none md:pt-0 lg:mt-0 transition-all duration-300">
      <p className="font-clash mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[25px] lg:leading-[25px] xl:leading-[25px] font-semibold text-white">
        Follow Us
      </p>
      <div className="flex gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="font-clash mt-3 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 leading-5 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-semibold text-white">
        Receive Exclusive Offers
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 sm:px-4 md:px-4 lg:px-4 xl:px-4 py-2.5 sm:py-3 md:py-3 lg:py-3 xl:py-3 leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[22px] xl:leading-[22px] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] rounded-lg bg-white text-black placeholder:text-black/50 focus:outline-none focus:border-primary"
          required
        />
        <button
          className={`rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[8px] xl:rounded-[8px] py-3 sm:py-3.5 md:py-4 lg:py-4 xl:py-4 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 bg-primary font-satoshi font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[10px] sm:leading-[11px] md:leading-[11px] lg:leading-[11px] xl:leading-[11px] text-white hover:bg-accent transition-colors duration-300`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
