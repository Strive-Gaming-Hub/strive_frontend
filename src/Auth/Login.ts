import axios from 'axios';
import Cookies from 'js-cookie';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    // Store the access token in cookies with an expiration time
    const expirationTime = 3600 * 1000; 
    const expireDate = new Date(Date.now() + expirationTime);
    Cookies.set('Access_Token', response.data.token, { expires: expireDate });

    
    setTimeout(() => {
      Cookies.remove('Access_Token');
    }, expirationTime);

    return response.data;

  } catch (error) {
    throw new Error('Failed to login');
  }
};
