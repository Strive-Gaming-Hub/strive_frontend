import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

const OAuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const { code } = router.query;

      if (code) {
        try {

        //   Sends the code URL query to the backend server
          const response = await axios.post('/api/exchange-code', { code });

          // Extract tokens from the response
          const { AccessToken, RefreshToken } = response.data;

          // Store the extracted tokens in cookies
          Cookies.set('accessToken', AccessToken);
          Cookies.set('refreshToken', RefreshToken);


          // Redirect to the user data form page
          router.push('./home');
        } catch (error) {
          console.error('Error exchanging code:', error);
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
