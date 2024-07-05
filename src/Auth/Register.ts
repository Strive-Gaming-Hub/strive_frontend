import React, { useState } from "react";

import axios from "axios";
import { stringify } from "querystring";
import { api } from "./client";

export const handleSendOtp = async (phoneNumber: string) => {
  // Send OTP to the server
  const res = api
    .post("/api/send-otp", { phoneNumber })
    .then((response) => {})
    .catch((error) => {
      console.error("Failed to send OTP:", error);
    });
};

export const handleVerifyOtp = async (formData: any) => {
  // Verify OTP with the server

  // return api.post("/api/verify-otp", formData);

  return api
    .post("/api/v1/auth/otp", formData)
    .then((response) => {
      console.log("OTP verification successful");
      return response.data;
    })
    .catch((error) => {
      console.error("OTP verification failed:", error);
      console.log("OTP verification failed, wait for some time and try again");
      return error.response.data;
    });
};

export const registerUser = async (formData: any) => {
  // Register the user
  return api
    .put("/api/v1/auth/user", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Failed to register user:", error);
      console.log(
        "error to register user through api, wait for some time and try again"
      );
      return error.response.data;
    });
};

export const getGoogleRegisterUrl = async () => {
  try {
    const response = await axios.get("/api/v1/auth/GoogleAuthUrl");
    //Redirecting the user to the Google
    return response.data;
  } catch (error: any) {
    console.error("Error fetching Google OAuth URL:", error);
    return error.response.data;
  }
};
