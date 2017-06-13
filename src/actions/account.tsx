import axios from 'axios';
import {Config} from "../constants";

export const GET_USERNAME = 'get_user_name';
const {
  REDIRECT_URI,
  ROOT_OAUTH_API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
} = Config;


export const getUserName = (token: string) => {
  axios.defaults.headers.common = {};

  const redditMe = axios.get(ROOT_OAUTH_API_URL + 'me', {
      headers: {
        'Authorization': 'bearer ' + token,
      },
    });

  console.log('ME', redditMe);

  return {
    payload: redditMe,
    type: GET_USERNAME
  }
};
