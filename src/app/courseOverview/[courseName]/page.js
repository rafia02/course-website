import Image from "next/image";

import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
const CouserOverview = () => {
  return (
    <div>
      <div className="py-5  relative font-liador p-6 border border-solid bg-[rgba(247,247,247,0.50)] rounded-lg mb-5">
        <Image
          src={userBg}
          width={100}
          height={100}
          alt=""
          className="absolute left-0 top-0 z-10"
        />
        <div className="space-y-3 text-base font-light">
          <h2 className="mb-3 primary-text-color text-2xl font-liador font-semibold">
            Course Overview
          </h2>
          <p className=" text-2xl">Hello! Welcome to the course! </p>
          <p className="text-base font-light">
          Welcome to the course page! Here, you will find all the lecture videos for your course. We encourage you to visit this page daily and learn something new every day.
          </p>
          <p>Through this course, you will gain valuable insights into:</p>
          <ul className="list-disc ml-8">
            <li>Choosing the right career path.</li>
            <li>Finding job opportunities.</li>
          </ul>
          <strong>So, be sure to watch all the videos and complete the course!</strong>
          <p>To get the most out of this course:</p>
          <ul className="list-decimal ml-8">
            <li>Watch each video attentively.</li>
            <li>
            Don’t just watch—take notes! Because the best way to learn is by doing.
            </li>
          </ul>
          <p>
          Join our active community group to ask questions, answer others’ questions, and share your certificate after finishing the course
          </p>
        
        </div>
        <Image
          src={userBg2}
          width={100}
          height={100}
          alt=""
          className="absolute right-0 bottom-0 z-10"
        />
      </div>
    </div>
  );
};

export default CouserOverview;
