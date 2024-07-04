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

// Function to handle Google login
export const getGoogleLoginUrl = async () => {
  return api
    .get("/api/v1/auth/googleAuthUrl")
    .then((response) => {
      console.log("fetch successful");
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const handleOAuthCallback = async (code: string) => {
  if (code) {
    try {
      //   Sends the code URL query to the backend server
      const response = await axios.get("/api/v1/auth/exchange?code=" + code);

      console.log(response.data);

      // Extract tokens from the response
      const { access_token, refresh_token } = response.data.data;
      // console.log(access_token, refresh_token);
      // Store the extracted tokens in cookies
      Cookies.set("accessToken", access_token);
      Cookies.set("refreshToken", refresh_token);

      // Redirect to the user data form page
      return true;
    } catch (error) {
      console.error("Error exchanging code:", error);
      return false;
      // display error message to users
    }
  }
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
