import Image from "next/image";
import Link from "next/link";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import score from "/public/assets/CourseOverview/score.png";
import LinkIcon from "/public/assets/CourseOverview/link.svg";
import assignment from "/public/assets/CourseOverview/assignment.svg";
import PrimaryButton from "@/components/shared/CommonButton";

const AssignmentOverview = () => {
  return (
    <div className="py-5 font-liador relative px-[30px] border border-solid bg-white  rounded-lg">
      <Image
        src={userBg}
        width={100}
        height={107}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      {/* top part */}
      <div className=" w-full flex flex-col md:flex-row justify-between mb-12  relative z-50">
        <div className="flex gap-3 items-center">
          <Image width={36} height={36} src={assignment} alt="" />
          <div>
            <h3 className="font-semibold text-3xl  text-transparent bg-loginButton bg-clip-text">
              Assignment-1
            </h3>
            <p className="text-base">
              Last date for submission -{" "}
              <span className="text-[#FF0000]">Sat 11 Nov 10:00 pm</span>
            </p>
          </div>
        </div>
        <div className="text-right">
          <Image
            className="ml-auto"
            width={32}
            height={32}
            src={score}
            alt=""
          />
          <div>
            <p className="text-lg">Total score</p>
            <h3 className="font-semibold text-2xl primary-text-color ">
              <span className="second-text-color">50</span> Marks
            </h3>
          </div>
        </div>
      </div>
      {/* Assignment subject */}
      <div>
        <h2 className="font-semibold text-xl mb-2 primary-text-color">
        The subject of the assignment
        </h2>
        <h3 className="bg-[#F7F7F7] py-3 px-4 border border-solid border-black/30 rounded">
        Description of driving instructions and roadside signals.
        </h3>
      </div>
      {/* Upload file */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="bg-[rgba(247,247,247,0.50)] px-[30px] py-6 border border-solid border-[rgba(0,0,0,0.30)] rounded-lg">
          <p className="second-text-color text-xl font-semibold mb-5">
          Your file has been uploaded
          </p>
          {/* need to change div to form  */}
          <div>
            <div className="relative border w-full border-solid text-black/30  border-[#2B388F] pl-4 py-1 rounded">
              <label htmlFor="file" className=" text-[12px] ">
                Drop or Upload your file...
              </label>
              <input type="file" name="file" id="file" class="hidden " />
              <button className="px-5 py-1 border bg-primaryGradiant text-white rounded border-solid border-[#2B388F] absolute top-0 right-0 h-full uppercase text-[12px] font-semibold">
                upload
              </button>
            </div>
            <p className="text-[10px] text-black/50">
              * Insert your shareable file link
            </p>
          </div>
        </div>
        <div className="bg-[rgba(247,247,247,0.50)] px-[30px] py-6 border border-solid border-[rgba(0,0,0,0.30)] rounded-lg">
          <p className="second-text-color text-xl font-semibold mb-5">
          Your file has been uploaded
          </p>
          {/* need to change div to form  */}
          <div>
            <div className="relative">
              <input
                className="border w-full border-solid text-black/30 text-[12px] border-[#2B388F] pl-4 py-1 rounded"
                type="text"
                placeholder="Share your file link..."
              />

              <div className="absolute top-1/2 -translate-y-1/2 right-4 uppercase text-[30px] font-semibold">
                <Image src={LinkIcon} alt="link" />
              </div>
            </div>
            <p className="text-[10px] text-black/50">
              * Insert your shareable file link
            </p>
          </div>
        </div>
      </div>
      <p className="text-center primary-text-color font-semibold mt-5">
      Check the assignment details
      </p>

      {/* Button */}
      <Link href={"/courseOverview/assignment/startAssignment01"}>
        <PrimaryButton value={"Submit"} />
      </Link>
      <Image
        src={userBg2}
        width={100}
        height={107}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default AssignmentOverview;
