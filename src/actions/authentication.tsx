import axios from 'axios';
import {Config} from "../constants";

export const AUTH = 'auth';
export const REFRESH_TOKEN = 'refresh_token';
const {
  REDIRECT_URI,
  ROOT_API_URL,
  CLIENT_ID,
  CLIENT_SECRET,

} = Config;

export const authorization = (code: string) => {
  let formData = new FormData();
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);
  formData.append('redirect_uri', REDIRECT_URI);

  const token = axios.post(ROOT_API_URL + 'access_token', formData, {
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET,
    }
  });

  return {
    payload: token,
    type: AUTH,
  }
};

export const refreshToken= (refreshToken: string) => {

    const token = axios.post(ROOT_API_URL + 'access_token', {
    auth: {
      grant_type: 'refresh_token',
      password: refreshToken,
    }
  });


  return {
    payload: 1,
    type: REFRESH_TOKEN,
  }
};
