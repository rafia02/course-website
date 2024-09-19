"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SiComma } from "react-icons/si";

import Slider from "react-slick";
import Image from "next/image";

import img2 from "../../Assets/Landing/hero/hero1.png";
import img1 from "../../Assets/Landing/hero/hero2.png";
import img3 from "../../Assets/Landing/hero/hero3.png";
import img4 from "../../Assets/Landing/hero/hero4.png";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 8000,
  arrows: false,
};

const Hero = () => {
  return (

    
    <div className="mb-20">
      <Slider {...settings} className="">
        {/* 1st */}

        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-10">
            <div className="flex justify-center flex-col">
              <div className="flex items-center tx gap-2 text-primary mb-5">
                <span className="   text-2xl font-bold">Drive Master </span>
                <span className="  text-2xl"> online learning platform</span>
              </div>
              <div className="flex gap-2 font-bold text-4xl mb-5">
                <span className="text-secondary">Category-B </span>
                <span className="text-primary"> Driving Learn Here</span>
              </div>
              <p className="text-[#313761]">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="mt-5 flex gap-5">
                <button className="bg-secondary hover:text-secondary border-2 border-secondary hover:border-secondary hover:bg-red-50 duration-500 font-semibold mt-7 text-white px-5 py-2  rounded">
                  Learn more
                </button>
                <button className="hover:border-primary  text-secondary border-2 border-secondary duration-500 font-semibold mt-7 hover:text-primary px-5 py-2  rounded">
                  Learn more
                </button>
              </div>
            </div>
            <Image
              className="w-full mx-auto h-[400px] pl-20  rounded-xl"
              src={img1}
              alt=""
            ></Image>
          </div>
        </div>

        {/* 2nd  */}
        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-10">
            <div className="flex justify-center flex-col">
              <div className="flex items-center tx gap-2 text-primary mb-5">
                <span className="   text-2xl font-bold">Drive Master </span>
                <span className="  text-2xl"> online learning platform</span>
              </div>
              <div className="flex gap-2 font-bold text-4xl mb-5">
                <span className="text-secondary">Category-B </span>
                <span className="text-primary"> Driving Learn Here</span>
              </div>
              <p className="text-[#313761]">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="mt-5 flex gap-5">
                <button className="bg-secondary hover:text-secondary border-2 border-secondary hover:border-secondary hover:bg-red-50 duration-500 font-semibold mt-7 text-white px-5 py-2  rounded">
                  Learn more
                </button>
                <button className="hover:border-primary  text-secondary border-2 border-secondary duration-500 font-semibold mt-7 hover:text-primary px-5 py-2  rounded">
                  Learn more
                </button>
              </div>
            </div>
            <Image
              className="w-full mx-auto h-[400px] pl-20  rounded-xl"
              src={img3}
              alt=""
            ></Image>
          </div>
        </div>

        {/* 3rd  */}
        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-10">
            <div className="flex justify-center flex-col">
              <div className="flex items-center tx gap-2 text-primary mb-5">
                <span className="   text-2xl font-bold">Drive Master </span>
                <span className="  text-2xl"> online learning platform</span>
              </div>
              <div className="flex gap-2 font-bold text-4xl mb-5">
                <span className="text-secondary">Category-B </span>
                <span className="text-primary"> Driving Learn Here</span>
              </div>
              <p className="text-[#313761]">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="mt-5 flex gap-5">
                <button className="bg-secondary hover:text-secondary border-2 border-secondary hover:border-secondary hover:bg-red-50 duration-500 font-semibold mt-7 text-white px-5 py-2  rounded">
                  Learn more
                </button>
                <button className="hover:border-primary  text-secondary border-2 border-secondary duration-500 font-semibold mt-7 hover:text-primary px-5 py-2  rounded">
                  Learn more
                </button>
              </div>
            </div>
            <Image
              className="w-full mx-auto h-[400px] pl-20  rounded-xl"
              src={img4}
              alt=""
            ></Image>
          </div>
        </div>

        {/* 4th  */}
        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-10">
            <div className="flex justify-center flex-col">
              <div className="flex items-center tx gap-2 text-primary mb-5">
                <span className="   text-2xl font-bold">Drive Master </span>
                <span className="  text-2xl"> online learning platform</span>
              </div>
              <div className="flex gap-2 font-bold text-4xl mb-5">
                <span className="text-secondary">Category-B </span>
                <span className="text-primary"> Driving Learn Here</span>
              </div>
              <p className="text-[#313761]">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="mt-5 flex gap-5">
                <button className="bg-secondary hover:text-secondary border-2 border-secondary hover:border-secondary hover:bg-red-50 duration-500 font-semibold mt-7 text-white px-5 py-2  rounded">
                  Learn more
                </button>
                <button className="hover:border-primary  text-secondary border-2 border-secondary duration-500 font-semibold mt-7 hover:text-primary px-5 py-2  rounded">
                  Learn more
                </button>
              </div>
            </div>
            <Image
              className="w-full mx-auto h-[400px] pl-20  rounded-xl"
              src={img2}
              alt=""
            ></Image>
          </div>
        </div>



      </Slider>
    </div>
  );
};

export default Hero;
