import Image from "next/image";
import { MainButton } from "./Button";

export default function RealTicket() {
  return (
    <section className="w-full bg-black border-b border-white/20">
      <div className="max-w-[1440px] relative w-full py-[20px] pl-[46px] pr-[72px] mx-auto flex justify-between items-center">
        <div className="relative w-[55%] flex gap-[18px] items-center">
          <div className="absolute left-5 bottom-0 w-[80px] h-[70px] rotate-[70deg] bg-[#EB4A674A] opacity-[70%] blur-md z-10" />
          <Image
            src="/img/instagram_beauty.png"
            width={105}
            height={105}
            alt="instagram_beauty"
          />
          <div className="flex flex-col gap-2">
            <p className="font-satoshi font-medium text-[14px] leading-[10px] text-white/70 uppercase">
              Break the algorithm. Get real results.
            </p>
            <p className="font-clash font-semibold text-[32px] leading-[31px] text-white">
              Are you ready to hack the system and get the engagement you
              deserve?
            </p>
          </div>
        </div>
        <MainButton title="See Pricing" className="w-[204px]" />
      </div>
    </section>
  );
}
