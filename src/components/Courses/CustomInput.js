"use client"
import React, { useState } from "react";


const coursesData = [
  { id: 1, title: "React Basics", category: "Development" ,  types:["MEARN", "Front End", "Back End"]},
  {id: 2,title: "Advanced WordPress Development", category: "WordPress Development", types:[]},
  { id: 3, title: "Algebra and Geometry", category: "Math Learning" ,  types:["Kids", "General"]},
  { id: 4, title: "English Grammar Essentials", category: "English Learning" ,  types:["Kids", "Basic"]},
  { id: 5, title: "Full-Stack Development", category: "Skills" ,  types:["Design", "Marketing" ]},
];

const CustomInput = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  console.log(selectedCategory)

  return (
    <div className="flex flex-col gap-5 pb-5 border-b-[0.5px] border-b-secondary">
      {coursesData.map((course) => (
        <div key={course.id} className="flex gap-2 items-center">
          <input
            className="h-[18px] w-[18px] custom-radio"
            type="radio"
            name="courseType"
            value={course.category} // Set the value to the category
            onChange={handleRadioChange}
          />
          <p className="font-semibold text-sm text-primary">{course.category}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomInput;
