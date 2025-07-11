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
    <section className="w-full bg-white xl:mb-[36px] mb-[14px]">
      <div className="max-w-[1440px] w-full py-[32px] px-[14px] xl:px-0 xl:py-[48px] mx-auto">
        <div className="flex flex-col items-center gap-3 xl:gap-4 xl:mb-[70px] mb-[32px]">
          <div className="bg-secondary rounded-full py-[14px] px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[14px] leading-[10px] xl:text-[16px] xl:leading-[12px] text-primary tracking-[-1px] mb-2 xl:mb-0">
            The Process
          </div>
          <h2 className="font-h2">
            How It Actually
            <span className="text-primary"> Works?</span>
          </h2>
          <p className="xl:w-[25%] w-[85%] font-satoshi font-normal xl:text-[16px] text-[14px] leading-[18px] text-black xl:text-black/70 text-center">
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
            className="absolute top-[10%] left-[20%] w-[60%] hidden xl:block"
          />
          <div className="w-full flex md:flex-row flex-col gap-[64px] xl:gap-5">
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
    <div className="w-full flex flex-col gap-8 xl:gap-[42px] h-full items-center relative bg-white/5 rounded-lg xl:p-6 hover:bg-white/10">
      <Image
        width={220}
        height={220}
        src={icon}
        alt={`${title} illustration`}
        loading="lazy"
        className="shadow-2xl"
      />
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-black rounded-[8px] flex justify-center items-center w-12 h-12 font-clash text-[30px] font-semibold text-primary leading-[37px] mb-2">
          {count + 1}
        </div>
        <h3 className="font-clash font-semibold xl:text-[32px] xl:leading-[39px] text-[20px] leading-[25px] text-black text-center">
          {title}
        </h3>
        <p className="w-[80%] text-black text-[16px] text-center leading-6 font-satoshi font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
