import { BigQuote } from "@/libs/SVG";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

interface ReviewCardProps {
  imgURL: string;
  title: string;
  description: string;
  userName: string;
  userType: string;
}

export default function WhyTrust() {
  return (
    <section className="w-full bg-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-[36px]">
      <div className="container-responsive py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[48px]">
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-[54px]">
          <div className="bg-secondary rounded-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[14px] xl:py-[14px] px-4 sm:px-4 md:px-5 lg:px-5 xl:px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[10px] sm:leading-[11px] md:leading-[11px] lg:leading-[12px] xl:leading-[12px] text-primary tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] lg:tracking-[-1px] xl:tracking-[-1px]">
            Why Trust SocialPlug?
          </div>
          <h2 className="font-h2 text-center">
            Real Results from
            <span className="text-primary"> Real People</span>
          </h2>
          <p className="w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[60%] font-body text-center">
            No bots. No shadowbans. Just real growth stories from real
            customers.
          </p>
        </div>
        <div className="flex mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={15000}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={{ enabled: true, momentum: false }}
            allowTouchMove={false}
            simulateTouch={false}
            className="mySwiper"
          >
            <SwiperSlide className="!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[400px] xl:!w-[640px]">
              <ReviewCard
                imgURL="/img/review_img_1.png"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[400px] xl:!w-[640px]">
              <ReviewCard
                imgURL="/img/review_img_2.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[400px] xl:!w-[640px]">
              <ReviewCard
                imgURL="/img/review_img_3.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={10000}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            freeMode={{ enabled: true, momentum: false }}
            allowTouchMove={false}
            simulateTouch={false}
            className="mySwiper"
          >
            <SwiperSlide className="!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[400px] xl:!w-[640px]">
              <ReviewCard
                imgURL="/img/review_img_4.png"
                title="The followers actually look like real people with real profiles"
                description="The followers actually look real—with proper profiles, posts, and stories. Not the usual fake-looking ones you see elsewhere."
                userName="Jessica L."
                userType="Small Business Owner"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[400px] xl:!w-[640px]">
              <ReviewCard
                imgURL="/img/review_img_5.png"
                title="Got my first brand collab within 2 weeks of hitting 5K!"
                description="I landed my first brand collab just 2 weeks after hitting 5K. The growth felt real, and so did the opportunities."
                userName="Amanda K."
                userType="Fitness Coach"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[400px] xl:!w-[640px]">
              <ReviewCard
                imgURL="/img/review_img_6.png"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  imgURL,
  title,
  description,
  userName,
  userType,
}: ReviewCardProps) {
  return (
    <div className="bg-background-light w-[280px] sm:w-[300px] md:w-[320px] lg:w-[400px] xl:w-[640px] h-[140px] sm:h-[150px] md:h-[170px] lg:h-[220px] xl:h-[340px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[16px] xl:rounded-[16px] border-[2px] border-white flex gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 shadow-xl">
      <Image
        src={imgURL}
        width={250}
        height={305}
        alt="review_img"
        className="w-[110px] sm:w-[120px] md:w-[125px] lg:w-[160px] xl:w-[250px] h-[137.5px] sm:h-[150px] md:h-[152.5px] lg:h-[200px] xl:h-[305px] object-cover rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px]"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          <div className="size-[12px] sm:size-[14px] md:size-[16px] lg:size-[24px] xl:size-[32px]">{BigQuote}</div>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-4">
            <p className="font-clash font-semibold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[10px] sm:leading-[12px] md:leading-[14px] lg:leading-[20px] xl:leading-[25px] text-black">
              {title}
            </p>
            <p className="font-satoshi font-medium text-[7px] sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] leading-[10px] sm:leading-[11px] md:leading-[13px] lg:leading-[18px] xl:leading-[25px] text-black">
              {description}
            </p>
          </div>
        </div>
        <div className="flex gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-2 items-center w-full">
          <p className="font-satoshi font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[22px] xl:leading-[30px] text-black">
            {userName}
          </p>
          <div className="w-[12px] sm:w-[14px] md:w-[16px] lg:w-[20px] xl:w-[18px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[20px] xl:h-[18px] flex items-center justify-center">
            <div className="w-[4px] sm:w-[5px] md:w-[6px] lg:w-[8px] xl:w-[8px] h-[4px] sm:h-[5px] md:h-[6px] lg:h-[8px] xl:h-[8px] bg-black rounded-full opacity-20"></div>
          </div>
          <p className="font-satoshi font-medium text-[7px] sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] leading-[10px] sm:leading-[11px] md:leading-[13px] lg:leading-[18px] xl:leading-[25px] text-black opacity-60">
            {userType}
          </p>
        </div>
      </div>
    </div>
  );
}
