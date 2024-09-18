"use client"

import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Coursecarosel = () => {
   

      
  return (
    <div className="mx-5 md:mx-8">
    <h1 className="text-xl md:text-3xl text-primary font-semibold">
    Choose your courses
    </h1>
    <div className=" mt-9 border p-10 bg- mb-10 bgStyle rounded-lg">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px mr-1 md:mr-5"
        autoPlay={false} // Enable autoPlay
        autoPlaySpeed={2000} // Set autoPlay speed in milliseconds (e.g., 3 seconds)
      >
        <div className="border rounded-xl bg-white border-stone-300">
          <video className="w-full rounded-t-xl" controls>
            <source src="/myvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" px-2  py-5">
            <div className="flex items-center gap-2 text-secondary">
              <BiSolidCategory className="text-xl" />
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
              <h1 className="text-xs font-semibold">Category -B</h1>
            </div>
            <h1 className=" font-semibold my-5 text-primary">
              1.1 Easy Driving - 101 Exercise
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
      </Carousel>
    </div>
  </div>
  )
}

export default Coursecarosel