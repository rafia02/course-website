"use client";
import Autoplay from "/public/assets/dashboard/MyCourse/autoplay.svg";
import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { Progress } from "@nextui-org/react";
const CourseProgress = () => {
  return (
    <div className="py-5  relative  px-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mb-5">
      <Image
        src={userBg}
        width={100}
        height={100}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className="flex justify-between relative z-50 mb-6">
        <div className="flex gap-6 items-center border-b border-solid w-[497px] border-[#CE2786]">
          <h3 className="text-sm md:text-2xl font-semibold primary-text-color">
          Progress
          </h3>
          <div className="flex gap-1 items-center">
            <Image src={Autoplay} alt="" />
            <p className="text-xs md:text-lg">
              <span className="primary-text-color">12</span>{" "}
              <span className="second-text-color">/ 13</span>
            </p>
          </div>
          <p className="primary-text-color text-xs md:text-lg">95% Complete</p>
        </div>
        <div className="">
          <button className="px-2 md:px-6 text-xs bg-[#B9B9B9] text-white py-2 md:py-3 rounded">
          Certificate
          </button>
        </div>
      </div>

      <Progress
        classNames={{
          base: "max-w-full",
          track: "drop-shadow-md border border-default",
          indicator: "bg-linearGradiant",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        aria-label="Loading..."
        value={93}
      />

      <Image
        src={userBg2}
        width={100}
        height={100}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default CourseProgress;
