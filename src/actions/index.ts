import * as titleActions from './titles';
import axios from 'axios';
export {titleActions};

const ROOT_URL = 'https://www.reddit.com/api';
const CLIENT_ID = 'HqefUk8PG3nnvSwbHR2XKd_l3bc';

export const SEARCH_SUBREDDITS = 'search_subreddits';
export const AUTH = 'authorization';


export const searchForSubreddits = (text: string = "all") => {
    const url = `${ROOT_URL}/search.json?q=subreddit%3A${text}`;
    const request = axios.get(url);

    return {
        type: SEARCH_SUBREDDITS,
        payload: request
    };

};

export const authorization = (config: Object) => {
    const url = `${ROOT_URL}/v1/access_token`;

    const request = axios.post(url, config);

    return{
        type: AUTH,
        payload:request
    };

};