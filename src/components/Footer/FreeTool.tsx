import React from "react";
import Link from "next/link";

interface ToolLink {
  label: string;
  href: string;
  isFree?: boolean;
}

interface SectionProps {
  type: string;
  title: string;
  links: ToolLink[];
}

function Section({ type, title, links }: SectionProps) {
  const selected_links = type == "free_tools" ? links.slice(0, 3) : links;
  return (
    <div>
      <button
        className="font-clash mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 leading-5 text-[16px] sm:text-[18px] md:text-xl lg:text-xl xl:text-xl font-semibold text-left flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 text-white hover:text-primary focus:outline-none focus:text-primary group transition-colors duration-300"
        tabIndex={0}
      >
        <span>{title}</span>
      </button>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 transition-all duration-300 ease-in-out max-h-[500px]">
        {selected_links.map((link) => (
          <Link
            key={link.label}
            aria-label={link.label}
            href={link.href}
            className="font-satoshi font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[20px] xl:leading-[20px] tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] lg:tracking-[-1px] xl:tracking-[-1px] text-white/50 hover:text-primary hover:underline flex items-center gap-2 transition-colors duration-300"
          >
            <span>
              {link.label}{" "}
              {link.isFree && (
                <span className="font-satoshi bg-primary rounded-full text-black px-1.5 sm:px-2 md:px-2 lg:px-2 xl:px-2 py-0.5 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] xl:text-[12px] font-medium group-hover:bg-secondary transition-colors duration-300">
                  Free
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FreeTool() {
  const quickLinks: ToolLink[] = [
    {
      label: "Contact Us",
      href: "https://panel.socialplug.io/contact/helpdesk?_gl=1*1ai26oe*_ga*MTM5OTE1MzUyOS4xNzM4OTI3NTYx*_ga_2W3R0LJ26C*MTczODk1Nzg4OC4zLjAuMTczODk1Nzg4OC4wLjAuMA..",
    },
    {
      label: "Affiliate Program",
      href: "https://www.socialplug.io/affiliate-program",
    },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "https://www.socialplug.io/about-us" },
    { label: "Privacy Policy", href: "https://www.socialplug.io/about-us" },
    {
      label: "Terms & Conditions",
      href: "https://www.socialplug.io/terms-of-services-privacy-policy",
    },
  ];
  const freeTools: ToolLink[] = [
    {
      label: "Youtube Video Downloader",
      href: "/",
      isFree: true,
    },
    {
      label: "Instagram Username Checker",
      href: "/",
      isFree: true,
    },
    {
      label: "Twitter Username Checker",
      href: "/",
      isFree: true,
    },
  ];

  return (
    <div className="w-full xl:w-[175px] grid grid-cols-2 gap-4 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5 xl:flex xl:flex-col">
      <Section type="quick_links" title="Quick Links" links={quickLinks} />
      <Section type="free_tools" title="Free Tools" links={freeTools} />
    </div>
  );
}
