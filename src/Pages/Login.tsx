import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";
import {
  getGoogleLoginUrl,
  striveLogin,
} from "@/Auth/Login";

const login = () => {
  const [error, setError] = React.useState<string>("");
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = document.getElementById("login") as HTMLFormElement;
    let formData = new FormData(form);

    const credential = formData.get("credential") as string;
    formData.delete("credential");
    // use regex to identify if credential is username email or phone number
    if (credential.includes("@")) {
      // email
      formData.set("email", credential);
    } else if (credential.match(/^[0-9]+$/)) {
      // phone number
      formData.set("phone", credential);
    } else {
      // username
      formData.set("username", credential);
    }

    const res = await striveLogin(formData);
    if (res.status_code === 200) {
      localStorage.setItem("user", JSON.stringify(res.data.userData));
      localStorage.setItem("accessToken", res.data.access_token);
      localStorage.setItem("refreshToken", res.data.refresh_token);
      window.location.href = "/";
    } else {
      console.log(res);
      setError(res.message + "...");
    }
  };

  const handleGoogleLogin = async () => {
    const url = await getGoogleLoginUrl();
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#000000] flex justify-center items-center">
      <div className="w-[90%] md:w-[29%] h-[70%] bg-[#11112B] rounded-2xl flex items-center justify-center">
        <form
          className="relative rounded m-[2rem]"
          id="login"
          onSubmit={handleLogin}
        >
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
              type="text"
              name="credential"
              placeholder="Enter email"
              required={true}
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required={true}
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] text-[0.88rem] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="flex items-end justify-end">
            <p className="mb-4 text-[#8E84A3] font-medium text-[0.9rem]">
              <a href="">Forget your password?</a>
            </p>
          </div>
          <p className="text-[#FF0000] text-sm">{error}</p>
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

          {/* Google button */}
        </form>
        <div className="flex items-center justify-between">
          <button
            onClick={handleGoogleLogin}
            className="border-2 border-solid  border-[#3e3e6a] text-white font-medium text-[1rem] w-full py-2 px-4 rounded-[0.625rem] "
          >
            Continue with Google
          </button>
        </div>
        <p className=" text-[#8E84A3] mt-4 w-fit m-auto text-[0.8rem] font-medium">
          New user?{" "}
          <span className="text-white border-b-2">
            <a href="/register">Create an account</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default login;
