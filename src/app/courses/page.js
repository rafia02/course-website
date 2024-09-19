import Image from "next/image";
import React from "react";
import bg from "../../Assets/header/imgbg.png";
import CustomInput from "@/components/Courses/CustomInput";

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
    <div className="">
      <div className="bg h-72 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">All of our online courses</h1>
        <p className=" mt-3">
          Choose the course of your choice and become self-reliant by acquiring
          skills.
        </p>
      </div>

      <div className="flex px-10">
        <div className="w-3/12">
          <div>
            <h3 className="mb-7">Course Type</h3>



<CustomInput></CustomInput>







            {/* <div className="flex flex-col gap-2">
            
              <div className="flex gap-4 items-center">
                <input className="h-[18px] w-[18px]  custom-checkbox" type="checkbox"></input>
                <p className=" font-semibold">Development</p>
              </div>
              <div className="flex gap-4 items-center">
                <input className="h-[18px] w-[18px]  custom-checkbox" type="checkbox"></input>
                <p className=" font-semibold">Development</p>
              </div>
              <div className="flex gap-4 items-center">
                <input className="h-[18px] w-[18px]  custom-checkbox" type="checkbox"></input>
                <p className=" font-semibold">Development</p>
              </div>
              <div className="flex gap-4 items-center">
                <input className="h-[18px] w-[18px]  custom-checkbox" type="checkbox"></input>
                <p className=" font-semibold">Development</p>
              </div>
              <div className="flex gap-4 items-center">
                <input className="h-[18px] w-[18px]  custom-checkbox" type="checkbox"></input>
                <p className=" font-semibold">Development</p>
              </div>



            </div> */}
          </div>
        </div>
        <div className="w-9/12 border-4 flex-1">dddd</div>
      </div>
    </div>
  );
};

export default CoursesPage;
