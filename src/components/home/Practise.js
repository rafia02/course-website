import Image from 'next/image'
import React from 'react'

const Practise = () => {
  return (
    <div className="px-5  bgStyle3 md:px-10 py-20">
      {/* fst section  */}
      <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2">
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl md:text-3xl mb-7 font-semibold">
            Acquire standard driving skills through proper practice.
            </h1>
            <p className="text-justify">
            From very basic to advanced level you will learn step by step in our career tracks. For this, do real life projects, which will give you the confidence to work in the job and freelancing market.
            </p>
            <button className="bg-primary hover:bg-primary2 hover:scale-105 duration-500 font-semibold mt-7 text-white px-5 py-2  rounded">
              Learn more
            </button>
          </div>
        </div>
        <div>
          <Image height={100} width={500} src="https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-teacher-study-learning-png-image_9998804.png" className="w-3/4 mx-auto h-72" alt=""></Image>
        </div>
      </div>

      {/* 2nd section  */}

      <div className="grid grid-cols-1 mt-16 md:mt-28 gap-10 md:gap-20 md:grid-cols-2">
        <div>
          <video className="w-full h-full rounded-xl" controls>
            <source src="/myvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="">
          <div>
            <h2 className="text-xl mb-4 font-semibold">Complete driving test preparation</h2>
            <h1 className="text-2xl md:text-3xl mb-4 font-semibold">
            Let&apos;s start with Learn to Drive with this
            </h1>
            <p className="text-justify">
            Now wherever you are, nothing matters! Because everyone is learning and winning with Learn Drive, the most trusted driving learning organization in the country. But how? Watch the video next to know.
            </p>
            <button className="bg-primary hover:bg-primary2 hover:scale-105 duration-500 font-semibold mt-7 text-white px-5 py-2  rounded">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practise