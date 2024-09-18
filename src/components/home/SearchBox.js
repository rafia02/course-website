import React from 'react'
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const GenericCategories = ["100", "15", "8825", "1122"];

const SearchBox = () => {
  return (
    <div className="relative my-20 p-1 mx-5  md:mx-8  bg-gradient-to-r from-primary to-secondary rounded-xl ">
    <div className='bg-white p-6 rounded-lg'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
      {/* fst  */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MdOutlineCheckCircleOutline className="w-8 h-8 bg-primary text-white p-1 rounded-full" />
          <p className="text-sm md:text-xl font-semibold text-primary">
          Select Country
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineCheckCircleOutline className="w-8 h-8 bg-secondary text-white p-1 rounded-full" />
          <p className="text-sm md:text-xl font-semibold text-primary">
          Select Course
          </p>
        </div>
      </div>

      {/* 2nd  */}
      <div className="flex gap-5">
        <select
          name="course"
          className="border-[1px] border-primary2 p-2 w-full text-sm focus:outline-none rounded-lg"
        >
          <option value="" disabled selected>
            Enter Your subject
          </option>

          {GenericCategories?.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button className="border-2 rounded-lg bg-secondary text-white font-semibold px-6 py-2">
          Search
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default SearchBox