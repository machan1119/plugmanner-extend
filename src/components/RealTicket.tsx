import Image from "next/image";
import { MainButton } from "./Button";

export default function RealTicket() {
  return (
    <section className="w-full bg-black border-b border-white/20">
      <div className="max-w-[1440px] relative w-full py-[16px] pl-[12px] pr-[28px] xl:py-[20px] xl:pl-[46px] xl:pr-[72px] mx-auto flex xl:flex-row flex-col gap-[10px] xl:gap-0 items-start xl:justify-between xl:items-center overflow-hidden">
        <div className="relative xl:w-[55%] w-full flex gap-[9px] xl:gap-[18px] items-center z-20">
          <div className="absolute left-5 bottom-0 xl:w-[80px] xl:h-[70px] w-[40px] h-[35px] rotate-[70deg] bg-[#EB4A674A] opacity-[70%] blur-md z-10" />
          <Image
            src="/img/instagram_beauty.png"
            width={105}
            height={105}
            alt="instagram_beauty"
            className="size-[60px] md:size-[90px] xl:size-[120px]"
          />
          <div className="flex flex-col gap-2">
            <p className="font-satoshi font-medium text-[7px] leading-[5px] md:text-[12px] md:leading-[10px] xl:text-[14px] xl:leading-[10px] text-white/70 uppercase">
              Break the algorithm. Get real results.
            </p>
            <p className="font-clash font-semibold text-[16px] leading-[15.5px] md:text-[24px] md:leading-[24px] xl:text-[32px] xl:leading-[31px] text-white">
              Are you ready to hack the system and get the engagement you
              deserve?
            </p>
          </div>
        </div>
        <MainButton
          title="See Pricing"
          className="xl:w-[204px] md:w-[180px] w-[126px] ml-[62px] ml:pl-0 z-20"
        />
        <Image
          src="/img/grid_bg.png"
          width={800}
          height={250}
          alt="grid_bg"
          className="absolute xl:block hidden right-0 z-10 opacity-40 grid-mask"
        />
        <Image
          src="/img/ticket_bg_1.png"
          width={318}
          height={176}
          alt="grid_bg"
          className="absolute xl:block hidden left-[55%] z-20"
        />
        <Image
          src="/img/ticket_bg_2.png"
          width={78}
          height={117}
          alt="grid_bg"
          className="absolute xl:hidden block right-0 z-20"
        />
      </div>
    </section>
  );
}
