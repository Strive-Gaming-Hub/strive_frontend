import React, { useState } from "react";

import axios from "axios";
import { stringify } from "querystring";

const api = axios.create({
  headers: {
    "Content-type": "multipart/form-data",
    Accept: "application/json",
  },
});

export const handleSendOtp = async (phoneNumber: string) => {
  // Send OTP to the server
  const res = api
    .post("/api/send-otp", { phoneNumber })
    .then((response) => {})
    .catch((error) => {
      console.error("Failed to send OTP:", error);
    });
};

export const handleVerifyOtp = async (otp: string) => {
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

export const registerUser = async (formData: any) => {
  // Register the user
  return api
    .post("/api/v1/auth/register", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Failed to register user:", error);
    });
};
