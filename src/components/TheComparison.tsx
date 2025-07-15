import { False_Icon, True_Icon } from "@/libs/SVG";
import Image from "next/image";

const TheCompareData = [
  {
    description: "Real, Authentic Followers",
    socialplug: true,
    other: false,
  },
  {
    description: "Shadowban proof",
    socialplug: true,
    other: false,
  },
  {
    description: "No login required",
    socialplug: true,
    other: false,
  },
  {
    description: "See growth Instantly",
    socialplug: true,
    other: false,
  },
  {
    description: "Guaranteed results or it's free",
    socialplug: true,
    other: false,
  },
  {
    description: "Overpriced",
    socialplug: false,
    other: true,
  },
];

interface TheCompareProps {
  description: string;
  socialplug: boolean;
  other: boolean;
}

export default function TheComparison() {
  return (
    <section className="w-full bg-background-dark">
      <div className="max-w-[1440px] w-full px-[11px] pt-[42px] pb-[47px] xl:pb-[82px] xl:px-[160px] mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-3 xl:gap-4 mb-10 xl:mb-[57px]">
          <div className="bg-secondary rounded-full py-[14px] px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[14px] leading-[10px] xl:text-[16px] xl:leading-[12px] text-primary tracking-[-1px] xl:mb-0 mb-3">
            The Comparison
          </div>
          <h2 className="font-h2">
            Social
            <span className="text-primary">plug </span>
            compared to others
          </h2>
          <p className="xl:w-[50%] w-[100%] font-satoshi font-normal xl:text-[16px] text-[14px] leading-[18px] text-black text-center">
            See who dominated last month! 🚀 Explore our top-performing
            affiliates and get inspired to boost your earnings.
          </p>
        </div>
        <div className="relative w-full md:w-[80%] xl:w-full flex flex-col bg-white/50 rounded-[16px] border-[2px] border-white p-3 pb-[20px] xl:px-[30px] xl:pt-[18px] xl:pb-[55px]">
          <div className="w-full flex z-20">
            <p className="xl:w-[40%] w-[35%]"></p>
            <div className="xl:w-[20%] w-[25%] mx-auto flex justify-center">
              <Image
                src="/img/title_logo.png"
                width={164}
                height={32}
                alt="title_logo"
                className="xl:w-[164px] xl:h-[32px] md:w-[123px] md:h-[24px] w-[82px] h-[16px]"
              />
            </div>
            <p className="w-[40%] px-2 xl:px-0 mx-auto font-clash font-semibold text-[12px] leading-[15px] md:text-[16px] md:leading-[18px] xl:text-[20px] xl:leading-[25px] text-black text-center">
              Other Instagram Growth Business
            </p>
          </div>
          <div className="xl:mt-[33px] mt-[5px] mb-[13px] border border-black-border w-full" />
          <div className="flex flex-col gap-[18px] xl:gap-[26px] z-20">
            {TheCompareData.map((item, index) => (
              <CompareTableRow
                description={item.description}
                socialplug={item.socialplug}
                other={item.other}
                key={index}
              />
            ))}
          </div>
          <div className="absolute bottom-[13.5px] xl:bottom-[27px] xl:w-[20%] w-[25%] h-full left-[35%] xl:left-[40%] bg-black rounded-[20px] z-10" />
        </div>
      </div>
    </section>
  );
}

function CompareTableRow({ description, socialplug, other }: TheCompareProps) {
  return (
    <div className="w-full flex items-center">
      <p className="xl:w-[40%] w-[35%] pr-[34px] xl:pr-0 xl:pl-[35px] font-satoshi font-bold text-[11px] leading-[11px] md:text-[16px] md:leading-[16px] xl:text-[20px] xl:leading-[28px] text-black">
        {description}
      </p>
      <div className="xl:w-[20%] w-[25%] mx-auto flex justify-center">
        <div className="xl:size-[35px] md:size-7 size-[20px]">
          {socialplug ? True_Icon : False_Icon}
        </div>
      </div>
      <div className="w-[40%] mx-auto flex justify-center">
        <div className="xl:size-[35px] md:size-7 size-[20px]">
          {other ? True_Icon : False_Icon}
        </div>
      </div>
    </div>
  );
}
