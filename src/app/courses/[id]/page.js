import Image from "next/image";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";

const CourseDetailsPage = () => {
  return (
    <div className="mb-20 mt-7 md:mt-10 mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1st  */}
        <div className="">
          <div className="flex  flex-col-reverse md:flex-row items-start md:items-center gap-3">
            <h2 className="text-[28px] text-primary font-bold">
              Easy to Learn React Development
            </h2>
            <div>
              <button className=" bg-secondary w-[130px] py-1 md:py-[6px] text-white px-3 md:px-4 rounded-[20px] flex items-center gap-2">
                <BiSolidCategory className="md:text-lg" />
                <p className="text-xs font-semibold">Category - B</p>
              </button>
            </div>
          </div>

          <p className="mt-5 text-primary">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from de
            Finibus Bonorum et Malorum by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham
          </p>

          <Image
            height={50}
            width={500}
            className="w-full h-64 mt-7"
            alt=""
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
        </div>
        {/* 2nd  */}
        <div>
          <div className="border px-7 py-5 rounded-lg border-[#0000004D]">
            <div>
              <h2 className="text-[22px] text-primary font-semibold">
                What is in this course
              </h2>

              <div className="grid mt-5 grid-cols-1 md:grid-cols-2 gap-5 text-lg">
                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">100 hours of video content</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">2 years of content access</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Basic to advanced level</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Mentor support</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Project review</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Professional Certificate</p>
                </div>
              </div>
            </div>

            <div className="mt-14 mb-7">
              <h2 className="text-[22px] text-primary font-semibold">
                All the benefits you will get
              </h2>

              <div className="grid mt-5 grid-cols-1 md:grid-cols-2 gap-5 text-lg">
                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Career support</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Practical Assignment</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Freelancing support</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Job placement support</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Content created</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkspacePremium className="text-3xl text-secondary" />
                  <p className="text-primary">Live session</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8 rounded-lg border border-[#0000004D] p-5 md:grid-cols-2">
            <div>
              <p>Start Admission</p>
              <p className="text-lg font-semibold text-primary mt-2">
                December 10, 2023 12:00PM
              </p>
            </div>
            <div className="border-l pl-8 border-l-[#CE2786]">
              <p>End Admission</p>
              <p className="text-lg font-semibold text-primary mt-2">
                December 10, 2023 12:00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
