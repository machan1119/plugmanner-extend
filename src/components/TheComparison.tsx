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
      <div className="container-responsive py-10 sm:py-12 md:py-16 lg:py-20 xl:pt-[42px] xl:pb-[82px]">
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-[57px]">
          <div className="bg-secondary rounded-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[14px] xl:py-[14px] px-4 sm:px-4 md:px-5 lg:px-5 xl:px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[10px] sm:leading-[11px] md:leading-[11px] lg:leading-[12px] xl:leading-[12px] text-primary tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] lg:tracking-[-1px] xl:tracking-[-1px] mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-0">
            The Comparison
          </div>
          <h2 className="font-h2 text-center">
            Social
            <span className="text-primary">plug </span>
            compared to others
          </h2>
          <p className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[50%] font-body text-center">
            See who dominated last month! 🚀 Explore our top-performing
            affiliates and get inspired to boost your earnings.
          </p>
        </div>
        <div className="relative w-full flex flex-col bg-white/50 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[16px] xl:rounded-[16px] border-[2px] border-white p-3 sm:p-4 md:p-5 lg:p-6 xl:px-[30px] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[40px] xl:pt-[18px] xl:pb-[55px]">
          <div className="w-full flex z-20">
            <p className="w-[35%] sm:w-[37%] md:w-[38%] lg:w-[39%] xl:w-[40%]"></p>
            <div className="w-[25%] sm:w-[23%] md:w-[22%] lg:w-[21%] xl:w-[20%] mx-auto flex justify-center">
              <Image
                src="/img/title_logo.png"
                width={164}
                height={32}
                alt="title_logo"
                className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] xl:w-[164px] h-auto"
              />
            </div>
            <p className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%] px-2 sm:px-3 md:px-4 lg:px-0 xl:px-0 mx-auto font-clash font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] xl:leading-[25px] text-black text-center">
              Other Instagram Growth Business
            </p>
          </div>
          <div className="mt-[5px] sm:mt-[8px] md:mt-[12px] lg:mt-[20px] xl:mt-[33px] mb-[13px] sm:mb-[15px] md:mb-[18px] lg:mb-[25px] xl:mb-[13px] border border-black-border w-full" />
          <div className="flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px] lg:gap-[22px] xl:gap-[26px] z-20">
            {TheCompareData.map((item, index) => (
              <CompareTableRow
                description={item.description}
                socialplug={item.socialplug}
                other={item.other}
                key={index}
              />
            ))}
          </div>
          <div className="absolute bottom-[13.5px] sm:bottom-[16px] md:bottom-[20px] lg:bottom-[25px] xl:bottom-[27px] w-[25%] sm:w-[23%] md:w-[22%] lg:w-[21%] xl:w-[20%] h-full left-[35%] sm:left-[37%] md:left-[38%] lg:left-[39%] xl:left-[40%] bg-black rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] z-10" />
        </div>
      </div>
    </section>
  );
}

function CompareTableRow({ description, socialplug, other }: TheCompareProps) {
  return (
    <div className="w-full flex items-center">
      <p className="w-[35%] sm:w-[37%] md:w-[38%] lg:w-[39%] xl:w-[40%] pr-[20px] sm:pr-[25px] md:pr-[30px] lg:pr-[32px] xl:pr-0 xl:pl-[35px] font-satoshi font-bold text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[20px] leading-[10px] sm:leading-[12px] md:leading-[14px] lg:leading-[18px] xl:leading-[28px] text-black">
        {description}
      </p>
      <div className="w-[25%] sm:w-[23%] md:w-[22%] lg:w-[21%] xl:w-[20%] mx-auto flex justify-center">
        <Image
          src={`${
            socialplug ? "/img/compare_true.png" : "/img/compare_false.png"
          }`}
          width={35}
          height={35}
          alt={`${socialplug}`}
          className="size-[16px] sm:size-[18px] md:size-[22px] lg:size-[28px] xl:size-[35px]"
        />
      </div>
      <div className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%] mx-auto flex justify-center">
        <Image
          src={`${other ? "/img/compare_true.png" : "/img/compare_false.png"}`}
          width={35}
          height={35}
          alt={`${other}`}
          className="size-[16px] sm:size-[18px] md:size-[22px] lg:size-[28px] xl:size-[35px]"
        />
      </div>
    </div>
  );
}
