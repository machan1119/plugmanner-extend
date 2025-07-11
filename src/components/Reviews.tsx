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
      if (width >= 768) {
        setCount(6);
        setMiniCount(6);
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
      <div className="max-w-[1440px] relative w-full px-[15px] pt-[24px] pb-[35px] xl:px-[75px] xl:pt-[56px] xl:pb-[48px] mx-auto flex flex-col">
        <Image
          src="/img/dot_bg_1.png"
          width={950}
          height={420}
          alt="dot_background"
          className="absolute top-[0] self-center z-10 dot-mask"
        />
        <div className="w-full flex flex-col items-center gap-2 xl:gap-4 mb-10 xl:mb-[60px] z-20">
          <h2 className="font-h2">
            Customers
            <span className="text-primary"> Reviews</span>
          </h2>
          <p className="xl:w-[40%] w-[90%] font-satoshi font-normal xl:text-[16px] text-[14px] leading-[18px] text-black/70 text-center">
            Read what our customers think about this service. We take your
            feedback seriously - help us improve by{" "}
            <span className="text-primary underline">leaving a review.</span>
          </p>
          <div className="flex gap-2 items-center">
            <Image src="/img/star.png" width={24} height={24} alt="star" />
            <p className="font-satoshi font-medium text-[16px] leading-[12px] text-text-dark">
              Rated <span className="text-primary">4.8/5</span> from over 1000+
              reviews
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-[13px] xl:gap-4 mb-4 xl:mb-10 z-20">
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
    <div className="w-full xl:py-6 xl:px-4 p-3 bg-white rounded-[16px] border border-gray-border flex flex-col items-center">
      <p className="font-clash font-semibold xl:text-[20px] xl:leading-[25px] text-[16px] leading-[20px] text-black mb-3 text-center">
        {title}
      </p>
      <p className="font-satoshi font-normal text-[14px] leading-[18px] text-black text-center mb-6">
        {comment}
      </p>
      <div className="flex gap-[6px] xl:gap-2 items-center mb-4">
        {[...new Array(rating)].map((_, index) => (
          <Image
            src="/img/star.png"
            width={24}
            height={24}
            alt="star"
            key={index}
          />
        ))}
      </div>
      <p className="font-satoshi font-medium text-[16px] xl:text-[18px] leading-[13px] text-black mb-[10px]">
        {customerName}
      </p>
      <p className="font-satoshi font-normal text-[12px] xl:text-[14px] leading-[10px] text-black/50">
        {date}
      </p>
    </div>
  );
}
