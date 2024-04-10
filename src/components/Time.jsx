import { useState } from "react";
import timings from "../constants/timings";
import { useSelector, useDispatch } from "react-redux";
import { toggleTime } from "./calenderSlice";

const Time = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const dispatch = useDispatch();

  const handleTimeSelect = (index) => {
    setSelectedIdx(index);
  };

  const handleOnClick = (ele) => {
    dispatch(toggleTime({ ele: ele }));
  };

  const formattedDate = useSelector((state) => state.dataContainer.fullDayName);

  const list = timings.map((ele, index) => (
    <div
      className="w-auto h-auto flex items-center justify-center gap-1 px-4"
      key={index}
    >
      <div
        className="h-[50px] flex justify-center items-center mt-2 mb-2 border-2 rounded-md font-bold cursor-pointer"
        style={{
          width: selectedIdx === index ? "47%" : "95%",
          color: selectedIdx === index ? "white" : "blue",
          backgroundColor: selectedIdx === index ? "gray" : "",
          border: selectedIdx === index ? "none" : "",
        }}
        onClick={() => handleTimeSelect(index)}
      >
        {ele}
      </div>
      <button
        className="h-[50px] w-[47%] mt-2 mb-2 rounded-md font-bold cursor-pointer text-center text-white bg-blue-600 border-0"
        style={{ display: selectedIdx === index ? "block" : "none" }}
        onClick={() => handleOnClick(ele)}
      >
        Next
      </button>
    </div>
  ));

  return (
    <div className="w-[38%] h-auto flex flex-col items-center">
      <div className="lg:h-[25%] h-[12%] w-[95%] text-gray-600 p-3 font-bold lg:text-sm text-xs">
        <p className="mt-16 lg:ms-0 ms-4">{formattedDate}</p>
      </div>
      <div className="h-[37%] lg:h-[75%] w-[102%] overflow-y-auto">{list}</div>
    </div>
  );
};

export default Time;
