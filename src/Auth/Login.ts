import axios from "axios";
import Cookies from "js-cookie";
import { api } from "./client";
import { error } from "console";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/login", { email, password });
    // Store the access token in cookies with an expiration time
    const expirationTime = 3600 * 1000;
    const expireDate = new Date(Date.now() + expirationTime);
    Cookies.set("Access_Token", response.data.token, { expires: expireDate });

    setTimeout(() => {
      Cookies.remove("Access_Token");
    }, expirationTime);

    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export const striveLogin = async (formData: FormData) => {
  return api
    .post("/api/v1/auth/login", formData)
    .then((response) => {
      console.log("fetch successful");
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};


export const changePasswordAPI = async (formData: any) => {
  console.log("formdata", formData.get("username"));
  return api
    .post("/api/v1/auth/changePassword", formData)
    .then((response) => {
      console.log("fetch successful");
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  // const res = await api.post("/api/v1/auth/changePassword", formData);
  // console.log("hitted");
  // return res;
};
