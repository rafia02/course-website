import Image from "next/image";
import React from "react";
import Testimonial from "./Testimonial";

const WhyTrust = () => {
  return (

      <div className=" bgStyle4 px-5 my-20 pt-10 md:pt-20 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-64 justify-evenly">
          {/* fst  */}
          <div className="text-gray-200">
            <h1 className="text-2xl  font-bold">Why you can trust us?</h1>
            <p className="mt-5 ">
              Drive Shikhun is a reliable organization for quality education and
              driving test preparation for 10 lakh+ people across the country
              with the best mentors and latest technology!
            </p>
          </div>
          {/* 2nd  */}

          <div className="md:flex md:flex-col md:items-end">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white px-2 md:px-5 py-2 md:gap-3 flex justify-evenly md:justify-start items-center text-primary rounded-lg  ">
                <Image
                  className="h-8 w-8"
                  width={100}
                  height={10}
                  src="/Assets/tust/luxury.png"
                ></Image>
                <div className="text-sm">
                  <polygon>Best</polygon>
                  <p> Content</p>
                </div>
              </div>

              <div className="bg-white px-2 md:px-5 py-2 md:gap-3 flex justify-evenly md:justify-start items-center text-primary rounded-lg  ">
                <Image
                  className="h-8 w-8"
                  width={100}
                  height={10}
                  src="/Assets/tust/luxury.png"
                ></Image>
                <div className="text-sm">
                  <polygon>Easy Study</polygon>
                  <p>Material</p>
                </div>
              </div>

              <div className="bg-white px-2 md:px-5 py-2 md:gap-3 flex justify-evenly md:justify-start items-center text-primary rounded-lg  ">
                <Image
                  className="h-8 w-8"
                  width={100}
                  height={10}
                  src="/Assets/tust/luxury.png"
                ></Image>
                <div className="text-sm">
                  <polygon>Everything</polygon>
                  <p>in Low Cost</p>
                </div>
              </div>

              <div className="bg-white px-2 md:px-5 py-2 md:gap-3 flex justify-evenly md:justify-start items-center text-primary rounded-lg  ">
                <Image
                  className="h-8 w-8"
                  width={100}
                  height={10}
                  src="/Assets/tust/luxury.png"
                ></Image>
                <div className="text-sm">
                  <polygon>Fluent</polygon>
                  <p>Presentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
     <Testimonial></Testimonial>


      </div>






  );
};

export default WhyTrust;
