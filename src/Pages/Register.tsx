import React, { useState, FormEvent } from "react";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";
import { handleSendOtp, handleVerifyOtp, registerUser } from "../Auth/Register";
import { redirect } from "next/navigation";
import { access } from "fs";

const Register: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");

  const handleOTP = async (otp: string) => {
    if (name != "") {
      const formdata = new FormData();
      formdata.append("otp", otp);
      formdata.append("username", name);
      const res = await handleVerifyOtp(formdata);
      if (res.status_code == 200) {
        setName("");

        const user = {
          email: res.data.email,
          phone: res.data.phone,
          username: res.data.username,
        };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        window.location.href = "/";
        // navigate("/");
      } else {
        setMsg("OTP verification failed");
      }
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const form = document.getElementById("registerform") as HTMLFormElement;
    const formData = new FormData(form);

    const phone = ((formData.get("phonecode") as string) +
      formData.get("phone")) as string;
    const date = `${formData.get("year")}-${formData.get(
      "month"
    )}-${formData.get("date")}`;
    formData.set("phone", phone);
    formData.set("date", date);
    formData.delete("year");
    formData.delete("month");
    formData.delete("date");
    formData.delete("phonecode");

    const res = await registerUser(formData);
    console.log(res);
    const name = res.data.username;

    if (res.status_code === 200) {
      setName(name);
      setShowOtp(true);
      setMsg("successfuly registered");
    } else {
      // handle error
      setMsg("failed registration try again");
    }

    // setShowOtp(true);
    // const res = await handleSendOtp(data.phone);
    // if (res === 0) {
    //   setSentOtp(true);
    // } else if (res === 1) {
    //   // handle error
    // }
  };

  return !showOtp ? (
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
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
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
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
              Username
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
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
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
                name="month"
                placeholder="MM"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="year"
                name="year"
                placeholder="YYYY"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-1">
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
              Password
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
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
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
          <p className="text-sm text-red-700 ">{msg}</p>
          <div className="flex items-center justify-between">
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
              type="button"
              className="border-2 border-solid border-[#3e3e6a] text-white font-medium text-[1rem] w-full py-2 px-4 rounded-[0.625rem]"
            >
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-[#000000] flex justify-center items-center">
      <div className="w-[90%] md:w-[29%] h-fit bg-[#11112B] rounded-2xl flex items-center justify-center">
        <div className="relative rounded m-[2rem]">
          <h2 className="text-[1.25rem] mb-1 text-center font-medium text-[#FFFFFF] leading-[30px]">
            Verify OTP
          </h2>
          <div className="mb-1">
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <p className="text-sm text-red-700 ">{msg}</p>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleOTP(otp)}
              className="bg-[#9562FF] border-[#A77CFF] text-white text-[1rem] font-medium w-full py-2 px-5 mt-2 rounded-[0.625rem] focus:outline-none focus:shadow-outline"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
