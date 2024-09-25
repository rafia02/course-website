import { FaRegCircleCheck, FaRegCirclePause } from "react-icons/fa6";

const QuizAndAssetsment = () => {
  return (
    <div className="relative border border-solid border-black/30 rounded-xl ">
      <table className="w-full table-auto  text-sm text-left overflow-hidden  rounded-xl">
        <thead className="text-xs  text-white uppercase  pl-10  bg-loginButton">
          <tr className="text-lg ">
            <th
              scope="col"
              content="center"
              className="pl-10 pt-7 pb-5 w-[151px]"
            >
              কুইজ
            </th>
            <th scope="col" className="pt-7 pb-5 w-[297px]">
              কোর্স নাম
            </th>
            <th scope="col" className="pt-7 pb-5 w-[116px]">
              স্টাটাস
            </th>
            <th scope="col" className="pt-7 pb-5 w-[216px]">
              সাবমিটের শেষ সময়
            </th>
            <th scope="col" className="pr-10 pt-7 pb-5 w-[95px]">
              ফলাফল
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white  primary-text-color border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg">
            <th
              scope="row"
              className="pl-10 py-4 font-normal whitespace-nowrap "
            >
              <span className="flex items-center gap-2">
                <FaRegCircleCheck className="text-[#12B76A]" />
                কুইজ - ১
              </span>
            </th>
            <td className="py-4 ">1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন</td>
            <td className="py-4 text-[#12B76A]">কমপ্লিট</td>
            <td className="py-4 ">শনি ১১ নভে রাত ১০:০০</td>
            <td className="pr-10 py-4 ">
              <button className="bg-secondaryGradiant flex gap-2 items-center px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
          <tr className="bg-white  border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg primary-text-color ">
            <th
              scope="row"
              className="pl-10 py-4 font-normal whitespace-nowrap "
            >
              <span className="flex items-center gap-2">
                <FaRegCirclePause className="text-[#4478FF]" />
                কুইজ - ২
              </span>
            </th>
            <td className="py-4 ">1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন</td>
            <td className="py-4 text-black opacity-50">ইনকমপ্লিট</td>
            <td className="py-4 ">শনি ১১ নভে রাত ১০:০০</td>
            <td className="pr-10 py-4 ">
              <button className="bg-secondaryGradiant flex gap-2 items-center px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
          <tr className="bg-white  border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg primary-text-color ">
            <th
              scope="row"
              className="pl-10 py-4 font-normal whitespace-nowrap "
            >
              <span className="flex items-center gap-2">
                <FaRegCirclePause className="text-[#4478FF]" />
                কুইজ - ২
              </span>
            </th>
            <td className="py-4 ">1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন</td>
            <td className="py-4 text-black opacity-50">ইনকমপ্লিট</td>
            <td className="py-4 ">শনি ১১ নভে রাত ১০:০০</td>
            <td className="pr-10 py-4 ">
              <button className="bg-secondaryGradiant flex gap-2 items-center px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
          <tr className="bg-white  border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg primary-text-color ">
            <th
              scope="row"
              className="pl-10 py-4 font-normal whitespace-nowrap "
            >
              <span className="flex items-center gap-2">
                <FaRegCirclePause className="text-[#4478FF]" />
                কুইজ - ২
              </span>
            </th>
            <td className="py-4 ">1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন</td>
            <td className="py-4 text-black opacity-50">ইনকমপ্লিট</td>
            <td className="py-4 ">শনি ১১ নভে রাত ১০:০০</td>
            <td className="pr-10 py-4 ">
              <button className="bg-secondaryGradiant flex gap-2 items-center px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
          <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 text-lg primary-text-color ">
            <th
              scope="row"
              className="pl-10 py-4 font-normal whitespace-nowrap "
            >
              <span className="flex items-center gap-2">
                <FaRegCirclePause className="text-[#4478FF]" />
                কুইজ - ২
              </span>
            </th>
            <td className="py-4 ">1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন</td>
            <td className="py-4 text-black opacity-50">ইনকমপ্লিট</td>
            <td className="py-4 ">শনি ১১ নভে রাত ১০:০০</td>
            <td className="pr-10 py-4 ">
              <button className="bg-secondaryGradiant flex gap-2 items-center px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuizAndAssetsment;
