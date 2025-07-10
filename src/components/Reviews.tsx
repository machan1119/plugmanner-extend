"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MainButton } from "./Button";

interface ReviewItemProps {
  title: string;
  comment: string;
  rating: number;
  customerName: string;
  date: string;
}

const ReviewsData: ReviewItemProps[] = [
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
  {
    title: "Boosted by Credibility",
    comment:
      "Purchased Twitter followers for my crypto project, and it helped us gain credibility. A great service",
    rating: 5,
    customerName: "Matthew E.",
    date: "12/06/2024",
  },
];

export default function Reviews() {
  const [count, setCount] = useState(6);
  const [flag, setFlag] = useState(false);
  const [miniCount, setMiniCount] = useState(6);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1440) {
        setCount(6);
        setMiniCount(6);
      } else if (width >= 1024) {
        setCount(6);
        setMiniCount(6);
      } else if (width >= 768) {
        setCount(4);
        setMiniCount(4);
      } else {
        setCount(4);
        setMiniCount(4);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxLength = ReviewsData.length;

  useEffect(() => {
    setFlag(count >= maxLength);
  }, [count, maxLength]);

  return (
    <section className="w-full bg-background-dark">
      <div className="container-responsive relative py-6 sm:py-8 md:py-10 lg:py-12 xl:pt-[56px] xl:pb-[48px] flex flex-col">
        <Image
          src="/img/dot_bg_1.png"
          width={950}
          height={420}
          alt="dot_background"
          className="absolute top-[0] self-center z-10 dot-mask w-[400px] sm:w-[500px] md:w-[600px] lg:w-[750px] xl:w-[950px] h-auto"
        />
        <div className="w-full flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-[60px] z-20">
          <h2 className="font-h2 text-center">
            Customers
            <span className="text-primary"> Reviews</span>
          </h2>
          <p className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[40%] font-body text-center">
            Read what our customers think about this service. We take your
            feedback seriously - help us improve by{" "}
            <span className="text-primary underline">leaving a review.</span>
          </p>
          <div className="flex gap-2 items-center">
            <Image 
              src="/img/star.png" 
              width={24} 
              height={24} 
              alt="star" 
              className="size-[16px] sm:size-[18px] md:size-[20px] lg:size-[22px] xl:size-[24px]"
            />
            <p className="font-satoshi font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[16px] xl:leading-[12px] text-text-dark">
              Rated <span className="text-primary">4.8/5</span> from over 1000+
              reviews
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-10 z-20">
          {ReviewsData.slice(0, count).map((item, index) => (
            <ReviewItem
              title={item.title}
              comment={item.comment}
              customerName={item.customerName}
              rating={item.rating}
              date={item.date}
              key={index}
            />
          ))}
        </div>
        <MainButton
          title="Read More"
          className={`w-max self-center ${flag && "hidden"}`}
          handleClick={() => setCount(count + miniCount)}
        />
        <MainButton
          title="Read Less"
          className={`w-max self-center ${!flag && "hidden"}`}
          handleClick={() => setCount(miniCount)}
        />
      </div>
    </section>
  );
}

function ReviewItem({
  title,
  comment,
  customerName,
  date,
  rating,
}: ReviewItemProps) {
  return (
    <div className="w-full p-3 sm:p-4 md:p-5 lg:p-5 xl:py-6 xl:px-4 bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[16px] xl:rounded-[16px] border border-gray-border flex flex-col items-center">
      <p className="font-clash font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[22px] xl:leading-[25px] text-black mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 text-center">
        {title}
      </p>
      <p className="font-satoshi font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[14px] leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] text-black text-center mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6">
        {comment}
      </p>
      <div className="flex gap-[4px] sm:gap-[5px] md:gap-[6px] lg:gap-[6px] xl:gap-2 items-center mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4">
        {[...new Array(rating)].map((_, index) => (
          <Image
            src="/img/star.png"
            width={24}
            height={24}
            alt="star"
            key={index}
            className="size-[12px] sm:size-[14px] md:size-[16px] lg:size-[18px] xl:size-[24px]"
          />
        ))}
      </div>
      <p className="font-satoshi font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-[10px] sm:leading-[12px] md:leading-[13px] lg:leading-[13px] xl:leading-[13px] text-black mb-[8px] sm:mb-[10px] md:mb-[10px] lg:mb-[10px] xl:mb-[10px]">
        {customerName}
      </p>
      <p className="font-satoshi font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] xl:text-[14px] leading-[8px] sm:leading-[9px] md:leading-[10px] lg:leading-[10px] xl:leading-[10px] text-black/50">
        {date}
      </p>
    </div>
  );
}
