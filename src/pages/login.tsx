import React, { useEffect } from "react";
import "../app/globals.css";
import { IoClose } from "react-icons/io5";
import { striveLogin } from "@/Auth/Login";
import { showToast } from "@/app/notifier/toast";
import Link from "next/link";
import { getGoogleAuthUrl } from "@/Auth/GoogleAuth";
const Login = ({ setLoader = (t: boolean) => {} }) => {
  const [error, setError] = React.useState<string>("");
  const [googleLoginMessage, setGoogleLoginMessage] =
    React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = document.getElementById("login") as HTMLFormElement;
    let formData = new FormData(form);

    const credential = formData.get("credential") as string;
    const password = formData.get("password") as string;

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    formData.delete("credential");
    if (credential.includes("@")) {
      formData.set("email", credential);
    } else if (credential.match(/^[0-9]+$/)) {
      formData.set("phone", credential);
    } else {
      if (credential.length <= 3) {
        setError("Username must be greater than 3 characters");
        return;
      }
      formData.set("username", credential);
    }

    setLoader(true); // Set loading state to true

    try {
      const res = await striveLogin(formData);
      if (res.status_code === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.userData));
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
        showToast("Login successful", "success");
        window.location.href = "/";
      } else {
        setError(res.message);
        console.log(res.message);
        if (res.message == undefined) {
          showToast("Server not responding!!", "info");
          return;
        }
        showToast(res.message as string, "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast("An error occurred during login.", "info");
      setError("An error occurred during login.");
    } finally {
      setLoader(false); // Set loading state back to false
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoginMessage("Wait in the queue, you are next");
    setLoader(true);

    try {
      const response = await getGoogleAuthUrl();
      if (response.status === 200) {
        const { url } = response;
        window.location.href = url;
      } else {
        console.log(response.status, response.message);
        showToast("An error during Google login.", "error");
      }
    } catch (error) {
      console.error("Google login error:", error);
      showToast("An error on server!", "info");
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    setLoader(false);
    return () => {
      setLoader(true);
    };
  }, []);

  return (
    <div className=" bg-[#11112B] rounded-2xl flex flex-col items-center justify-center p-4 m-auto w-80">
      <form
        className="w-full relative rounded"
        id="login"
        onSubmit={handleLogin}
      >
        <h2 className="text-[1.25rem] mb-1 text-center font-medium text-[#FFFFFF] leading-[30px]">
          Sign in
        </h2>
        <div className="absolute top-[0.5rem] right-[0.5rem]">
          <IoClose className="text-[#8E84A3] font-bold text-lg hover:scale-125 hover:cursor-pointer" />
        </div>
        <div className="mb-4">
          <label className="text-[#FFFFFF] text-sm font-medium mb-2">
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
          <label className="text-[#FFFFFF] text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
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
            {loading ? "Logging in..." : "Continue"}
          </button>
        </div>
        <p className="text-[#3f3f6a] text-[0.8rem] font-medium py-2 w-fit m-auto">
          OR
        </p>
      </form>
      <div className="w-full flex items-center justify-between">
        <button
          onClick={handleGoogleLogin}
          className="border-2 border-solid border-[#3e3e6a] text-white font-medium text-[1rem] w-full py-2 px-4 rounded-[0.625rem]"
        >
          {loading ? "Please wait..." : "Continue with Google"}
        </button>
      </div>
      <p className="text-[#8E84A3] mt-4 w-fit m-auto text-[0.8rem] font-medium">
        New user?{" "}
        <span className="text-white border-b-2">
          <Link href="/register">Create an account</Link>
        </span>
      </p>
      {googleLoginMessage && (
        <p className="text-[#FFFFFF] mt-4 w-fit m-auto text-[0.8rem] font-medium">
          {googleLoginMessage}
        </p>
      )}
    </div>
  );
};

export default Login;
