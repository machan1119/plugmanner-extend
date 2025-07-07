import Image from "next/image";

const TopMediaImgURLs = [
  "/img/media_img_1.png",
  "/img/media_img_2.png",
  "/img/media_img_3.png",
  "/img/media_img_4.png",
  "/img/media_img_5.png",
  "/img/media_img_6.png",
];

export default function TopMedia() {
  return (
    <section className="w-full bg-background-dark">
      <div className="max-w-[1440px] w-full px-[72px] pt-[24px] mx-auto">
        <div className="relative bg-black border border-light-border w-full rounded-[16px] py-[27px] px-[32px] flex gap-8 items-center overflow-hidden">
          <Image
            src="/img/instagram_3D.png"
            width={122}
            height={122}
            alt="instagram_3D"
            className="z-20"
          />
          <div className="absolute left-0 w-[205px] h-[140px] rotate-[-15.52deg] bg-[#FFF080] opacity-[26%] blur-xl z-10"></div>
          <div className="flex flex-col gap-4 w-[50%]">
            <p className="font-clash font-semibold text-[32px] leading-[31px] bg-gradient-to-r from-[#F09819] to-[#EDDE5D] text-transparent bg-clip-text inline-block">
              Guaranteed Results
              <span className="text-white"> or it's Free!</span>
            </p>
            <p className="font-satoshi font-medium text-[18px] text-white opacity-80 leading-[18px]">
              The risk is on us. Try our service for 90 days — if your account
              doesn’t grow, we’ll give you a full refund. No questions asked.
            </p>
          </div>
          <Image
            src="/img/dot_small_bg.png"
            width={1210}
            height={166}
            alt="dot_small_bg"
            className="absolute right-0 top-0"
          />
          <Image
            src="/img/cable.png"
            width={136}
            height={176}
            alt="dot_small_bg"
            className="absolute right-[58px] top-[38px]"
          />
        </div>
        <div className="flex flex-col gap-7 p-10 items-center">
          <p className="font-satoshi font-medium text-[20px] text-black opacity-50 uppercase">
            Featured in Top Media
          </p>
          <div className="flex gap-[52px] items-center">
            {TopMediaImgURLs.map((item, index) => (
              <Image
                src={item}
                width={175}
                height={28}
                alt="top_media_img"
                className="w-full"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
