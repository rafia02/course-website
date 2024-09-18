"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SiComma } from "react-icons/si";

import Slider from "react-slick";
import Image from "next/image";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <div className="md:px-44 mx-5 pt-10">
      <Slider {...settings} className=" rounded-xl bg-white border shadow-slate-300 shadow-2xl">


        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
            <div className="flex justify-center flex-col">
              <div className="flex text-4xl mb-5">
                <SiComma className="text-primary " />
                <SiComma className="text-secondary " />
              </div>
              <p>
                Teachers answer questions through chat in live classes, which
                has benefited me a lot
              </p>
              <div className="mt-5 italic font-mono">
                <h3 className="">Abc Musk</h3>
                <p className="text-xs">Rajshahi University, Rajshahi</p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              className="w-full mx-auto h-32 md:h-56 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaPfquNtq7gJJfuNBeEfca5lUYEuw3skGHQ&s"
              alt=""
            ></Image>
          </div>
        </div>

    
  
        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
            <div className="flex justify-center flex-col">
              <div className="flex text-4xl mb-5">
                <SiComma className="text-primary " />
                <SiComma className="text-secondary " />
              </div>
              <p>
                Teachers answer questions through chat in live classes, which
                has benefited me a lot
              </p>
              <div className="mt-5 italic font-mono">
                <h3 className="">Abc Musk</h3>
                <p className="text-xs">Rajshahi University, Rajshahi</p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              className="w-full mx-auto h-32 md:h-56 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaPfquNtq7gJJfuNBeEfca5lUYEuw3skGHQ&s"
              alt=""
            ></Image>
          </div>
        </div>

   

        <div>
          <div className="grid p-7 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
            <div className="flex justify-center flex-col">
              <div className="flex text-4xl mb-5">
                <SiComma className="text-primary " />
                <SiComma className="text-secondary " />
              </div>
              <p>
                Teachers answer questions through chat in live classes, which
                has benefited me a lot
              </p>
              <div className="mt-5 italic font-mono">
                <h3 className="">Abc Musk</h3>
                <p className="text-xs">Rajshahi University, Rajshahi</p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              className="w-full mx-auto h-32 md:h-56 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaPfquNtq7gJJfuNBeEfca5lUYEuw3skGHQ&s"
              alt=""
            ></Image>
          </div>
        </div>
  


   

   


      </Slider>
    </div>
  );
};

export default Testimonial;
