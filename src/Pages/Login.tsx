import React from "react";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";

const login = () => {
  return (
    <div className="min-h-screen w-[100vw] bg-[#000000] flex justify-center items-center">
      <div className="w-[29%] h-[70%] bg-[#11112B] rounded-2xl flex items-center justify-center">
        <form className="relative rounded m-[2rem]">
          <h2 className="text-[1.25rem] mb-1 text-center font-medium text-[#FFFFFF] leading-[30px]">
            Sign in
          </h2>
          <div className="absolute top-[-1rem] right-[-1rem]">
            <IoClose className="text-[#8E84A3] font-bold text-lg" />
          </div>
          <div className="mb-4">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              Email/username
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="flex items-end justify-end">
            <p className="mt-[-20px] mb-4 text-[#8E84A3] font-medium text-[0.9rem]">
              <a href="">Forget your password?</a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#9562FF] border-[#A77CFF] text-white text-[1rem] font-medium w-full py-2 px-5 rounded-[0.625rem] focus:outline-none focus:shadow-outline"
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
          <p className=" text-[#8E84A3] mt-4 w-fit m-auto">
            New user?{" "}
            <span className="text-white border-b-2">
              <a href="/register">Create an account</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
