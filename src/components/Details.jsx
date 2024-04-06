import moment from "moment-timezone";
import profilephoto from "../../public/profilepic.png";
import righttick from "../../public/righttick.jpg";
import google from "../../public/google.png";
import microsoft from "../../public/microsoft.png";
import { useSelector } from "react-redux";

const Details = () => {
  const name = useSelector((state) => state.dataContainer.name);

  const formattedDate = useSelector((state) => state.dataContainer.fullDayName);

  const year = useSelector((state) => state.dataContainer.year);

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

  const timezone = moment.tz.guess();

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center">
      <div className="w-[45px] h-[50px] mt-5 mb-2 overflow-hidden rounded-full">
        <img className="w-[100%] h-[100%]" src={profilephoto} alt="Profile" />
      </div>
      <div className="flex mb-3 justify-center items-center">
        <img
          className="w-[40px] h-[30px] "
          src={righttick}
          alt="tickmarkIcon"
        />
        <h2 className="text-2xl font-bold">You are scheduled</h2>
      </div>
      <p className="lg:ps-0 lg:pe-0 ps-2 pe-2">
        A calender invitation has been sent to your email address.
      </p>
      <div className="lg:w-[50%] lg:h-[190px] w-[80%] h-[230px] border-2 rounded-lg p-3">
        <h1 className="text-xl font-bold">Fibery Demo</h1>
        <div className="flex gap-2 items-center mt-2">
          <svg
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
          <p>{name}</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <svg
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <p>
            {timings}-{endTime}, {formattedDate}, {year}
          </p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <svg
            className="w-[20px] h-[20px] inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
          <p>{timezone}, Time</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <svg
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
          </svg>
          <p>Web conferencing details to follow.</p>
        </div>
      </div>
      <div className="lg:w-[50%] w-[80%] h-[30px] border-b-2"></div>
      <div className="lg:w-[50%] w-[80%] lg:h-[150px] h-[250px] mt-2">
        <h2 className="font-bold text-sm">
          Schedule your own meetings with Calendly for free
        </h2>
        <p className="mt-1 text-sm">
          Eliminate the back-and-forth emails from finding time
        </p>
        <div className="flex flex-col lg:flex-row gap-2 items-center mt-2 w-[100%]">
          <div className="w-[200px] border-2 rounded-full p-2 ps-3 pe-3 flex items-center gap-2 cursor-pointer">
            <img
              className="w-[15px] h-[15px]"
              src={google}
              alt="GoogleIcon"
            ></img>
            <span className="text-sm">Sign up with Google</span>
          </div>

          <div className="w-[200px] border-2 rounded-full p-2 ps-3 pe-3 flex items-center gap-2 cursor-pointer">
            <img
              className="w-[15px] h-[15px]"
              src={microsoft}
              alt="GoogleIcon"
            ></img>
            <span className="text-sm">Sign up with Microsoft</span>
          </div>
        </div>
        <div className="flex justify-center items-center text-sm text-blue-600 cursor-pointer mt-2">
          Sign up with work email
        </div>
      </div>
      <div className="w-[100%]  mb-2">
        <span className="text-sm text-blue-600 cursor-pointer ms-5">
          Cookie Setting
        </span>
      </div>
    </div>
  );
};

export default Details;
