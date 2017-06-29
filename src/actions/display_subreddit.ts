import axios from 'axios';
const ROOT_URL = 'https://www.reddit.com';

export const DISPLAY_SUBREDDIT = 'display_subreddit';
export const FETCH_SUBREDDIT = 'fetch_subreddit';
export const DISPLAY_THREAD = 'display_thread';
export const FETCH_THREAD = 'fetch_thread';
export const LOAD_NEW_PAGE = 'load_new_page';
export const OPEN_NEW_PAGE = 'open_new_page';

export const openNewPage = (adress: string) => {

  const url = `${ROOT_URL}/${adress}`;
  const request = axios.get(url);

  return {
    payload: request,
    type: OPEN_NEW_PAGE,
  };



}

export const openSubreddit = (subredditName: string) => {
  const url = `${ROOT_URL}/${subredditName}.json`;
  const request = axios.get(url);

  return {
    payload: request,
    type: DISPLAY_SUBREDDIT,
  };
};

export const loadNewPage = () => {
  return {
    type: LOAD_NEW_PAGE,
  }
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
