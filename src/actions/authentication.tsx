import axios from 'axios';

const CLIENT_ID = 'HqefUk8PG3nnvSwbHR2XKd_l3bc';
const CLIENT_SECRET = 'vvrwSvoVXMh0wEeShoFLR21Hd2A';
const REDIRECT_URI = 'http://localhost:8000/';

export const GET_AUTH_TOKEN = 'get_auth_token';
export const AUTH = 'auth';

const ROOT_URL = 'https://www.reddit.com/api/v1/';

export const authorization = () => {
  const auth = axios.post(ROOT_URL + 'authorize',
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      state: '42asdf',
      duration: 'permanent',
    }
  );

};

export const getAuthToken = (password: string, username: string) => {

const token = axios.post(ROOT_URL + 'access_token',
  {
    grant_type: 'password',
    username: username,
    password: password,
  }
  );
console.log(token);

  return {
    payload: token,
    type: GET_AUTH_TOKEN,
  }

};
