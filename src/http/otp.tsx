import React, { useState } from "react";

import axios from "axios";

const api = axios.create({
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  baseURL: "http://localhost:8080",
});

const Otp = ({ onOtpSent }) => {
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(true);

  const handleSendOtp = () => {
    // Send OTP to the server
    const res = api
      .post("/api/send-otp", { phoneNumber: "1234567890" })
      .then((response) => {
        setIsOtpSent(true);
      })
      .catch((error) => {
        console.error("Failed to send OTP:", error);
      });
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
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

  return (
    <div>
      {isOtpSent ? (
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      ) : (
        <button onClick={handleSendOtp}>Re-send OTP</button>
      )}
    </div>
  );
};

export default Otp;
