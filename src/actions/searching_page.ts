import * as titleActions from './titles';
import axios from 'axios';
import {applyMiddleware} from "redux";
export {titleActions};

const ROOT_URL = 'https://www.reddit.com';
const CLIENT_ID = 'HqefUk8PG3nnvSwbHR2XKd_l3bc';

export const SEARCH_SUBREDDITS = 'search_subreddits';
export const HIDE_SEARCHPANEL = 'hide_searchpanel';
export const AUTH = 'authorization';



export const searchForSubreddits = (text: string = "all", dispatch: any) => {
    const url = `${ROOT_URL}/subreddits/search.json?q=%3A${text}`;
    const request = axios.get(url);

    return {
        type: SEARCH_SUBREDDITS,
        payload: request,
    };
};

export const hideSearchpanel = (dispatch: any) => {

    return {
        type: HIDE_SEARCHPANEL,
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

