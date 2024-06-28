import React from "react";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";

const register = () => {
  return (
    <div className="min-h-screen bg-[#000000] flex justify-center items-center">
      <div className="w-[90%] md:w-[29%] h-fit bg-[#11112B] rounded-2xl flex items-center justify-center">
        <form className="relative rounded m-[2rem]">
          <h2 className="text-[1.25rem] mb-1 text-center font-medium text-[#FFFFFF] leading-[30px]">
            Create an account
          </h2>
          <div className="absolute top-[-1rem] right-[-1rem]">
            <IoClose className="text-[#8E84A3] font-bold text-lg" />
          </div>
          <div className="mb-1">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-1">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Your username"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-1">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Date of Birth
            </label>
            <div className="flex gap-3">
              <input
                id="date"
                placeholder="DD"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="month"
                placeholder="MM"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />{" "}
              <input
                id="year"
                placeholder="YYYY"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-1">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-1">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Phone
            </label>
            <div className="flex gap-2">
              <input
                id="phonecode"
                placeholder="+91"
                className="shadow appearance-none w-1/3 rounded-lg h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="phone"
                placeholder=""
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <button
              type="submit"
              className="bg-[#9562FF] border-[#A77CFF] text-white text-[1rem] font-medium w-full py-2 px-5 mt-2 rounded-[0.625rem] focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </div>

          <p className="text-[#3f3f6a] text-[0.8rem] font-medium py-2 w-fit m-auto">
            OR
          </p>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="border-2 border-solid  border-[#3e3e6a] text-white font-medium text-[1rem] w-full py-2 px-4 rounded-[0.625rem] "
            >
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
