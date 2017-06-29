import axios from 'axios';

const ROOT_URL = 'https://www.reddit.com';

export const SEARCH_SUBREDDITS = 'search_subreddits';
export const HIDE_SEARCHPANEL = 'hide_searchpanel';
export const SAVE_SUBREDDIT = 'save_subreddit';
export const REMOVE_SAVED_SUBREDDIT = 'remove_subreddit';

export const searchForSubreddits = (text: string = 'all') => {
    const url = `${ROOT_URL}/subreddits/search.json?q=%3A${text}`;
    const request = axios.get(url);

    return {
        payload: request,
        type: SEARCH_SUBREDDITS,
    };
};

export const hideSearchpanel = (isVisible: boolean) => {
    return {
        payload: !isVisible,
        type: HIDE_SEARCHPANEL,
    };
};


export const saveSubreddit = (subreddit: Object) =>  {
    return{
        payload: subreddit,
        type: SAVE_SUBREDDIT,
    };
};

export const removeSubreddit = (subreddit: Object) => {
  return{
    payload: subreddit,
    type: REMOVE_SAVED_SUBREDDIT,
  }
};
