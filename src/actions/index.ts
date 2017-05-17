import * as titleActions from './titles';
import axios from 'axios';
export {titleActions};

const ROOT_URL = 'https://www.reddit.com';
const CLIENT_ID = 'HqefUk8PG3nnvSwbHR2XKd_l3bc';

export const SEARCH_SUBREDDITS_START = 'search_subreddits_start';
export const SEARCH_SUBREDDITS_SUCCESS = 'search_subreddits_success';
export const SEARCH_SUBREDDITS_ERROR = 'search_subreddits_error';
export const AUTH = 'authorization';


export const searchForSubreddits = (text: string = "all", dispatch: any) => {
    const url = `${ROOT_URL}/search.json?q=subreddit%3A${text}`;
    const request = axios.get(url).then(
        (data) => {
            dispatch(searchForSubredditsSuccess(data, text, dispatch));
        }
    ).catch(
        (errors) => {
            dispatch(searchForSubredditsError(errors, text, dispatch));
        }
    );

    return {
        type: SEARCH_SUBREDDITS_START,
    };
};

export const searchForSubredditsSuccess = (data: any, text: any, dispatch: any) => {
    return {
        type: SEARCH_SUBREDDITS_SUCCESS,
        payload: data,
        text: text,
    };
};

export const searchForSubredditsError = (errors: any, text: any, dispatch: any) => {
    return {
        type: SEARCH_SUBREDDITS_ERROR,
        payload: errors,
        text: text,
    };
};

export const authorization = (config: Object) => {
    const url = `${ROOT_URL}/api/v1/access_token`;

    const request = axios.post(url, config);

    return{
        type: AUTH,
        payload:request
    };

};