"use client";

import React, { useState } from "react";
import icon1 from "../../Assets/Landing/course/icon1.png";
import icon2 from "../../Assets/Landing/course/icon2.png";
import icon3 from "../../Assets/Landing/course/icon3.png";
import icon4 from "../../Assets/Landing/course/icon4.png";
import icon5 from "../../Assets/Landing/course/icon5.png";
import icon6 from "../../Assets/Landing/course/icon6.png";
import icon7 from "../../Assets/Landing/course/icon7.png";
import banner1 from "../../Assets/Landing/course/banner1.png";
import banner2 from "../../Assets/Landing/course/banner2.png";
import Image from "next/image";

const BetweenCourse = () => {
  const [show, setShow] = useState("Live & Recorded Classes");
  return (
    <div className="bgStyle2 mt-24 px-5 py-10 md:px-10">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Everything is in our course
        </h1>
        <p className=" md:text-lg mt-3 mb-14 text-center text-white">
          Our courses have everything you need to keep you ahead of the curve in
          driving lessons
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-8 md:gap-6">
        {/* fst */}
        <div className="md:w-4/12 flex flex-col gap-5">
          <button
            onClick={() => setShow("Live & Recorded Classes")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon1} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg ">Live & Recorded Classes</p>
          </button>
          <button
            onClick={() => setShow("Animated Video")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon2} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg">Animated Video</p>
          </button>
          <button
            onClick={() => setShow("Practice MCQ Test")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon3} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg">Practice MCQ Test</p>
          </button>
          <button
            onClick={() => setShow("Live MCQ Test")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon4} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg">Live MCQ Test</p>
          </button>
          <button
            onClick={() => setShow("Class Note")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon5} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg">Class Note</p>
          </button>
          <button
            onClick={() => setShow("Smart Note")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon6} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg">Smart Note</p>
          </button>
          <button
            onClick={() => setShow("Report Card")}
            className="flex focus:border-secondary text-primary focus:text-white focus:bg-secondary focus:border outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded"
          >
            <Image src={icon7} height={40} width={40} alt=""></Image>
            <p className="font-semibold md:text-lg">Report Card</p>
          </button>
        </div>

        {/* 2nd */}
        <div className="md:w-8/12">
          {show === "Live & Recorded Classes" && (
            <Image
              src={banner1}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
          {show === "Animated Video" && (
            <Image
              src={banner2}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
          {show === "Practice MCQ Test" && (
            <Image
              src='https://www.uniquegroupspvt.ltd/content/images/online-test-series.png'
              height={100}
              width={500}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
          {show === "Live MCQ Test" && (
            <Image
              src={banner1}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
          {show === "Class Note" && (
            <Image
              src={banner2}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
          {show === "Smart Note" && (
            <Image
              src={banner1}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
          {show === "Report Card" && (
            <Image
              src={banner2}
              className="w-full h-full md:h-[515px]"
              alt=""
            ></Image>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetweenCourse;
