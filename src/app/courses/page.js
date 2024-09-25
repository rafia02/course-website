import Image from "next/image";
import React from "react";
import bg from "../../Assets/header/imgbg.png";
import CustomInput from "@/components/Courses/CustomInput";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Pricing from "@/components/Courses/Pricing";

const coursesData = [
  { id: 1, title: "React Basics", category: "Development" },
  {
    id: 2,
    title: "Advanced WordPress Development",
    category: "WordPress Development",
  },
  { id: 3, title: "Algebra and Geometry", category: "Math Learning" },
  { id: 4, title: "English Grammar Essentials", category: "English Learning" },
  { id: 5, title: "Full-Stack Development", category: "Development" },
];

const CoursesPage = () => {
  return (
    <div className="mb-20">
      <div className="bg h-72  flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl md:text-4xl  mx-5 font-bold text-center">All of our online courses</h1>
        <p className="text-center mx-5 mt-3">
          Choose the course of your choice and become self-reliant by acquiring
          skills.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 md:mt-16">
        {/* fst colorm  */}
        <div className="w-full md:w-3/12 border-r-[0.5px] border-r-secondary px-7">
          {/* type  */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-5">Course Type</h3>
            <CustomInput></CustomInput>
          </div>
          {/* catagory  */}
          <div className="mt-5">
            <h3 className="text-xl font-bold text-primary mb-5">Catagory</h3>
            <CustomInput></CustomInput>
          </div>
        </div>

        {/* 2nd coloumn */}
        <div className="w-full md:w-9/12 px-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border rounded-xl bg-white border-stone-300">
              <video className="w-full rounded-t-xl" controls>
                <source src="/myvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" px-2  py-5">
                <div className="flex items-center gap-2 text-secondary">
                  <BiSolidCategory className="text-xl" />
                  <p className="text-xs font-semibold">Category -B</p>
                </div>
                <h1 className=" font-semibold my-5 text-primary">
                 Fundamentals of Driving
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <MdOutlinePlayCircleOutline className="text-2xl text-secondary" />
                    <p className="text-xs font-semibold text-primary">
                      672 Lession
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaRegUserCircle className="text-xl text-secondary" />
                    <p className="text-xs font-semibold text-primary">
                      67 Enrolment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-xl bg-white border-stone-300">
          <video className="w-full rounded-t-xl" controls>
            <source src="/myvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" px-2  py-5">
            <div className="flex items-center gap-2 text-secondary">
              <BiSolidCategory className="text-xl" />
              <p className="text-xs font-semibold">Category -B</p>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
             Fundamentals of Driving
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <MdOutlinePlayCircleOutline className="text-2xl text-secondary" />
                <p className="text-xs font-semibold text-primary">
                  672 Lession
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegUserCircle className="text-xl text-secondary" />
                <p className="text-xs font-semibold text-primary">
                  67 Enrolment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-xl bg-white border-stone-300">
          <video className="w-full rounded-t-xl" controls>
            <source src="/myvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" px-2  py-5">
            <div className="flex items-center gap-2 text-secondary">
              <BiSolidCategory className="text-xl" />
              <p className="text-xs font-semibold">Category -B</p>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
             Fundamentals of Driving
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <MdOutlinePlayCircleOutline className="text-2xl text-secondary" />
                <p className="text-xs font-semibold text-primary">
                  672 Lession
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegUserCircle className="text-xl text-secondary" />
                <p className="text-xs font-semibold text-primary">
                  67 Enrolment
                </p>
              </div>
            </div>
          </div>
        </div>


          </div>
        </div>
      </div>



      <Pricing></Pricing>
    </div>
  );
};

export default CoursesPage;
