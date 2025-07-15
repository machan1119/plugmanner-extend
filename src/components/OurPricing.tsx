import Image from "next/image";

interface PricingCardProps {
  type: string;
  title: string;
  price: string;
  description: string[];
  popular: boolean;
}
const PricingCardData: PricingCardProps[] = [
  {
    type: "STARTER",
    title: "500-1k Followers",
    price: "$29",
    description: [
      "500-1,000 Followers /mo",
      "Engaged, Organic Followers",
      "Start Growing Within 2 Days",
      "Guaranteed Results Or It's Free",
      "Los Angeles Team & Support",
      "Engaged, Organic Followers",
      "Hands Off For You",
    ],
    popular: false,
  },
  {
    type: "Professional",
    title: "2K-5k Followers",
    price: "$79",
    description: [
      "2k-5k Followers /mo",
      "Engaged, Organic Followers",
      "Start Growing Within 2 Days",
      "Guaranteed Results Or It's Free",
      "Los Angeles Team & Support",
      "Engaged, Organic Followers",
      "Hands Off For You",
    ],
    popular: true,
  },
  {
    type: "Authority",
    title: "7.5K-12k Followers",
    price: "$149",
    description: [
      "7.5k-12k Followers /mo",
      "Engaged, Organic Followers",
      "Start Growing Within 2 Days",
      "Guaranteed Results Or It's Free",
      "Los Angeles Team & Support",
      "Engaged, Organic Followers",
      "Hands Off For You",
    ],
    popular: false,
  },
];
export default function OurPricing() {
  return (
    <section className="w-full bg-background-dark">
      <div className="max-w-[1440px] w-full py-10 px-[14px] xl:py-0 xl:px-[80px] xl:pt-[58px] xl:pb-[77px] mx-auto">
        <div className="w-full flex flex-col items-center gap-3 xl:gap-4 mb-6 xl:mb-[48px]">
          <div className="bg-secondary rounded-full py-[14px] px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[14px] leading-[10px] xl:text-[16px] xl:leading-[12px] text-primary tracking-[-1px] mb-2 xl:mb-0">
            Our Pricing
          </div>
          <h2 className="font-h2">
            Choose your
            <span className="text-primary"> growth plan</span>
          </h2>
          <p className="xl:w-[30%] w-[80%] font-satoshi font-normal xl:text-[16px] text-[14px] leading-[18px] text-black text-center">
            Pick a plan that fits your goals and start growing today—no password
            needed.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 items-center justify-center">
          {PricingCardData.map((item, index) => (
            <PricingCard
              type={item.type}
              title={item.title}
              price={item.price}
              description={item.description}
              popular={item.popular}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  type,
  title,
  price,
  description,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`${
        popular ? "bg-black" : "bg-white"
      } relative xl:w-[410px] xl:h-[618px] rounded-[16px] border border-light-border flex flex-col gap-6 p-6`}
    >
      <div
        className={`${
          popular ? "block" : "hidden"
        } absolute top-2 right-2 py-[7px] px-[10px] rounded-full bg-white font-satoshi font-medium text-[14px] leading-[18px] text-black`}
      >
        Most popular
      </div>
      <div className="flex flex-col gap-3">
        <p
          className={`font-satoshi font-bold text-[16px] leading-[22px] xl:text-[20px] xl:leading-[27px] uppercase ${
            popular ? "text-white" : "text-black"
          }`}
        >
          {type}
        </p>
        <p
          className={`font-clash font-semibold xl:text-[32px] text-[28px] leading-[40px] ${
            popular ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </p>
        <p
          className={`font-satoshi font-bold text-[40px] leading-[44px] xl:text-[54px] xl:leading-[59px] ${
            popular ? "text-white" : "text-black"
          }`}
        >
          {price}
          <span className="font-satoshi font-medium text-[20px] leading-[29px] text-text-gray">
            {" "}
            /Month
          </span>
        </p>
      </div>
      <div
        className={`w-full h-[1px] ${popular ? "bg-white/30" : "bg-black/30"}`}
      />
      <div className="flex flex-col gap-4">
        {description.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Image
              src={
                popular ? "/img/pricing_tick_2.png" : "/img/pricing_tick_1.png"
              }
              width={24}
              height={24}
              alt="pricing_tick"
            />
            <p
              className={`font-satoshi font-medium text-[16px] leading-[22px] ${
                popular ? "text-white" : "text-black"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <button className="w-full rounded-[8px] py-3 bg-primary hover:bg-[#007645] active:bg-primary/50 font-clash font-semibold text-[20px] text-white leading-[25px]">
          Get Started
        </button>
        <Image
          src="/img/payments.png"
          width={287}
          height={20}
          alt="payment_methods"
        />
      </div>
    </div>
  );
}
