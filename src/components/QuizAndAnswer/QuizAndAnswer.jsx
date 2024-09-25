import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../shared/CommonButton";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import QA1 from "/public/assets/CourseOverview/qa1.png";
import QA2 from "/public/assets/CourseOverview/qa2.png";
import clock from "/public/assets/CourseOverview/clock.png";
import score from "/public/assets/CourseOverview/score.png";
const QuizAndAnswer = () => {
  return (
    <div className="py-10 font-liador relative px-20 border border-solid bg-[rgba(247,247,247,0.50)]  rounded-lg">
      <Image
        src={userBg}
        width={150}
        height={160}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className=" w-full flex justify-center items-center flex-col relative z-50">
        <Image width={100} height={100} src={QA1} alt="" />
        <h3 className="font-semibold text-[32px] text-transparent bg-loginButton bg-clip-text mt-6">
          Quiz - 1
        </h3>
        <p className="text-base">Sat Nov 11 at 10:00 PM</p>
        <div className="flex justify-around w-full   items-center py-4 my-[21px] border border-solid border-[rgba(0,0,0,0.30)] bg-[rgba(247,247,247,0.50)] rounded-lg">
          <div className="flex justify-center flex-col items-center">
            <Image width={32} height={32} src={QA2} alt="" />
            <h4 className="text-lg text-black ">Total Question</h4>
            <h2 className="font-semibold text-[30px]">
              <span className="text-transparent bg-primaryGradiant bg-clip-text text-2xl">10</span>{" "}
              <span className="text-transparent bg-secondaryGradiant bg-clip-text text-2xl">Question</span>
            </h2>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Image width={32} height={32} src={score} alt="" />
            <h4 className="text-lg text-black ">Total Score</h4>
            <h2 className="font-semibold text-[30px]">
              <span className="text-transparent bg-primaryGradiant bg-clip-text text-2xl">20</span>{" "}
              <span className="text-transparent bg-secondaryGradiant bg-clip-text text-2xl">Mark</span>
            </h2>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Image width={32} height={32} src={clock} alt="" />
            <h4 className="text-lg text-black ">Quiz time</h4>
            <h2 className="font-semibold text-[30px]">
              <span className="text-transparent bg-primaryGradiant bg-clip-text text-2xl">20.00</span>{" "}
              <span className="text-transparent bg-secondaryGradiant bg-clip-text text-2xl">Minute</span>
            </h2>
          </div>
        </div>
        <p className="text-transparent bg-primaryGradiant bg-clip-text text-2xlfont-semibold text-base">
        Check out the quiz rules
        </p>
        <Link className="w-full block" href={"/courseOverview/quiz/01quiz"}>
          <PrimaryButton value="Start" />
        </Link>
      </div>
      <Image
        src={userBg2}
        width={150}
        height={160}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default QuizAndAnswer;
