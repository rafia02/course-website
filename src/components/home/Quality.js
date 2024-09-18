import React from "react";
import { TbAccessible } from "react-icons/tb";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const Quality = () => {
  return (
    <div className=" mb-10 mx-5 md:mx-8 rounded-xl px-5 py-10 bg-gradient-to-r from-fuchsia-900 via-primary to-fuchsia-900">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center">
        <div className="flex text-white items-center gap-3">
          <MdOutlineEmojiEmotions className="md:w-16 w-12 h-12 md:h-16" />
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">
              Top Instructor in over World
            </h1>
            <p className="text-sm md:text-md">Watch Video Anywhere</p>
          </div>
        </div>

        <div className="flex text-white items-center gap-4">
          <TbAccessible className="md:w-16 w-12 h-12 md:h-16" />
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">
              Enjoy Lifetime Access
            </h1>
            <p className="text-sm md:text-md">Watch Video Anywhere</p>
          </div>
        </div>

        <div className="flex text-white items-center gap-3">
          <IoMdTime className="md:w-16 w-12 h-12 md:h-16" />
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">Made your own Career</h1>
            <p className="text-sm md:text-md">Watch Video Anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
