import carroticon from "../../public/carrotIcon.jpeg";
import girls from "../../public/girls.jpg";
import horseIcon from "../../public/horse image.png";
import eagleIcon from "../../public/eagleIcon.jpg";
import leadership from "../../public/leadership.jpg";
import owl from "../../public/owl.jpg";
import sun from "../../public/sun.jpg";
import paintpallet from "../../public/paintpallet.jpg";
import laptop from "../../public/laptop.jpg";
import sales from "../../public/sales.jpg";
import bomb from "../../public/bomb.avif";
import diamond from "../../public/diamond.jpg";
import books from "../../public/books.jpg";
import questionmark from "../../public/questionmark.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNameAndEmail } from "./calenderSlice";

const Input = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const strRepx = /^[A-Za-z]+$/;
  const emailRexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleScheduleMeeting = () => {
    if (!strRepx.test(name)) {
      alert("Please Enter the Name");
      return;
    }
    if (!emailRexp.test(email)) {
      alert("Please Enter a valid email id");
      return;
    }
    dispatch(addNameAndEmail({ name: name, email: email }));
  };

  return (
    <div className="lg:w-[100%] w-[100%] h-auto overflow-y-auto p-4 box-border">
      <h1 className="text-lg font-bold">Enter Details</h1>
      <label className="font-bold">Name*</label>
      <br></br>
      <input
        className="w-[60%] h-[35px] rounded-md mt-2 border-2 ps-2"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label className="font-bold mt-2">Email*</label>
      <br></br>
      <input
        className="w-[60%] h-[35px] rounded-md mt-2 border-2 ps-2"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br></br>
      <button className="rounded-3xl bg-none border-2 border-indigo-500 p-2 mt-2 text-blue-500">
        Add Guests
      </button>
      <br></br>
      <br></br>
      <h4 className="font-bold">I want Fibery to work for:* </h4>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[15px] h-[15px]" src={carroticon} alt="Myself Icon" />
        <span>Myself</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[15px] h-[15px]" src={girls} alt="Myself Icon" />
        <span> &lt; 10 People</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[15px] h-[15px]" src={horseIcon} alt="Myself Icon" />
        <span>10-50 People</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={eagleIcon} alt="Myself Icon" />
        <span>50+ People</span>
      </div>
      <h4 className="font-bold mt-4">Your are more about* </h4>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={leadership} alt="Myself Icon" />
        <span>Leadership</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={owl} alt="Myself Icon" />
        <span>Consulting</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={sun} alt="Myself Icon" />
        <span>Product Management</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img
          className="w-[20px] h-[20px]"
          src={paintpallet}
          alt="Myself Icon"
        />
        <span>Design</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={laptop} alt="Myself Icon" />
        <span>Engineering</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={sales} alt="Myself Icon" />
        <span>Sales</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={bomb} alt="Myself Icon" />
        <span>Marketing</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={diamond} alt="Myself Icon" />
        <span>Human Resources</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img className="w-[20px] h-[20px]" src={books} alt="Myself Icon" />
        <span>Education</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <input className="w-[15px] h-[15px] cursor-pointer" type="checkbox" />
        <img
          className="w-[20px] h-[20px]"
          src={questionmark}
          alt="Myself Icon"
        />
        <span>Somthing else</span>
      </div>
      <h4 className="font-bold mt-4">
        Please, share anything that will help prepare for our meeting
      </h4>
      <textarea className="w-[94%] rounded-md mt-2 border-2 ps-2"></textarea>
      <h4 className="font-bold mt-4">
        Please, share with us the name of your Fibery work space (if any)
      </h4>
      <input className="w-[94%] h-[80px] rounded-md mt-2 border-2 ps-2"></input>
      <br></br>
      <button
        className="rounded-full bg-none p-4 ps-6 pr-6 mt-2 text-white bg-blue-500 font-bold hover:bg-red-400 hover:text-white"
        onClick={handleScheduleMeeting}
      >
        Schedule Event
      </button>
    </div>
  );
};

export default Input;
