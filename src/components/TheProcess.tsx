import Image from "next/image";

export default function TheProcess() {
  const HowTo = [
    {
      icon: "/img/process_step_1.png",
      title: "Choose your Plan",
      description:
        "Choose the growth plan that fits your goals. No password or account access required.",
    },
    {
      icon: "/img/process_step_2.png",
      title: "We add Quality Followers",
      description:
        "We add quality followers who engage. No bots—just real people in your niche.",
    },
    {
      icon: "/img/process_step_3.png",
      title: "Multiply Your Wins",
      description:
        "More credibility brings more growth, better clients, and real results.",
    },
  ];

  return (
    <section className="w-full bg-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-[36px]">
      <div className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[48px]">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-[70px]">
          <div className="bg-secondary rounded-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[14px] xl:py-[14px] px-4 sm:px-4 md:px-5 lg:px-5 xl:px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[10px] sm:leading-[11px] md:leading-[11px] lg:leading-[12px] xl:leading-[12px] text-primary tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] lg:tracking-[-1px] xl:tracking-[-1px] mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-0">
            The Process
          </div>
          <h2 className="font-h2 text-center">
            How It Actually
            <span className="text-primary"> Works?</span>
          </h2>
          <p className="w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[25%] font-body text-center">
            Here&#39;s how it works—simple, quick, and hassle-free to get
            started with our social media services.
          </p>
        </div>
        <div className="w-full relative">
          <Image
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e65_how-to-order_desktop-line-bg.svg"
            alt="Order steps"
            width={100}
            height={100}
            className="absolute top-[10%] left-[20%] w-[60%] hidden lg:block"
          />
          <div className="w-full flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-5 xl:gap-5">
            {HowTo.map((item, index) => (
              <ProcessStep
                icon={item.icon}
                title={item.title}
                description={item.description}
                key={index}
                count={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
  count: number;
}

function ProcessStep({ icon, title, description, count }: ProcessStepProps) {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-[42px] h-full items-center relative bg-white/5 rounded-lg sm:rounded-xl lg:rounded-xl xl:rounded-lg p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 hover:bg-white/10 transition-all duration-300">
      <Image
        width={220}
        height={220}
        src={icon}
        alt={`${title} illustration`}
        loading="lazy"
        className="w-[150px] sm:w-[170px] md:w-[190px] lg:w-[200px] xl:w-[220px] h-auto shadow-2xl"
      />
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-2 items-center">
        <div className="bg-black rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[8px] xl:rounded-[8px] flex justify-center items-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 font-clash text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[30px] font-semibold text-primary leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[37px] xl:leading-[37px] mb-2">
          {count + 1}
        </div>
        <h3 className="font-clash font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-[20px] sm:leading-[22px] md:leading-[25px] lg:leading-[30px] xl:leading-[39px] text-black text-center">
          {title}
        </h3>
        <p className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] xl:w-[80%] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-center leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-6 font-satoshi font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
