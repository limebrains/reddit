import axios from 'axios';
const ROOT_URL = 'https://www.reddit.com';

export const DISPLAY_SUBREDDIT = 'display_subreddit';
export const FETCH_SUBREDDIT = 'fetch_subreddit';
export const DISPLAY_THREAD = 'display_thread';
export const FETCH_THREAD = 'fetch_thread';


export const openSubreddit = (subredditName: string) => {
  const url = `${ROOT_URL}/${subredditName}.json`;
  const request = axios.get(url);

  return {
    payload: request,
    type: DISPLAY_SUBREDDIT,
  };
};


export const fetchingSubreddit = () => {
  return {
    type: FETCH_SUBREDDIT,
  }
};

export const openThread = (threadName:string) => {
  const url = `${ROOT_URL}${threadName}.json`;
  const request = axios.get(url);

  return {
    payload: request,
    type: DISPLAY_THREAD
  }
};

export const fetchThread = () => {

  return {
    type: FETCH_THREAD
  }
};
