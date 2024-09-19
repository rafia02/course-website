import React from "react";
import bg from "../../Assets/header/radio.svg";

const coursesData = [
  { id: 1, title: "React Basics", category: "Development" },
  { id: 2, title: "Advanced WordPress Development", category: "WordPress Development" },
  { id: 3, title: "Algebra and Geometry", category: "Math Learning" },
  { id: 4, title: "English Grammar Essentials", category: "English Learning" },
  { id: 5, title: "Full-Stack Development", category: "Development" },
];

const CustomInput = () => {
  return (
    <div className="flex flex-col gap-5">
      {coursesData.map((course) => (









        <div key={course.id} className="flex gap-2 items-center">
          <input
            className="h-[18px] w-[18px] custom-radio"
            type="radio"
            name="courseType"
          />
          <p className="font-semibold">{course.category}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomInput;
