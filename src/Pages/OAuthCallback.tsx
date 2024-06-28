import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const OAuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const { code } = router.query;
      if (code) {
        try {
          //   Sends the code URL query to the backend server
          const response = await axios.post("/api/exchange-code", { code });

          // Extract tokens from the response
          const { AccessToken, RefreshToken, name } = response.data;

          // Store the extracted tokens in cookies
          Cookies.set("accessToken", AccessToken);
          Cookies.set("refreshToken", RefreshToken);
          // Replace the name retrieved from the from Google login page
          //const userNameFromGoogle = "John Doe";
          //Storing the user name in the local Storage
          localStorage.setItem("userName", name);

          // Redirect to the user data form page
          router.push("./home");
        } catch (error) {
          console.error("Error exchanging code:", error);
          // display error message to users
        }
      }
    };

    handleOAuthCallback();
  }, [router.query]);

  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-white">Processing...</p>
    </div>
  );
};

export default OAuthCallback;
