import { IoArrowForwardSharp } from "react-icons/io5";
const PrimaryButton = ({ value }) => {
  return (
    <button
      type="submit"
      className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
    >
      {value} <IoArrowForwardSharp />
    </button>
  );
};

export default PrimaryButton;