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
    description: "Guaranteed results or it’s free",
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
      <div className="max-w-[1440px] w-full pt-[42px] pb-[82px] px-[160px] mx-auto">
        <div className="w-full flex flex-col items-center gap-4 mb-[57px]">
          <div className="bg-secondary rounded-full py-[14px] px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[16px] leading-[12px] text-primary tracking-[-1px]">
            The Comparison
          </div>
          <h2 className="font-h2">
            Social
            <span className="text-[32px] text-primary">plug</span>
            compared to others
          </h2>
          <p className="w-[50%] font-satoshi font-normal text-[16px] leading-[18px] text-black text-center">
            See who dominated last month! 🚀 Explore our top-performing
            affiliates and get inspired to boost your earnings.
          </p>
        </div>
        <div className="relative w-full flex flex-col bg-white/50 rounded-[16px] border-[2px] border-white px-[30px] pt-[18px] pb-[55px]">
          <div className="w-full flex z-20">
            <p className="w-[40%]"></p>
            <div className="w-[20%] mx-auto flex justify-center">
              <Image
                src="/img/title_logo.png"
                width={164}
                height={32}
                alt="title_logo"
              />
            </div>
            <p className="w-[40%] mx-auto font-clash font-semibold text-[20px] leading-[25px] text-black text-center">
              Other Instagram Growth Business
            </p>
          </div>
          <div className="mt-[33px] border border-black-border w-full mb-[13px]" />
          <div className="flex flex-col gap-[26px] z-20">
            {TheCompareData.map((item, index) => (
              <CompareTableRow
                description={item.description}
                socialplug={item.socialplug}
                other={item.other}
                key={index}
              />
            ))}
          </div>
          <div className="absolute bottom-[27px] w-[218px] h-[490px] left-[40%] bg-black rounded-[20px] z-10" />
        </div>
      </div>
    </section>
  );
}

function CompareTableRow({ description, socialplug, other }: TheCompareProps) {
  return (
    <div className="w-full flex items-center">
      <p className="w-[40%] pl-[35px] font-satoshi font-bold text-[20px] text-black leading-[28px]">
        {description}
      </p>
      <div className="w-[20%] mx-auto flex justify-center">
        <Image
          src={`${
            socialplug ? "/img/compare_true.png" : "/img/compare_false.png"
          }`}
          width={35}
          height={35}
          alt={`${socialplug}`}
        />
      </div>
      <div className="w-[40%] mx-auto flex justify-center">
        <Image
          src={`${other ? "/img/compare_true.png" : "/img/compare_false.png"}`}
          width={35}
          height={35}
          alt={`${other}`}
        />
      </div>
    </div>
  );
}
