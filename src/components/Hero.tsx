"use client";
import {
  Delivery,
  Diamond_Cart_bg,
  Golden_Cart_bg,
  Key_Svg,
  NextArrowButton,
  Platinum_Cart_bg,
  PrevArrowButton,
  Tick,
  Trend,
} from "@/libs/SVG";
import Image from "next/image";
import { MainButton } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface ReachDataType {
  accounts: string;
  followers: string;
  non_followers: string;
}
const ReachData: ReachDataType = {
  accounts: "526.67K",
  followers: "83.78K",
  non_followers: "442.89K",
};

interface StateDataType {
  followers: string;
  percent: string;
}
const StateData: StateDataType = {
  followers: "46.8K",
  percent: "32.7%",
};

interface CartType {
  type: string;
  title: string;
  description: string;
  start_value: string;
  current_value: string;
  bg: JSX.Element;
}

const HeroUserImages = [
  "/img/hero_user_1.png",
  "/img/hero_user_2.png",
  "/img/hero_user_3.png",
  "/img/hero_user_4.png",
  "/img/hero_user_3.png",
];

const HeroUserImages_1 = [
  "/img/hero_user_0.png",
  "/img/hero_user_0.png",
  "/img/hero_user_0.png",
  "/img/hero_user_0.png",
];

const HeroUserImages_2 = [
  "/img/hero_user_6.png",
  "/img/hero_user_6.png",
  "/img/hero_user_6.png",
  "/img/hero_user_6.png",
];

export default function Hero() {
  function AddCartHandleClick() {
    return;
  }
  return (
    <section className="w-full bg-gradient-to-br from-[#E8FFF5] to-[#FFFFFF] mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-[24px]">
      <div className="container-responsive flex flex-col lg:flex-row xl:flex-row lg:items-start xl:items-start lg:justify-between xl:justify-between relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:p-[70px]">
        <Image
          src="/img/dot_bg.png"
          width={750}
          height={850}
          alt="dot_background"
          className="absolute top-[60px] opacity-20 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[750px] h-auto"
        />
        <div className="w-full lg:w-[610px] xl:w-[610px] flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[25px] 2xl:gap-[25px] mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0">
          <div className="w-full relative">
            <Swiper
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              modules={[Navigation]}
            >
              {HeroUserImages_1.map((item, index) => (
                <SwiperSlide
                  className="!hidden lg:!block xl:!block 2xl:!block z-10 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[28px] 2xl:rounded-[30px]"
                  key={index}
                >
                  <Image
                    src={item}
                    width={610}
                    height={610}
                    alt="hero_img_1"
                    className="rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[28px] 2xl:rounded-[30px] w-full sm:w-full md:w-full lg:w-[500px] xl:w-[550px] 2xl:w-[610px] h-auto sm:h-auto md:h-auto lg:h-[500px] xl:h-[550px] 2xl:h-[610px] aspect-[1]"
                  />
                </SwiperSlide>
              ))}
              {HeroUserImages_2.map((item, index) => (
                <SwiperSlide
                  className="lg:!hidden xl:!hidden 2xl:!hidden !block z-10 rounded-[16px] sm:rounded-[18px] md:rounded-[20px]"
                  key={index}
                >
                  <Image
                    src={item}
                    width={402}
                    height={292}
                    alt="hero_img_1"
                    className="rounded-[16px] sm:rounded-[18px] md:rounded-[20px] w-full h-auto aspect-[402/292]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <ReachCard
              data={ReachData}
              className="absolute top-[16px] sm:top-[18px] md:top-[20px] lg:top-[25px] xl:top-[28px] 2xl:top-[32px] right-[-16px] sm:right-[-18px] md:right-[-20px] lg:right-[-25px] xl:right-[-28px] 2xl:right-[-32px] z-20 hidden lg:block xl:block 2xl:block"
            />
            <StateCard
              data={StateData}
              className="absolute bottom-[12px] sm:bottom-[14px] md:bottom-[16px] lg:bottom-[18px] xl:bottom-[20px] 2xl:bottom-[20px] left-[12px] sm:left-[14px] md:left-[16px] lg:left-[18px] xl:left-[20px] 2xl:left-[20px] z-20"
            />
            <button className="custom-swiper-button-next cursor-pointer absolute top-[calc(50%-20px)] right-[8px] sm:right-[10px] md:right-[12px] lg:right-[15px] xl:right-[15px] 2xl:right-[15px] z-20">
              {NextArrowButton}
            </button>
            <button className="custom-swiper-button-prev cursor-pointer absolute top-[calc(50%-20px)] left-[8px] sm:left-[10px] md:left-[12px] lg:left-[15px] xl:left-[15px] 2xl:left-[15px] z-20">
              {PrevArrowButton}
            </button>
          </div>
          <div className="lg:hidden xl:hidden 2xl:hidden w-full flex justify-between items-center bg-black mb-3 sm:mb-4 md:mb-[12px] px-2 py-[6px]">
            <div className="flex gap-1 items-center">
              <div className="size-4 sm:size-5 md:size-6 p-1">{Key_Svg}</div>
              <p className="font-satoshi font-normal text-[10px] sm:text-[12px] md:text-[14px] leading-[8px] sm:leading-[10px] md:leading-[12px] text-white/50">
                No Password Requied
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <div className="size-4 sm:size-5 md:size-6 p-1">{Delivery}</div>
              <p className="font-satoshi font-normal text-[10px] sm:text-[12px] md:text-[14px] leading-[8px] sm:leading-[10px] md:leading-[12px] text-white/50">
                Delivery Starts Instantly
              </p>
            </div>
          </div>
          <div className="w-full flex items-center px-3 sm:px-4 md:px-[11px] lg:px-0 xl:px-0 relative overflow-hidden">
            <Swiper
              slidesPerView="auto"
              spaceBetween={8}
              loop={true}
              speed={3000}
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
              {HeroUserImages.map((item, index) => (
                <SwiperSlide className="!w-[60px] sm:!w-[70px] md:!w-[88px] lg:!w-[120px] xl:!w-[140px] 2xl:!w-[150px]" key={index}>
                  <Image
                    src={item}
                    width={150}
                    height={150}
                    alt="user_image"
                    className="rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[12px] mr-[4px] sm:mr-[5px] md:mr-[6px] lg:mr-[6px] xl:mr-[6px] 2xl:mr-[6px] w-full h-auto aspect-[1]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-[24px] sm:w-[28px] md:w-[40px] lg:w-[40px] xl:w-[40px] 2xl:w-[40px] h-full absolute right-0 bg-gradient-to-l from-white to-white/0 z-20" />
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-[600px] xl:w-[600px] px-4 sm:px-6 md:px-8 lg:px-4 xl:px-4">
          <div className="w-full flex items-center justify-center lg:justify-start xl:justify-start gap-2 sm:gap-3 md:gap-[10px] lg:gap-[10px] xl:gap-[10px] py-[5px] sm:py-[6px] md:py-[8px] lg:py-[10px] xl:py-[10px] px-2 sm:px-3 md:px-3 lg:px-3 xl:px-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-[60px]">
            <div className="flex gap-[3px] sm:gap-[4px] md:gap-[5px] lg:gap-[5px] xl:gap-[5px]">
              {[...new Array(5)].map((_, index) => (
                <Image
                  src="/img/star.png"
                  width={24}
                  height={24}
                  alt="star"
                  key={index}
                  className="size-[12px] sm:size-[14px] md:size-[16px] lg:size-[20px] xl:size-[22px] 2xl:size-[24px]"
                />
              ))}
            </div>
            <p className="font-satoshi font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] xl:leading-[20px] 2xl:leading-[22px] text-black">
              4.8/5
              <span className="text-black/60 font-medium">
                {" "}
                from 3,637 Reviews
              </span>
            </p>
          </div>
          <h1 className="w-full font-h1 mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-[60px] text-center lg:text-left xl:text-left">
            Grow Your <br />
            Instagram Followers
          </h1>
          <p className="w-full font-satoshi font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] xl:leading-[20px] 2xl:leading-[22px] lg:text-start xl:text-start text-center tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] lg:tracking-[-1px] xl:tracking-[-1px] text-text-dark mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-[60px]">
            Affordable, Accelerated, Organic Instagram Growth.
          </p>
          <div className="hidden lg:flex xl:flex 2xl:flex gap-2 mb-5 w-full">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6">{Key_Svg}</div>
              <p className="font-satoshi font-normal text-[16px] leading-[12px] text-text-dark text-start">
                No Password Requied
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6">{Delivery}</div>
              <p className="font-satoshi font-normal text-[16px] leading-[12px] text-text-dark text-start">
                Delivery Starts Instantly
              </p>
            </div>
          </div>
          <div className="hidden lg:flex xl:flex 2xl:flex gap-2 mb-2 w-full">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Engaged, Organic Followers
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Finally get taken seriously in Social media
              </p>
            </div>
          </div>
          <div className="hidden lg:flex xl:flex 2xl:flex gap-2 mb-10 w-full">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Hands Off For You
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Join the 49% of influencers who already do this
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between items-end mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-6 xl:mb-6 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4">
            <Cart
              type="gold"
              title="GOLD"
              description="500-1k Followers"
              start_value="$129"
              current_value="$79"
              bg={Golden_Cart_bg}
            />
            <Cart
              type="platinum"
              title="Platinum"
              description="7.5-12k Followers"
              start_value="$149"
              current_value="$99"
              bg={Platinum_Cart_bg}
            />
            <Cart
              type="diamond"
              title="Diamond"
              description="2-5k Followers"
              start_value="$139"
              current_value="$89"
              bg={Diamond_Cart_bg}
            />
          </div>
          <MainButton
            title="Add to cart"
            className="w-full mb-[10px] sm:mb-[12px] md:mb-[14px] lg:mb-[15px] xl:mb-[15px]"
            handleClick={() => AddCartHandleClick()}
          />
          <Image
            src="/img/payments.png"
            width={380}
            height={25}
            alt="payment_methods"
            className="mb-[10px] sm:mb-[12px] md:mb-[14px] lg:mb-[15px] xl:mb-[15px] self-center w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[350px] 2xl:w-[380px] h-auto"
          />
          <div className="w-[250px] sm:w-[280px] md:w-[300px] lg:w-[316px] xl:w-[316px] h-[30px] sm:h-[35px] md:h-[38px] lg:h-[40px] xl:h-[40px] py-[2px] sm:py-[4px] md:py-[6px] lg:py-[8px] xl:py-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[18px] border-[2px] sm:border-[2.5px] md:border-[3px] lg:border-[3px] xl:border-[3px] border-black-border rounded-[10px] sm:rounded-[11px] md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px] flex items-center justify-between self-center">
            <Image
              src="/img/golden_mark.png"
              width={32}
              height={32}
              alt="golden_mark"
              className="size-[16px] sm:size-[18px] md:size-[20px] lg:size-[24px] xl:size-[28px] 2xl:size-[32px]"
            />
            <p className="font-satoshi font-medium text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] leading-[6px] sm:leading-[8px] md:leading-[8px] lg:leading-[10px] xl:leading-[11px] 2xl:leading-[12px] text-black uppercase">
              Guaranteed Results or it&#39;s free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReachCard({
  data,
  className,
}: {
  data: ReachDataType;
  className: string;
}) {
  return (
    <div
      className={`w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] 2xl:w-[270px] h-[110px] sm:h-[120px] md:h-[130px] lg:h-[140px] xl:h-[150px] 2xl:h-[164px] bg-white rounded-[10px] sm:rounded-[11px] md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[12px] shadow-md font-inter p-2 sm:p-2.5 md:p-3 lg:p-3 xl:p-3 2xl:p-3 border border-black-border ${className}`}
    >
      <div className="w-full h-full flex flex-col items-center justify-between">
        <p className="w-full text-black font-bold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[13.6px] 2xl:text-[13.6px] text-start">
          Reach
        </p>
        <p className="text-black font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[10px] sm:leading-[12px] md:leading-[14px] lg:leading-[15px] xl:leading-[15px] 2xl:leading-[15px]">
          {data.accounts}
        </p>
        <p className="text-black font-medium text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[11px]">Accounts Reached</p>
        <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[15px] xl:gap-[15px] 2xl:gap-[15px] items-center">
          <div className="flex flex-col gap-1">
            <p className="text-black font-bold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[13.6px] 2xl:text-[13.6px] leading-[7px] sm:leading-[8px] md:leading-[9px] lg:leading-[10px] xl:leading-[10px] 2xl:leading-[10px]">
              {data.followers}
            </p>
            <p className="text-black font-medium text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[9px] 2xl:text-[9px] opacity-50">
              Followers
            </p>
          </div>
          <ReachProgress percent={83780 / 526670} />
          <div className="flex flex-col gap-1">
            <p className="text-black font-bold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[13.6px] 2xl:text-[13.6px] leading-[7px] sm:leading-[8px] md:leading-[9px] lg:leading-[10px] xl:leading-[10px] 2xl:leading-[10px]">
              {data.non_followers}
            </p>
            <p className="text-black font-medium text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[9px] 2xl:text-[9px] opacity-50">
              Non-followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReachProgress({ percent }: { percent: number }) {
  const size = 60;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - percent * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="block"
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="stroke-[#0693F7]"
        strokeWidth={strokeWidth}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
      />
      <circle
        className="stroke-[#0B3062] transition-all duration-500"
        strokeWidth={strokeWidth}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="butt"
        style={{ transition: "stroke-dashoffset 0.5s" }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

function StateCard({
  data,
  className,
}: {
  data: StateDataType;
  className: string;
}) {
  return (
    <div
      className={`w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] xl:w-[200px] 2xl:w-[223px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] xl:h-[110px] 2xl:h-[124px] bg-white rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-[12px] shadow-md font-inter px-[8px] sm:px-[9px] md:px-[10px] lg:px-[12px] xl:px-[14px] 2xl:px-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3 2xl:py-3 flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[4px] xl:gap-[5px] 2xl:gap-5 border border-black-border ${className}`}
    >
      <div className="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[4px] xl:gap-[5px] 2xl:gap-5">
        <Image
          src="/img/icons_instagram.png"
          width={20}
          height={20}
          alt="instagram_icon"
          className="size-[8px] sm:size-[10px] md:size-[12px] lg:size-[14px] xl:size-[16px] 2xl:size-[20px]"
        />
        <p className="font-satoshi font-medium text-[7px] sm:text-[8px] md:text-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] leading-[5px] sm:leading-[6px] md:leading-[7px] lg:leading-[8px] xl:leading-[9px] 2xl:leading-[10px] text-black">
          Instagram Followers
        </p>
      </div>
      <div className="h-full flex items-center">
        <div className="flex flex-col h-full justify-between">
          <div className="flex w-full items-end">
            <p className="font-satoshi font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] leading-[12px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] xl:leading-[25px] 2xl:leading-[30px] text-black">
              {data.followers}
            </p>
            {Trend}
            <p className="font-satoshi font-medium text-[7px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-primary">
              {data.percent}
            </p>
          </div>
          <p className="font-satoshi font-medium text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] leading-[4px] sm:leading-[5px] md:leading-[6px] lg:leading-[14px] xl:leading-[16px] 2xl:leading-[20px] opacity-50 text-black">
            Last 7 days
          </p>
        </div>
      </div>
    </div>
  );
}

function Cart({
  type,
  title,
  description,
  start_value,
  current_value,
  bg,
}: CartType) {
  return (
    <div className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[187px]">
      {type == "platinum" && (
        <div className="w-full h-[18px] sm:h-[20px] md:h-[22px] lg:h-[25px] xl:h-[28px] 2xl:h-[30px] mb-[-6px] sm:mb-[-8px] md:mb-[-9px] lg:mb-[-10px] xl:mb-[-12px] 2xl:mb-[-10px] rounded-t-[8px] sm:rounded-t-[9px] md:rounded-t-[10px] lg:rounded-t-[12px] xl:rounded-t-[14px] 2xl:rounded-t-[16px] border-[1px] sm:border-[1.5px] md:border-[2px] lg:border-[2.5px] xl:border-[3px] 2xl:border-[3px] border-b-transparent border-black-border font-clash text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[12.4px] font-semibold leading-[7px] sm:leading-[8px] md:leading-[9px] lg:leading-[12px] xl:leading-[13px] 2xl:leading-[15px] text-black text-center">
          Best Value
        </div>
      )}
      <div className="rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[14px] 2xl:rounded-[16px] border-[1px] sm:border-[1.5px] md:border-[2px] lg:border-[2.5px] xl:border-[3px] 2xl:border-[3px] border-black-border shadow-md overflow-hidden">
        <div
          className={`relative w-[80px] sm:w-[90px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[181px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[130px] xl:h-[150px] 2xl:h-[181px] ${
            type == "platinum" &&
            "bg-primary border-[1px] sm:border-[1.5px] md:border-[2px] lg:border-[2.5px] xl:border-[3px] 2xl:border-[3px] border-primary rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[14px] 2xl:rounded-[16px] overflow-hidden"
          }`}
        >
          <div className="realative w-full h-full p-1 sm:p-1.5 md:p-2 lg:p-2 xl:p-2 2xl:p-2 z-20 flex flex-col justify-between items-center">
            <div
              className={`absolute size-[10px] sm:size-[12px] md:size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[22px] top-1 sm:top-1.5 md:top-2 lg:top-2 xl:top-2 2xl:top-2 right-1 sm:right-1.5 md:right-2 lg:right-2 xl:right-2 2xl:right-2 ${
                type == "platinum" ? "flex" : "hidden"
              }`}
            >
              {Tick}
            </div>
            <p
              className={`font-clash font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] text-center ${
                type == "platinum" ? "text-white" : "text-black"
              }`}
            >
              {title}
            </p>
            <p className="font-clash font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] xl:leading-[20px] 2xl:leading-[25px] text-white text-center z-20">
              {description}
            </p>
            <div className="relative w-full py-[3px] sm:py-[4px] md:py-[5px] lg:py-[6px] xl:py-[8px] 2xl:py-2 flex items-center justify-center bg-white border border-black-border rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[8px] xl:rounded-[8px] 2xl:rounded-[8px] z-20">
              <p className="font-clash font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[17px] sm:leading-[19px] md:leading-[22px] lg:leading-[24px] xl:leading-[28px] 2xl:leading-[34px] text-black">
                {current_value}
              </p>
              <p className="absolute top-[2px] sm:top-[3px] md:top-[4px] lg:top-[5px] xl:top-[6px] 2xl:top-[6.5px] right-[4px] sm:right-[5px] md:right-[6px] lg:right-[8px] xl:right-[10px] 2xl:right-[12px] font-clash font-semibold text-[7px] sm:text-[8px] md:text-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14.24px] leading-[8px] sm:leading-[9px] md:leading-[11px] lg:leading-[13px] xl:leading-[15px] 2xl:leading-[18px] line-through text-black opacity-40">
                {start_value}
              </p>
            </div>
          </div>
          <div className="absolute bottom-[-2px] sm:bottom-[-3px] md:bottom-[-4px] lg:bottom-[-6px] xl:bottom-[-8px] 2xl:bottom-[-10px] w-[80px] sm:w-[90px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[187px] aspect-[187/144] z-10">
            {bg}
          </div>
        </div>
      </div>
    </div>
  );
}
