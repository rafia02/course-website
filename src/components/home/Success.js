"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import bg from "../../Assets/header/fly.png";

const Success = () => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Change threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-[450px] md:mt-60 mx-5 md:mx-8 mb-20" ref={counterRef}>
      <div className="flex flex-row  justify-center ">
        <div>
          <Image
            src={bg}
            className="w-10   mt-3 mx-auto"
            width={100}
            height={100}
            alt=""
          ></Image>
        </div>
        <div className=" my-5 font-bold text-4xl text-stone-700">
          Success of Learn Driving in 2023
        </div>
      </div>

      <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-8 md:gap-20">
        {/* Counter 1 */}
        <div className="text-center border-r-2 md:pr-16">
          <div className="flex items-center gap-2 text-[#FF6E76] justify-center">
            {inView && (
              <CountUp
                end={50}
                duration={3}
                className="text-3xl md:text-5xl font-bold "
              />
            )}
            <span className="text-3xl md:text-5xl font-bold"> M+</span>
          </div>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-[#033451]">
            Students
          </p>
        </div>

        {/* Counter 2 */}
        <div className="text-center border-r-2 md:pr-16">
          <div className="flex items-center gap-2 text-[#00B19E] justify-center">
            {inView && (
              <CountUp
                end={25}
                duration={3}
                className="text-3xl md:text-5xl font-bold "
              />
            )}
            <span className="text-3xl md:text-5xl font-bold"> M+</span>
          </div>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-[#033451]">
            Graduates
          </p>
        </div>

        {/* Counter 3 */}
        <div className="text-center border-r-2 md:pr-16">
          <div className="flex items-center gap-2 text-[#EBAE29] justify-center">
            {inView && (
              <CountUp
                end={20}
                duration={3}
                className="text-3xl md:text-5xl font-bold "
              />
            )}
            <span className="text-3xl md:text-5xl font-bold"> M+</span>
          </div>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-[#033451]">
            Courses
          </p>
        </div>

        {/* Counter 4 */}
        <div className="text-center border-r-2 md:pr-16">
          <div className="flex items-center gap-2 text-[#16C4EA] justify-center">
            {inView && (
              <CountUp
                end={50}
                duration={3}
                className="text-3xl md:text-5xl font-bold "
              />
            )}
            <span className="text-3xl md:text-5xl font-bold"> M+</span>
          </div>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-[#033451]">
            Success
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
