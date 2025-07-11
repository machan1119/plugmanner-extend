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
        className="font-clash mb-4 leading-5 text-xl font-semibold text-left flex items-center gap-4 text-white hover:text-primary focus:outline-none focus:text-primary group lg:mb-4"
        tabIndex={0}
      >
        <span>{title}</span>
      </button>
      <div className="flex flex-col gap-4 transition-all duration-300 ease-in-out max-h-[500px]">
        {selected_links.map((link) => (
          <Link
            key={link.label}
            aria-label={link.label}
            href={link.href}
            className="font-satoshi font-normal text-[16px] leading-[20px] tracking-[-1px] text-white/50 hover:text-primary hover:underline flex items-center gap-2"
          >
            <span>
              {link.label}{" "}
              {link.isFree && (
                <span className="font-satoshi bg-primary rounded-full text-black px-2 py-0.5 text-[12px] font-medium group-hover:bg-secondary">
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
    <div className="w-full md:w-[40%] xl:w-[175px] grid grid-cols-2 gap-5 xl:flex xl:flex-col">
      <Section type="quick_links" title="Quick Links" links={quickLinks} />
      <Section type="free_tools" title="Free Tools" links={freeTools} />
    </div>
  );
}
