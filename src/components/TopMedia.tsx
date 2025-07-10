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
      <div className="container-responsive pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-[24px]">
        <div className="relative bg-black border border-light-border w-full rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[16px] xl:rounded-[16px] py-[13.5px] sm:py-[18px] md:py-[22px] lg:py-[25px] xl:py-[27px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 items-center overflow-hidden">
          <Image
            src="/img/instagram_3d.png"
            width={122}
            height={122}
            alt="instagram_3D"
            className="z-20 size-[50px] sm:size-[55px] md:size-[60px] lg:size-[80px] xl:size-[122px]"
          />
          <Image
            src="/img/golden_light.png"
            width={570}
            height={175}
            alt="golden_light"
            className="absolute right-[-30px] sm:right-[-40px] md:right-[-45px] lg:right-[-50px] xl:right-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[300px] xl:w-[570px] h-[62.5px] sm:h-[68.75px] md:h-[75px] lg:h-[93.75px] xl:h-[175px]"
          />
          <div className="absolute left-0 w-[70px] sm:w-[80px] md:w-[90px] lg:w-[120px] xl:w-[205px] h-[48px] sm:h-[55px] md:h-[62px] lg:h-[82px] xl:h-[140px] rotate-[-15.52deg] bg-[#FFF080] opacity-[26%] blur-xl z-10" />
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 lg:w-[60%] xl:w-[50%]">
            <p className="font-clash font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[32px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] xl:leading-[31px] bg-gradient-to-r from-[#F09819] to-[#EDDE5D] text-transparent bg-clip-text inline-block">
              Guaranteed Results
              <span className="text-white"> or it&#39;s Free!</span>
            </p>
            <p className="w-[90%] sm:w-[92%] md:w-[95%] lg:w-[98%] xl:w-[100%] font-satoshi font-medium text-[8px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[18px] leading-[8px] sm:leading-[9px] md:leading-[10px] lg:leading-[12px] xl:leading-[18px] text-white/80">
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
            className="absolute right-0 top-0 w-[400px] sm:w-[450px] md:w-[500px] lg:w-[700px] xl:w-[1210px] h-[55px] sm:h-[62px] md:h-[69px] lg:h-[96px] xl:h-[166px]"
          />
          <Image
            src="/img/cable.png"
            width={136}
            height={176}
            alt="dot_small_bg"
            className="absolute right-[30px] sm:right-[35px] md:right-[40px] lg:right-[45px] xl:right-[58px] top-[20px] sm:top-[25px] md:top-[30px] lg:top-[35px] xl:top-[38px] w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] xl:w-[136px] h-auto hidden lg:block"
          />
        </div>
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-7 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 py-6 sm:py-8 md:py-10 lg:py-10 xl:py-10 items-center">
          <p className="font-satoshi font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-black/50 uppercase">
            Featured in Top Media
          </p>
          <div className="hidden lg:flex justify-between gap-[30px] sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[52px] items-center">
            {TopMediaImgURLs.map((item, index) => (
              <Image
                src={item}
                width={175}
                height={28}
                alt="top_media_img"
                className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] xl:w-[175px] h-auto"
                key={index}
              />
            ))}
          </div>
          <div className="lg:hidden flex flex-col gap-4 sm:gap-5 md:gap-5">
            <div className="flex justify-between gap-3 sm:gap-4 md:gap-5 items-center">
              {TopMediaImgURLs.slice(0, 3).map((item, index) => (
                <div className="h-[16px] sm:h-[18px] md:h-[20px]" key={index}>
                  <Image
                    src={item}
                    width={175}
                    height={28}
                    alt="top_media_img"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-3 sm:gap-4 md:gap-5 items-center">
              {TopMediaImgURLs.slice(3, 6).map((item, index) => (
                <div className="h-[16px] sm:h-[18px] md:h-[20px]" key={index}>
                  <Image
                    src={item}
                    width={175}
                    height={28}
                    alt="top_media_img"
                    className="w-full h-auto"
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
