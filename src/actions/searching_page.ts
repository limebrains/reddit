import axios from 'axios';

const ROOT_URL = 'https://www.reddit.com';
const CLIENT_ID = 'HqefUk8PG3nnvSwbHR2XKd_l3bc';

export const SEARCH_SUBREDDITS = 'search_subreddits';
export const HIDE_SEARCHPANEL = 'hide_searchpanel';
export const AUTH = 'authorization';
export const SAVE_SUBREDDIT = 'save_subreddit';

export const searchForSubreddits = (text: string = 'all', dispatch: any) => {
    const url = `${ROOT_URL}/subreddits/search.json?q=%3A${text}`;
    const request = axios.get(url);

    return {
        payload: request,
        type: SEARCH_SUBREDDITS,
    };
};

export const hideSearchpanel = (dispatch: any, isVisible: boolean) => {

    return {
        payload: !isVisible,
        type: HIDE_SEARCHPANEL,

    };
};

export const authorization = (config: Object) => {
    const url = `${ROOT_URL}/api/v1/access_token`;
    const request = axios.post(url, config);
    return{
        payload:request,
        type: AUTH,
    };

};

export const saveSubreddit = (subreddit: Object, dispatch: any) =>  {
    return{
        payload: subreddit,
        type: SAVE_SUBREDDIT,
    };
};
