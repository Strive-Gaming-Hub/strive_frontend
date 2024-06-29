import React, { FormEvent } from "react";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Otp from "../http/otp";import axios from "axios";
import { useRouter } from "next/router";

const register = () => {
  const router = useRouter();




  // Function to handle the Google Registration
  const handleGoogleRegister = async () => {
    try {
      const response = await axios.get("/api/google-auth-url");
      const { url } = response.data;
      //Redirecting the user to the Google
      router.push(url);

    } catch (error) {
      console.error("Error fetching Google OAuth URL:", error);
    }
  };

  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [dob, setDob] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    const form = document.getElementById("registerform");
    let formData = new FormData(form as HTMLFormElement);
    // form.get("email");
    const data = {
      email: formData.get("email"),
      username: formData.get("username"),
      dob: `${formData.get("date")}-${formData.get("month")}-${formData.get(
        "year"
      )}`,
      password: formData.get("password"),
      phone: formData.get("phone"),
    };
    console.log(data);

    
    const res = await registerUser(data);
    if (res == 0) {
      //show otp
      
    } else if (res == 1) {
      // handle error
    }
  };
  return (
    <div className="min-h-screen bg-[#000000] flex justify-center items-center">
      <div className="w-[90%] md:w-[29%] h-fit bg-[#11112B] rounded-2xl flex items-center justify-center">
        <form
          className="relative rounded m-[2rem]"
          id="registerform"
          onSubmit={handleRegister}
        >
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
              name="email"
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
              name="username"
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
                name="date"
                placeholder="DD"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="month"
                placeholder="MM"
                name="month"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />{" "}
              <input
                id="year"
                name="year"
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
              name="password"
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
                name="phonecode"
                placeholder="+91"
                className="shadow appearance-none w-1/3 rounded-lg h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="phone"
                name="phone"
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

          {/* Google button */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="border-2 border-solid border-[#3e3e6a] text-white font-medium text-[1rem] w-full py-2 px-4 rounded-[0.625rem]"
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
