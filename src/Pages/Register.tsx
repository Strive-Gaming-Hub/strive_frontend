import React, { useState, FormEvent } from "react";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";
import { handleSendOtp, handleVerifyOtp, registerUser } from "../Auth/Register";
import { getGoogleRegisterUrl } from "../Auth/Register";

const Register: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [pop, setPop] = useState(true);

  const handleOTP = async (otp: string) => {
    if (name != "") {
      const formdata = new FormData();
      formdata.append("otp", otp);
      formdata.append("username", name);
      const res = await handleVerifyOtp(formdata);

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
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const form = document.getElementById("registerform") as HTMLFormElement;
    const formData = new FormData(form);

    const day = parseInt(formData.get("date") as string, 10);
    const month = parseInt(formData.get("month") as string, 10);
    const year = parseInt(formData.get("year") as string, 10);

    console.log(day, month, year);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      setMsg("Please enter a valid date of birth");
      console.error("Invalid date of birth");
      return;
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11
    const currentDay = new Date().getDate();

    if (day < 1 || day > 31) {
      setMsg("Day must be between 1 and 31");
      console.error("Day must be between 1 and 31");
      return;
    }

    if (month < 1 || month > 12) {
      setMsg("Month must be between 1 and 12");
      console.error("Month must be between 1 and 12");
      return;
    }

    if (year > currentYear - 18 || year < 1900) {
      // Assuming reasonable range for DOB year
      setMsg(`Year must be between 1900 and ${currentYear}`);
      console.error(`Year must be between 1900 and ${currentYear - 18}`);
      return;
    }

    // Age calculation
    let age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
    }

    if (age < 18) {
      setMsg("You must be at least 18 years old to register");
      console.error("User is below 18 years old");
      return;
    }

    const phone = ((formData.get("phonecode") as string) +
      formData.get("phone")) as string;
    const date = `${formData.get("year")}-${formData.get(
      "month"
    )}-${formData.get("date")}`;
    console.log(date);
    formData.set("phone", phone);
    formData.set("date", date);
    formData.delete("year");
    formData.delete("month");
    formData.delete("date");
    formData.delete("phonecode");

    const res = await registerUser(formData);
    console.log(res);

    console.log(res.data);
    // console.log(res.data.username);

    if (res.status_code === 200) {
      const name = res.data.username;
      setName(name);
      setShowOtp(true);
      setMsg("successfuly registered");
    } else {
      setMsg(res.message);
      console.log(
        "not getting response from backend, we are trying our best... try again later"
      );
    }

    // setShowOtp(true);
    // const res = await handleSendOtp(data.phone);
    // if (res === 0) {
    //   setSentOtp(true);
    // } else if (res === 1) {
    //   // handle error
    // }
  };

  const handleGoogleRegister = async () => {
    const url = await getGoogleRegisterUrl();
    if (!url) {
      return;
    }
    window.location.href = url;
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
            <IoClose
              onClick={() => setPop(!pop)}
              className="text-[#8E84A3] font-bold text-lg hover:scale-x-125 cursor-pointer"
            />
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
              required
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
              required
              minLength={5}
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-1">
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
              Date of Birth
            </label>
            <div className="flex gap-3">
              <input
                inputMode="numeric"
                name="date"
                placeholder="DD"
                required
                //min and max date min 01 and max 31
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                inputMode="numeric"
                name="month"
                placeholder="MM"
                required
                //not working min and max month please solve it

                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                inputMode="numeric"
                name="year"
                placeholder="YYYY"
                required
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
              required
              //min length 8 and character includinng special character
              pattern="^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-1">
            <label className="text-[#FFFFFF] text-sm font-medium mb-2">
              Phone
            </label>
            <div className="flex gap-2">
              <input
                name="phonecode"
                placeholder="+91"
                required
                //by default value +91 but user can change it
                defaultValue="+91"
                className="shadow appearance-none w-1/3 rounded-lg h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                //remove the indicator from input field
                inputMode="numeric"
                name="phone"
                placeholder=""
                required
                minLength={10}
                maxLength={10}
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
              onClick={handleGoogleRegister}
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
              inputMode="numeric"
              minLength={6}
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
