import axios from 'axios';

const CLIENT_ID = 'HqefUk8PG3nnvSwbHR2XKd_l3bc';
const CLIENT_SECRET = 'vvrwSvoVXMh0wEeShoFLR21Hd2A';
const REDIRECT_URI = 'http://localhost:8000/';

export const AUTH = 'auth';

const ROOT_URL = 'https://www.reddit.com/api/v1/';

export const authorization = (code: string) => {
  console.log(code);

  const token = axios.post(ROOT_URL + 'access_token',
    {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:8000/auth",
    }, {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }
    }
  );
  console.log(token);

  return {
    payload: token,
    type: AUTH,
  }

};
