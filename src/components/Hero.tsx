"use client";
import {
  Delivery,
  Diamond_Cart_bg,
  Golden_Cart_bg,
  Key_Svg,
  Platinum_Cart_bg,
  Tick,
  Trend,
} from "@/libs/SVG";
import Image from "next/image";
import { MainButton } from "./Button";

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
  "/img/hero_user_1.png",
  "/img/hero_user_2.png",
];

export default function Hero() {
  function AddCartHandleClick() {
    return;
  }
  return (
    <section className="w-full bg-gradient-to-br from-[#E8FFF5] to-[#FFFFFF]">
      <div className="max-w-[1440px] w-full p-[70px] mx-auto flex items-start justify-between relative">
        <Image
          src="/img/dot_bg.png"
          width={750}
          height={850}
          alt="dot_background"
          className="absolute top-[60px] opacity-20"
        />
        <div className="w-[610px] flex flex-col gap-[25px]">
          <div className="w-full relative">
            <Image
              src="/img/hero_1.png"
              width={610}
              height={610}
              alt="hero_img_1"
              className="rounded-[30px]"
            />
            <ReachCard
              data={ReachData}
              className="absolute top-[32px] right-[-32px]"
            />
            <StateCard
              data={StateData}
              className="absolute bottom-[20px] left-[20px]"
            />
          </div>
          <div className="w-full flex items-center gap-[14px] relative overflow-hidden">
            {HeroUserImages.map((item, index) => (
              <Image
                src={item}
                width={150}
                height={150}
                alt="user_image"
                key={index}
                className="rounded-[12px]"
              />
            ))}
            <div className="w-[40px] h-full absolute right-0 bg-gradient-to-l from-white to-white/0 z-20" />
          </div>
        </div>
        <div className="flex flex-col w-[600px]">
          <div className="flex items-center gap-[10px] py-[10px] px-3 mb-4">
            <div className="flex gap-[5px]">
              {[...new Array(5)].map((_, index) => (
                <Image
                  src="/img/star.png"
                  width={23}
                  height={23}
                  alt="star"
                  key={index}
                />
              ))}
            </div>
            <p className="font-satoshi font-bold text-[15px] leading-[20px] text-black">
              4.8/5
              <span className="opacity-60 font-medium">
                {" "}
                from 3,637 Reviews
              </span>
            </p>
          </div>
          <h1 className="font-h1 mb-4">
            Grow Your <br />
            Instagram Followers
          </h1>
          <p className="font-satoshi font-normal text-[24px] leading-[17px] text-text-dark mb-6">
            Affordable, Accelerated, Organic Instagram Growth.
          </p>
          <div className="flex gap-2 mb-5">
            <div className="w-[232px] flex gap-2 items-center">
              {Key_Svg}
              <p className="font-satoshi font-normal text-[16px] leading-[12px] text-text-dark">
                No Password Requied
              </p>
            </div>
            <div className="flex gap-2 items-center">
              {Delivery}
              <p className="font-satoshi font-normal text-[16px] leading-[12px] text-text-dark">
                Delivery Starts Instantly
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark">
                Engaged, Organic Followers
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark">
                Finally get taken seriously in Social media
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-10">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark">
                Hands Off For You
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark">
                Join the 49% of influencers who already do this
              </p>
            </div>
          </div>
          <div className="flex justify-between items-end mb-6">
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
            title="Add to Cart"
            className="w-full mb-[15px]"
            handleClick={() => AddCartHandleClick()}
          />
          <Image
            src="/img/payments.png"
            width={380}
            height={25}
            alt="payment_methods"
            className="mb-[15px] self-center"
          />
          <div className="w-[316px] h-[40px] py-[12px] px-[18px] border-[3px] border-black-border rounded-[8px] flex items-center justify-between self-center">
            <Image
              src="/img/golden_mark.png"
              width={32}
              height={32}
              alt="golden_mark"
            />
            <p className="font-satoshi font-medium text-[15px] leading-[11px] text-black uppercase tracking-[-1px]">
              Guaranteed Results or it’s free!
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
      className={`w-[270px] h-[164px] bg-white rounded-[12px] shadow-md font-inter p-3 flex flex-col gap-3 border border-black-border ${className}`}
    >
      <p className="text-black font-bold text-[13.6px]">Reach</p>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <p className="text-black font-semibold text-[20px] leading-[15px]">
          {data.accounts}
        </p>
        <p className="text-black font-medium text-[11px]">Accounts Reached</p>
        <div className="flex gap-[15px] items-center">
          <div className="flex flex-col gap-1">
            <p className="text-black font-bold text-[13.6px] leading-[10px]">
              {data.followers}
            </p>
            <p className="text-black font-medium text-[9px] opacity-50">
              Followers
            </p>
          </div>
          <ReachProgress percent={83780 / 526670} />
          <div className="flex flex-col gap-1">
            <p className="text-black font-bold text-[13.6px] leading-[10px]">
              {data.non_followers}
            </p>
            <p className="text-black font-medium text-[9px] opacity-50">
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
      className={`w-[223px] h-[124px] bg-white rounded-[12px] shadow-md font-inter px-4 py-3 flex flex-col gap-5 border border-black-border ${className}`}
    >
      <div className="flex items-center gap-[5px]">
        <Image
          src="/img/icons_instagram.png"
          width={20}
          height={20}
          alt="instagram_icon"
        />
        <p className="font-satoshi font-medium text-[14px] leading-[20px] text-black">
          Instagram Followers
        </p>
      </div>
      <div className="h-full flex items-center">
        <div className="flex flex-col h-full justify-between">
          <p className="font-satoshi font-bold text-[40px] leading-[30px] text-black">
            {data.followers}
          </p>
          <p className="font-satoshi font-medium text-[14px] leading-[10px] opacity-50 text-black">
            Last 7 days
          </p>
        </div>
        <div className="flex items-center w-full justify-between">
          {Trend}
          <p className="font-satoshi font-medium text-[16px] text-primary">
            {data.percent}
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
    <div className="w-[187px]">
      {type == "platinum" && (
        <div className="w-full h-[30px] mb-[-10px] rounded-t-[16px] border-[3px] border-b-transparent border-black-border font-clash text-[12.4px] font-semibold leading-[15px] text-black text-center">
          Best Value
        </div>
      )}
      <div className="rounded-[16px] border-[3px] border-black-border shadow-md overflow-hidden">
        <div
          className={`relative w-[181px] h-[181px] ${
            type == "platinum" &&
            "bg-primary border-[3px] border-primary rounded-[16px] overflow-hidden"
          }`}
        >
          <div className="realative w-full h-full p-2 z-20 flex flex-col justify-between items-center">
            <div
              className={`absolute top-2 right-2 ${
                type == "platinum" ? "flex" : "hidden"
              }`}
            >
              {Tick}
            </div>
            <p
              className={`font-clash font-semibold text-[21px] text-center ${
                type == "platinum" ? "text-white" : "text-black"
              }`}
            >
              {title}
            </p>
            <p className="font-clash font-semibold text-[24px] leading-[25px] text-white text-center z-20">
              {description}
            </p>
            <div className="relative w-full h-[51px] flex items-center justify-center bg-white border border-black-border rounded-[8px] z-20">
              <p className="font-clash font-semibold text-[28px] text-black">
                {current_value}
              </p>
              <p className="absolute top-[6.5px] right-[12px] font-clash font-semibold text-[14.24px] text-black opacity-40">
                {start_value}
              </p>
            </div>
          </div>
          <div className="absolute bottom-[-10px] z-10">{bg}</div>
        </div>
      </div>
    </div>
  );
}
