"use client";
import { IoPlayCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import Image from "next/image";
import CoruseNavItem from "@/components/CourseOverview/CoruseNavItem";
import CourseProgress from "@/components/CourseOverview/CourseProgress";
import { BiSolidCategory } from "react-icons/bi";

const CourseOverviewLayout = ({ children }) => {
  return (
    <section className="my-12 px-5 md:px-8">
      <div className="flex mb-10 flex-col-reverse md:flex-row items-start md:items-center gap-3">
        <h2 className="text-[28px] text-primary font-bold">
          Easy to Learn React Development
        </h2>
        <div>
          <button className=" bg-secondary w-[130px] py-1 md:py-[6px] text-white px-3 md:px-4 rounded-[20px] flex items-center gap-2">
            <BiSolidCategory className="md:text-lg" />
            <p className="text-xs font-semibold">Category - B</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between overflow-hidden  scrollbar-hide  gap-5">
        <div className="relative font-liador h-fit overflow-y-auto  md:w-[413px]">
          <div
            className={`bg-[#F2F2F2] transition-all duration-300 p-6 relative h-[838px] overflow-y-auto  rounded-lg border border-solid border-black/30`}
          >
            <h4 className="text-2xl font-semibold pb-1 primary-text-color mb-6 border-b border-solid border-[#CE2786]">
              Course content
            </h4>
            <ul className="flex flex-col gap-4 ">
              <CoruseNavItem
                CheckIcon={FaCheckCircle}
                isUnlock={true}
                Icon={IoPlayCircle}
                title={"Course Overview"}
                href={"/courseOverview"}
              />
            </ul>
          </div>
        </div>
        <main className={`md:flex-1 `}>
          <CourseProgress />
          <div className=" xl:h-[56%] 2xl:h-[57%] overflow-y-auto scrollbar-hide ">
            {children}
          </div>
          <div className="py-5  relative font-liador p-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mt-5 ">
            <Image
              src={userBg}
              width={77}
              height={80}
              alt=""
              className="absolute left-0 top-0 z-10"
            />
            <div className="flex justify-between relative z-50">
              <div>
                <button className="px-2 md:px-4 text-xs md:text-base flex items-center gap-[3px] md:gap-2 text-white font-semibold py-2 md:py-3 bg-[#B0B0B0] rounded">
                  <FaArrowLeft /> Previous 
                </button>
              </div>
              <div>
                <button className="px-2 md:px-4 text-xs md:text-base flex items-center gap-[3px] md:gap-2 text-white font-semibold py-2 md:py-3 bg-loginButton rounded">
                  Mark As Complete
                  <FaRegCheckCircle />
                </button>
              </div>
              <div>
                <button className="px-2 md:px-4 text-xs md:text-base flex items-center gap-[3px] md:gap-2 text-white font-semibold py-2 md:py-3 bg-primaryGradiant rounded">
                  Next  <FaArrowRight />
                </button>
              </div>
            </div>
            <Image
              src={userBg2}
              width={77}
              height={80}
              alt=""
              className="absolute right-0 bottom-0 z-10"
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default CourseOverviewLayout;
