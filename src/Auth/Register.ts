import React, { useState } from "react";

import axios from "axios";

const api = axios.create({
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  baseURL: "http://localhost:8080",
});

export const handleSendOtp = async ({ phoneNumber: any }) => {
  // Send OTP to the server
  const res = api
    .post("/api/send-otp", { phoneNumber })
    .then((response) => {})
    .catch((error) => {
      console.error("Failed to send OTP:", error);
    });
};

export const handleVerifyOtp = () => {
  // Verify OTP with the server
  const res = api
    .post("/api/verify-otp", { otp })
    .then((response) => {
      console.log("OTP verification successful");
    })
    .catch((error) => {
      console.error("OTP verification failed:", error);
    });
  console.log("OTP verification successful");
};

// const Otp = () => {
//   return (
//     <div>
//       {isOtpSent ? (
//         <div>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//           />
//           <button onClick={handleVerifyOtp}>Verify OTP</button>
//         </div>
//       ) : (
//         <button onClick={handleSendOtp}>Re-send OTP</button>
//       )}
//     </div>
//   );
// };

// export default Otp;
