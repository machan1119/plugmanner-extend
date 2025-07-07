"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  return (
    <section className="w-full bg-background-dark">
      <div className="max-w-[1440px] relative w-full px-[75px] pt-[56px] pb-[48px] mx-auto flex flex-col">
        <Image
          src="/img/dot_bg_1.png"
          width={950}
          height={420}
          alt="dot_background"
          className="absolute top-[0] self-center z-10 dot-mask"
        />
        <div className="w-full flex flex-col items-center gap-4 mb-[60px] z-20">
          <h2 className="font-h2">
            Customers
            <span className="text-[32px] text-primary"> Reviews</span>
          </h2>
          <p className="w-[45%] font-satoshi font-normal text-[16px] leading-[18px] text-black/70 text-center">
            Read what our customers think about this service. We take your
            feedback seriously - help us improve by{" "}
            <span className="text-primary underline">leaving a review.</span>
          </p>
          <div className="flex gap-2 items-center">
            <Image src="/img/star.png" width={24} height={24} alt="star" />
            <p className="font-satoshi font-medium text-[16px] leading-[12px] text-black">
              Rated <span className="text-primary">4.8/5</span> from over 1000+
              reviews
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 mb-10 z-20">
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
          title="Read more"
          className="w-max self-center"
          handleClick={() => setCount(count + 6)}
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
    <div className="w-full py-6 px-4 bg-white rounded-[16px] border border-gray-border flex flex-col items-center">
      <p className="font-clash font-semibold text-[20px] leading-[25px] text-black mb-3">
        {title}
      </p>
      <p className="font-satoshi font-normal text-[14px] leading-[18px] text-black text-center mb-6">
        {comment}
      </p>
      <div className="flex gap-2 items-center mb-4">
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
      <p className="font-satoshi font-medium text-[18px] leading-[13px] text-black mb-[10px]">
        {customerName}
      </p>
      <p className="font-satoshi font-normal text-[14px] leading-[10px] text-black/50">
        {date}
      </p>
    </div>
  );
}
