import { BigQuote } from "@/libs/SVG";
import Image from "next/image";

interface ReviewCardProps {
  imgURL: string;
  title: string;
  description: string;
  userName: string;
  userType: string;
}

export default function WhyTrust() {
  return (
    <section className="w-full bg-white mb-[36px]">
      <div className="max-w-[1440px] w-full py-[48px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-[54px]">
          <div className="bg-secondary rounded-full py-[14px] px-5 border-[2px] border-white shadow-md font-satoshi font-bold text-[16px] leading-[12px] text-primary tracking-[-1px]">
            Why Trust SocialPlug?
          </div>
          <h2 className="font-h2">
            Real Results from
            <span className="text-[32px] text-primary"> Real People</span>
          </h2>
          <p className="font-satoshi font-normal text-[16px] leading-[18px] text-black opacity-70">
            No bots. No shadowbans. Just real growth stories from real
            customers.
          </p>
        </div>
        <div className="flex mb-5">
          <ReviewCard
            imgURL="/img/review_img_1.png"
            title="No Shadownban after 3 months!"
            description="It’s been over 3 months and I haven’t had any shadowban issues since using this. My reach is steady, engagement’s up, and I’m finally growing without random drops."
            userName="Sarah M."
            userType="Fashion Blogger"
          />
          <ReviewCard
            imgURL="/img/review_img_2.png"
            title="Didn't even need my password. So much safer than other sites"
            description="dn’t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
            userName="Mike D."
            userType="Musician"
          />
        </div>
        <div className="flex mb-5">
          <ReviewCard
            imgURL="/img/review_img_1.png"
            title="No Shadownban after 3 months!"
            description="It’s been over 3 months and I haven’t had any shadowban issues since using this. My reach is steady, engagement’s up, and I’m finally growing without random drops."
            userName="Sarah M."
            userType="Fashion Blogger"
          />
          <ReviewCard
            imgURL="/img/review_img_2.png"
            title="Didn't even need my password. So much safer than other sites"
            description="dn’t even need to share my password, which instantly felt way safer than other services. Everything just worked without risking my account."
            userName="Mike D."
            userType="Musician"
          />
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
    <div className="bg-background-light w-[640px] h-[340px] rounded-[16px] border-[2px] border-white flex gap-4 p-4 ml-5 shadow-xl">
      <Image src={imgURL} width={250} height={305} alt="review_img" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          {BigQuote}
          <div className="flex flex-col gap-4">
            <p className="font-clash font-semibold text-[20px] text-black leading-[25px]">
              {title}
            </p>
            <p className="font-satoshi font-medium text-[18px] leading-[25px] text-black">
              {description}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-satoshi font-bold text-[24px] leading-[30px] text-black">
            {userName}
          </p>
          <div className="w-[18px] h-[18px] m-auto">
            <div className="w-[8px] h-[8px] bg-black rounded-full opacity-20"></div>
          </div>
          <p className="font-satoshi font-medium text-[18px] leading-[25px] text-black opacity-60">
            {userType}
          </p>
        </div>
      </div>
    </div>
  );
}
