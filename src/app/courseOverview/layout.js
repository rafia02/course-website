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

const CourseOverviewLayout = ({ children }) => {
  return (
    <section className="my-[50px] px-5 md:px-8">
      <div className="mb-10  flex items-center gap-4">
        <h2 className="text-transparent  bg-loginButton bg-clip-text text-[30px] font-semibold">
        1.1 Easy Driving - 101 Exercises
        </h2>
        <p className="flex items-center gap-2">
          {" "}
          <span className="w-5 h-5 rounded-full inline-block bg-secondaryGradiant"></span>{" "}
          Catagory- B
        </p>
      </div>
      <div className="flex max-h-fit justify-between overflow-hidden  scrollbar-hide container  gap-5">
        <div className="relative font-liador h-fit overflow-y-auto  w-[413px]">
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
        <main className={`flex-1 `}>
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
                <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-[#B0B0B0] rounded">
                  <FaArrowLeft /> Previous topic
                </button>
              </div>
              <div>
                <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-loginButton rounded">
                  Mark As Complete
                  <FaRegCheckCircle />
                </button>
              </div>
              <div>
                <button className="px-4 text-base flex items-center gap-2 text-white font-semibold py-3 bg-primaryGradiant rounded">
                Next topic <FaArrowRight />
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
