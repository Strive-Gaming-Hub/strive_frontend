import { api } from "./client";
import Cookies from "js-cookie";

export const handleOAuthCallback = async (code: string) => {
  if (code) {
    try {
      //   Sends the code URL query to the backend server
      const response = await api.put("/api/v1/auth/exchange?code=" + code);

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

export const getGoogleAuthUrl = async () => {
  try {
    const response = await api.get("/api/v1/auth/GoogleAuthUrl");
    //Redirecting the user to the Google
    return response.data;
  } catch (error: any) {
    console.error("Error fetching Google OAuth URL:", error);
    return error.response.data;
  }
};
