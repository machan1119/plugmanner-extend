"use client";
import React, { memo, useState } from "react";
import Link from "next/link";
import { LinkedInIcon, TwitterIcon, YoutubeIcon } from "@/libs/SVG";
import { MainButton } from "../Button";

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
      <p className="font-clash mb-4 text-[20px] leading-[25px] font-semibold text-white">
        Follow Us
      </p>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            className="hover:text-primary"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="font-clash mt-4 mb-4 leading-5 text-[20px] font-semibold text-white">
        Receive Exclusive Offers
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 leading-[22px] text-[15px] rounded-lg bg-white text-black placeholder:text-black/50 focus:outline-none focus:border-primary"
          required
        />
        <button
          className={`rounded-[8px] py-4 px-6 bg-primary font-satoshi font-normal text-[16px] leading-[11px] text-white`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
