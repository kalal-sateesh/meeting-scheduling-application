import "./App.css";
import Calender from "./components/Calender";
import Details from "./components/Details";
import Input from "./components/Input";
import Logo from "./components/Logo";
import Time from "./components/Time";
import { useSelector } from "react-redux";

function App() {
  const isDaySelected = useSelector(
    (state) => state.dataContainer.isDaySelected
  );

  const isTimeSelected = useSelector(
    (state) => state.dataContainer.isTimeSelected
  );

  const isSchedule = useSelector((state) => state.dataContainer.isSchedule);

  return (
    <div className="w-full lg:h-[633px]  h-[1266px] flex justify-center items-center">
      <div className="lg:w-[60%] lg:h-[520px] md:w-[70%] w-[90%] h-[1040px] rounded-xl overflow-hidden bg-white lg:flex">
        {!isSchedule && (
          <>
            <Logo />
            <div
              className={`${
                isDaySelected ? "lg:w-[65%]" : "lg:w-[50%] justify-center"
              } w-[100%] h-[100%] flex`}
            >
              {!isTimeSelected && <Calender />}
              {isDaySelected && !isTimeSelected && <Time />}
              {isTimeSelected && isDaySelected && <Input />}
            </div>
          </>
        )}
        {isSchedule && <Details />}
      </div>
    </div>
  );
}

export default App;
