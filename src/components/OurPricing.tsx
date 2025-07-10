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
      <div className="container-responsive py-10 sm:py-12 md:py-16 lg:py-20 xl:py-0 xl:pt-[58px] xl:pb-[77px]">
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-[48px]">
          <div className="bg-secondary rounded-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[14px] xl:py-[14px] px-4 sm:px-4 md:px-5 lg:px-5 xl:px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[10px] sm:leading-[11px] md:leading-[11px] lg:leading-[12px] xl:leading-[12px] text-primary tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] lg:tracking-[-1px] xl:tracking-[-1px] mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-0">
            Our Pricing
          </div>
          <h2 className="font-h2 text-center">
            Choose your
            <span className="text-primary"> growth plan</span>
          </h2>
          <p className="w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[30%] font-body text-center">
            Pick a plan that fits your goals and start growing today—no password
            needed.
          </p>
        </div>
        <div className="grid-responsive-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-6">
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
      } relative w-full h-auto min-h-[500px] sm:min-h-[550px] md:min-h-[580px] lg:min-h-[600px] xl:w-[410px] xl:h-[618px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[16px] xl:rounded-[16px] border border-light-border flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-6`}
    >
      <div
        className={`${
          popular ? "block" : "hidden"
        } absolute top-2 right-2 py-[6px] sm:py-[7px] px-[8px] sm:px-[10px] rounded-full bg-white font-satoshi font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[14px] leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] text-black`}
      >
        Most popular
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3">
        <p
          className={`font-satoshi font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[22px] lg:leading-[24px] xl:leading-[27px] uppercase ${
            popular ? "text-white" : "text-black"
          }`}
        >
          {type}
        </p>
        <p
          className={`font-clash font-semibold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[30px] sm:leading-[32px] md:leading-[35px] lg:leading-[38px] xl:leading-[39px] ${
            popular ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </p>
        <p
          className={`font-satoshi font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[46px] xl:text-[54px] leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[50px] xl:leading-[59px] ${
            popular ? "text-white" : "text-black"
          }`}
        >
          {price}
          <span className="font-satoshi font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-[24px] sm:leading-[25px] md:leading-[26px] lg:leading-[27px] xl:leading-[29px] text-text-gray">
            {" "}
            /Month
          </span>
        </p>
      </div>
      <div
        className={`w-full h-[1px] ${popular ? "bg-white/30" : "bg-black/30"}`}
      />
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4">
        {description.map((item, index) => (
          <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-2" key={index}>
            <Image
              src={
                popular ? "/img/pricing_tick_2.png" : "/img/pricing_tick_1.png"
              }
              width={24}
              height={24}
              alt="pricing_tick"
              className="size-[20px] sm:size-[22px] md:size-[24px] lg:size-[24px] xl:size-[24px]"
            />
            <p
              className={`font-satoshi font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[22px] xl:leading-[22px] ${
                popular ? "text-white" : "text-black"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-3 items-center mt-auto">
        <button className="w-full rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[8px] xl:rounded-[8px] py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 bg-primary font-clash font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] text-white leading-[20px] sm:leading-[22px] md:leading-[25px] lg:leading-[25px] xl:leading-[25px]">
          Get Started
        </button>
        <Image
          src="/img/payments.png"
          width={287}
          height={20}
          alt="payment_methods"
          className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[287px] h-auto"
        />
      </div>
    </div>
  );
}
