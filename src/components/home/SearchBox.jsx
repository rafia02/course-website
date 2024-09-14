import React from 'react'
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const GenericCategories = ["100", "15", "8825", "1122"];

const SearchBox = () => {
  return (
    <div className="border-4 my-20 border-primary rounded-3xl px-5 mx-5 fem md:mx-8 py-7">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
      {/* fst  */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MdOutlineCheckCircleOutline className="text-[47px] bg-primary text-white p-1 rounded-full" />
          <p className="text-sm md:text-xl font-semibold text-primary">
          Select Country
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineCheckCircleOutline className="text-[47px] bg-secondary text-white p-1 rounded-full" />
          <p className="text-sm md:text-xl font-semibold text-primary">
          Select Course
          </p>
        </div>
      </div>

      {/* 2nd  */}
      <div className="flex gap-5">
        <select
          name="course"
          className="border-2 border-stone-300 p-2 w-full text-sm focus:outline-none rounded-lg"
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
        <button className="border-2 rounded-lg border-stone-300 px-6 py-2">
          Search
        </button>
      </div>
    </div>
  </div>
  )
}

export default SearchBox