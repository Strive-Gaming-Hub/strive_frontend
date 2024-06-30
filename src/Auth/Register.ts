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
  return api
    .post("/api/v1/auth/otp", formData)
    .then((response) => {
      console.log("OTP verification successful");
      return response.data;
    })
    .catch((error) => {
      console.error("OTP verification failed:", error);
    });
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
