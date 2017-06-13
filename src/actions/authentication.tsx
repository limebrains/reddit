import axios from 'axios';
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from "../constants";

export const AUTH = 'auth';

const ROOT_URL = 'https://www.reddit.com/api/v1/';

export const authorization = (code: string) => {
  console.log(code);

  let formData = new FormData();
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);
  formData.append('redirect_uri', REDIRECT_URI);

  const token = axios.post(ROOT_URL + 'access_token', formData, {
    auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
    }
  });
  console.log(token);

  return {
    payload: token,
    type: AUTH,
  }

};
