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
          const response = await axios.get(
            "/api/v1/auth/exchange?code=" + code
          );

          console.log(response.data);

          // Extract tokens from the response
          const { access_token, refresh_token } = response.data.data;
          console.log(access_token, refresh_token);
          // Store the extracted tokens in cookies
          Cookies.set("accessToken", access_token);
          Cookies.set("refreshToken", refresh_token);

          // Redirect to the user data form page
          router.push("/");
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
