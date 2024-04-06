import { useSelector } from "react-redux";
import fiberyLogo from "../../public/fibery.webp";
import horse from "../../public/horse image.png";
import poo from "../../public/poo image.jpg";
import moment from "moment-timezone";

const Logo = () => {
  const isDaySelected = useSelector(
    (state) => state.dataContainer.isDaySelected
  );

  const isTimeSelected = useSelector(
    (state) => state.dataContainer.isTimeSelected
  );

  const formattedDate = useSelector((state) => state.dataContainer.fullDayName);

  const year = useSelector((state) => state.dataContainer.year);

  const timezone = moment.tz.guess();

  const timings = useSelector((state) => state.dataContainer.timings);

  const calculateEndTime = (startTime) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    let endHour = startHour;
    let endMinute = startMinute + 45;
    if (endMinute >= 60) {
      endHour += 1;
      endMinute -= 60;
    }
    let endTime = `${endHour % 24}:${endMinute.toString().padStart(2, "0")}`;
    return endTime;
  };
  const startTime = timings;
  const endTime = calculateEndTime(startTime);

  return (
    <div
      className={`${
        isDaySelected ? "lg:w-[35%]" : "lg:w-[50%]"
      } w-[100%] h-auto border-r`}
    >
      <div className="w-[100%] h-[150px] flex justify-center items-center border-b border-gray-100">
        <img className="w-[130px] h-[130px]" src={fiberyLogo} alt="Logo" />
      </div>
      <div className="w-[100%] h-[320px] p-5">
        <div className="mt-3 ">
          <h1 className="xl:text-3xl text-2xl font-bold">Fibery Demo</h1>
        </div>
        <div className="mt-3 flex items-center gap-2 text-gray-600">
          <svg
            className="w-[15px] h-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <p className="font-semibold">45 min</p>
        </div>
        {isTimeSelected && (
          <div className="xl:mt-3 mt-1 flex items-center gap-2 text-gray-600">
            <svg
              className="w-[15px] h-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <p className="font-semibold">
              {timings}-{endTime}, {formattedDate}, {year}
            </p>
          </div>
        )}
        {isTimeSelected && (
          <p className="xl:mt-2 mt-1 text-gray-600 font-semibold">
            <svg
              className="w-[15px] h-[15px] inline me-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            {timezone}, Time
          </p>
        )}
        <div className="mt-3 text-sm text-justify">
          Book your meeting with our Fibery team.Talk to a real person about how
          to get your processes set up with us
          <img
            className="w-[15px] h-[15px] inline ms-2 me-2"
            src={horse}
            alt="Horse"
          />
          or not
          <img
            className="w-[15px] h-[15px] inline ms-2 me-2"
            src={poo}
            alt="Horse"
          />
        </div>
      </div>
      <div className="w-[100%] h-[50px] flex items-center p-5 text-sm font-semibold">
        <p className="text-blue-700 cursor-pointer">Cookie settings</p>
      </div>
    </div>
  );
};

export default Logo;
