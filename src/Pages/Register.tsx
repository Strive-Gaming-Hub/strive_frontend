import React from "react";
import "../app/globals.css";
import axios from "axios";
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

  return (
    <div className="min-h-screen w-[100vw] bg-[#000000] flex justify-center items-center">
      <div className="w-[33%] h-fit bg-[#11112B] rounded-2xl flex items-center justify-center">
        <form className="rounded m-[2rem]">
          <h2 className="text-[1.25rem] mb-1 text-center font-medium text-[#FFFFFF]">
            Create an account
          </h2>
          <div className="mb-2">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Your username"
              className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Date of Birth
            </label>
            <div className="flex gap-3">
              <input
                id="date"
                placeholder="DD"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="month"
                placeholder="MM"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
              />{" "}
              <input
                id="year"
                placeholder="YYYY"
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
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
          <div className="mb-4">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Phone
            </label>
            <div className="flex gap-2">
              <input
                id="phonecode"
                placeholder="+91"
                className="shadow appearance-none w-1/3 rounded-lg h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
              />
              <input
                id="phone"
                placeholder=""
                className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 mt-1 bg-[#090C23] text-[#9094A6] leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#9562FF] border-[#A77CFF] text-white text-[1rem] font-medium w-full py-2 px-5 rounded-[0.625rem] focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </div>

          <p className="text-gray-100 my-3 w-fit m-auto">or</p>

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

// import React from "react";
// import "../app/globals.css";

// const register = () => {
//   return (
//     <div className="w-{70%} h-{70%} bg-[#11112B] flex items-center justify-center">
//       <form className="p-4 rounded md:w-1/2 w-4/5">
//         <h2 className="text-3xl text-center font-semibold text-[#FFFFFF] mb-8">
//           Register
//         </h2>
//         <div className="mb-4">
//           <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter email"
//             className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
//             Username
//           </label>
//           <input
//             id="username"
//             placeholder="Username"
//             className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
//             Date of Birth
//           </label>
//           <div className="flex gap-3">
//             <input
//               id="date"
//               placeholder="DD"
//               className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             />
//             <input
//               id="month"
//               placeholder="MM"
//               className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             />{" "}
//             <input
//               id="year"
//               placeholder="YYYY"
//               className="shadow appearance-none rounded-lg w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
//             Phone
//           </label>
//           <div className="flex gap-2">
//             <input
//               id="phonecode"
//               placeholder="+91"
//               className="shadow appearance-none rounded-lg w-1/4 h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             />
//             <input
//               id="phone"
//               placeholder=""
//               className="shadow appearance-none rounded-lg w-3/4 h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className=" bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Continue
//           </button>
//         </div>

//         <p className="text-gray-100 my-3 w-fit m-auto">or</p>

//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className=" bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Google
//           </button>
//         </div>
//         <p className=" text-[#FFFFFF] mt-4 w-fit m-auto">
//           Already registered?
//           <span className="text-[#11FFBD]">
//             <a href="/login"> Sign in</a>
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default register;
