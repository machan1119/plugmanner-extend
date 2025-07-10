import Image from "next/image";
import { MainButton } from "./Button";

export default function RealTicket() {
  return (
    <section className="w-full bg-black border-b border-white/20">
      <div className="container-responsive relative py-4 sm:py-5 md:py-6 lg:py-8 xl:py-[20px] flex flex-col lg:flex-row xl:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-0 xl:gap-0 items-start lg:justify-between xl:justify-between lg:items-center xl:items-center overflow-hidden">
        <div className="relative w-full lg:w-[60%] xl:w-[55%] flex gap-[9px] sm:gap-[12px] md:gap-[15px] lg:gap-[18px] xl:gap-[18px] items-center z-20">
          <div className="absolute left-3 sm:left-4 md:left-5 lg:left-5 xl:left-5 bottom-0 w-[30px] sm:w-[35px] md:w-[40px] lg:w-[60px] xl:w-[80px] h-[26px] sm:h-[30px] md:h-[35px] lg:h-[52px] xl:h-[70px] rotate-[70deg] bg-[#EB4A674A] opacity-[70%] blur-md z-10" />
          <Image
            src="/img/instagram_beauty.png"
            width={105}
            height={105}
            alt="instagram_beauty"
            className="size-[40px] sm:size-[45px] md:size-[50px] lg:size-[70px] xl:size-[105px]"
          />
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
            <p className="font-satoshi font-medium text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] leading-[5px] sm:leading-[6px] md:leading-[8px] lg:leading-[9px] xl:leading-[10px] text-white/70 uppercase">
              Break the algorithm. Get real results.
            </p>
            <p className="font-clash font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[32px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] xl:leading-[31px] text-white">
              Are you ready to hack the system and get the engagement you
              deserve?
            </p>
          </div>
        </div>
        <MainButton
          title="See Pricing"
          className="w-[100px] sm:w-[110px] md:w-[120px] lg:w-[180px] xl:w-[204px] ml-[40px] sm:ml-[45px] md:ml-[50px] lg:ml-0 xl:ml-0 z-20"
        />
        <Image
          src="/img/grid_bg.png"
          width={800}
          height={250}
          alt="grid_bg"
          className="absolute right-0 z-10 opacity-40 grid-mask w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto hidden lg:block"
        />
        <Image
          src="/img/ticket_bg_1.png"
          width={318}
          height={176}
          alt="grid_bg"
          className="absolute left-[55%] z-20 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[318px] h-auto hidden lg:block"
        />
        <Image
          src="/img/ticket_bg_2.png"
          width={78}
          height={117}
          alt="grid_bg"
          className="absolute right-0 z-20 w-[50px] sm:w-[60px] md:w-[70px] lg:w-[78px] xl:w-[78px] h-auto lg:hidden"
        />
      </div>
    </section>
  );
}
