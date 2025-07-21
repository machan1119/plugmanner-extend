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
    <section className="w-full bg-white xl:mb-[36px]">
      <div className="max-w-[1440px] w-full py-[24px] xl:py-[48px] mx-auto">
        <div className="flex flex-col items-center gap-2 xl:gap-4 mb-[24px] xl:mb-[54px]">
          <div className="bg-secondary rounded-full py-[14px] px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[14px] leading-[10px] xl:text-[16px] xl:leading-[12px] text-primary tracking-[-1px]">
            Why Trust SocialPlug?
          </div>
          <h2 className="font-h2">
            Real Results from
            <span className="text-primary"> Real People</span>
          </h2>
          <p className="xl:w-[60%] w-[80%] font-satoshi font-normal xl:text-[16px] text-[14px] leading-[18px] text-center text-black">
            No bots. No shadowbans. Just real growth stories from real
            customers.
          </p>
        </div>
        <div className="flex">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={15000}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            slidesOffsetAfter={0}
            freeMode={{ enabled: true, momentum: false }}
            allowTouchMove={false}
            centerInsufficientSlides={true}
            simulateTouch={false}
            className="mySwiper"
          >
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_1.svg"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_2.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_3.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_1.svg"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_2.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_3.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_1.svg"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_2.png"
                title="Didn't even need my password. So much safer than other sites"
                description="dn&#39;t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
                userName="Mike D."
                userType="Musician"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
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
        <div className="flex">
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
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_4.png"
                title="The followers actually look like real people with real profiles"
                description="The followers actually look real—with proper profiles, posts, and stories. Not the usual fake-looking ones you see elsewhere."
                userName="Jessica L."
                userType="Small Business Owner"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_5.svg"
                title="Got my first brand collab within 2 weeks of hitting 5K!"
                description="I landed my first brand collab just 2 weeks after hitting 5K. The growth felt real, and so did the opportunities."
                userName="Amanda K."
                userType="Fitness Coach"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_6.png"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_4.png"
                title="The followers actually look like real people with real profiles"
                description="The followers actually look real—with proper profiles, posts, and stories. Not the usual fake-looking ones you see elsewhere."
                userName="Jessica L."
                userType="Small Business Owner"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_5.svg"
                title="Got my first brand collab within 2 weeks of hitting 5K!"
                description="I landed my first brand collab just 2 weeks after hitting 5K. The growth felt real, and so did the opportunities."
                userName="Amanda K."
                userType="Fitness Coach"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_6.png"
                title="No Shadownban after 3 months!"
                description="It&#39;s been over 3 months and I haven&#39;t had any shadowban issues since using this. My reach is steady, engagement&#39;s up, and I&#39;m finally growing without random drops."
                userName="Sarah M."
                userType="Fashion Blogger"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_4.png"
                title="The followers actually look like real people with real profiles"
                description="The followers actually look real—with proper profiles, posts, and stories. Not the usual fake-looking ones you see elsewhere."
                userName="Jessica L."
                userType="Small Business Owner"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
              <ReviewCard
                imgURL="/img/review_img_5.svg"
                title="Got my first brand collab within 2 weeks of hitting 5K!"
                description="I landed my first brand collab just 2 weeks after hitting 5K. The growth felt real, and so did the opportunities."
                userName="Amanda K."
                userType="Fitness Coach"
              />
            </SwiperSlide>
            <SwiperSlide className="xl:!w-[638px] md:!w-[420px] lg:!w-[540px] !w-[319px]">
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
    <div className="bg-background-light xl:w-[638px] xl:h-[338px] md:w-[420px] lg:w-[540px] lg:h-[290px] md:h-[220px] w-[319px] h-[169px] rounded-[16px] border-[2px] border-white flex xl:gap-4 gap-2 xl:p-4 p-2 mb-[20px] shadow-lg">
      <Image
        src={imgURL}
        width={249}
        height={307}
        alt="review_img"
        className="xl:w-[249px] xl:h-[307px] md:w-[40%] md:h-auto w-[125px] h-[152.5px]"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col xl:gap-6 gap-3">
          <div className="xl:size-[32px] md:size-6 size-[16px]">{BigQuote}</div>
          <div className="flex flex-col xl:gap-4 gap-2">
            <p className="font-clash font-semibold xl:text-[20px] xl:leading-[25px] md:text-[16px] md:leading-[20px] text-[10px] leading-[12px] text-black">
              {title}
            </p>
            <p className="font-satoshi font-medium text-[9px] leading-[12.5px] md:text-[14px] md:leading-[16px] xl:text-[18px] xl:leading-[25px] text-black">
              {description}
            </p>
          </div>
        </div>
        <div className="flex xl:gap-2 gap-[2px] items-center w-full">
          <p className="font-satoshi font-bold text-[12px] leading-[15px] md:text-[18px] md:leading-[20px] xl:text-[24px] xl:leading-[30px] text-black">
            {userName}
          </p>
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <div className="w-[8px] h-[8px] bg-black rounded-full opacity-20"></div>
          </div>
          <p className="font-satoshi font-medium text-[9px] leading-[12.5px] md:text-[14px] md:leading-[16px] xl:text-[18px] xl:leading-[25px] text-black opacity-60">
            {userType}
          </p>
        </div>
      </div>
    </div>
  );
}
