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
      <div className="max-w-[1440px] w-full xl:px-[72px] xl:pt-[24px] mx-auto">
        <div className="relative bg-black border border-light-border w-full xl:rounded-[16px] py-[13.5px] px-[16px] xl:py-[27px] xl:px-[32px] flex gap-4 xl:gap-8 items-center overflow-hidden">
          <Image
            src="/img/instagram_3d.png"
            width={122}
            height={122}
            alt="instagram_3D"
            className="z-20 size-[61px] md:size-[80px] xl:size-[122px]"
          />
          <Image
            src="/img/golden_light.png"
            width={570}
            height={175}
            alt="golden_light"
            className="absolute xl:right-0 right-[-50px] xl:w-[570px] xl:h-[175px] w-[285px] h-[87.5px]"
          />
          <div className="absolute left-0 w-[102.5px] h-[70px] xl:w-[205px] xl:h-[140px] rotate-[-15.52deg] bg-[#FFF080] opacity-[26%] blur-xl z-10" />
          <div className="flex flex-col gap-4 xl:w-[50%]">
            <p className="font-clash font-semibold text-[16px] leading-[15.5px] md:text-[24px] md:leading-[22px] xl:text-[32px] xl:leading-[31px] bg-gradient-to-r from-[#F09819] to-[#EDDE5D] text-transparent bg-clip-text inline-block">
              Guaranteed Results
              <span className="text-white"> or it&#39;s Free!</span>
            </p>
            <p className="w-[90%] xl:w-[100%] font-satoshi font-medium text-[9px] leading-[9.5px] md:text-[14px] md:leading-[15px] xl:text-[18px] xl:leading-[18px] text-white/80">
              The risk is on us. Try our service for 90 days — if your account
              doesn&#39;t grow, we&#39;ll give you a full refund. No questions
              asked.
            </p>
          </div>
          <Image
            src="/img/dot_small_bg.png"
            width={1210}
            height={166}
            alt="dot_small_bg"
            className="absolute right-0 top-0 xl:w-[1210px] xl:h-[166px] w-[605px] h-[83px]"
          />
          <Image
            src="/img/cable.png"
            width={136}
            height={176}
            alt="dot_small_bg"
            className="absolute right-[58px] top-[38px] hidden xl:block"
          />
        </div>
        <div className="flex flex-col gap-7 px-4 py-6 xl:p-10 items-center">
          <p className="font-satoshi font-medium text-[16px] md:text-[18px] xl:text-[20px] text-black/50 uppercase">
            Featured in Top Media
          </p>
          <div className="hidden lg:flex justify-between gap-5 xl:gap-[52px] items-center">
            {TopMediaImgURLs.map((item, index) => (
              <Image
                src={item}
                width={175}
                height={28}
                alt="top_media_img"
                className="xl:size-full size-[40%]"
                key={index}
              />
            ))}
          </div>
          <div className="lg:hidden flex flex-col gap-5">
            <div className="flex justify-between gap-5 items-center">
              {TopMediaImgURLs.slice(0, 3).map((item, index) => (
                <div className="h-[20px]" key={index}>
                  <Image
                    src={item}
                    width={175}
                    height={28}
                    alt="top_media_img"
                    className="size-full"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-5 items-center">
              {TopMediaImgURLs.slice(3, 6).map((item, index) => (
                <div className="h-[20px]" key={index}>
                  <Image
                    src={item}
                    width={175}
                    height={28}
                    alt="top_media_img"
                    className="size-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
