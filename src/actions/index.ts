import * as titleActions from './titles';
import axios from 'axios';
export {titleActions};
import {Component} from 'react';

const ROOT_URL = 'https://www.reddit.com';
export const SEARCH_SUBREDDITS = 'search_subreddits';

export const searchForSubreddits = (text: string = "all") => {
    const url = `${ROOT_URL}/search.json?q=subreddit%3A${text}`;
    const request = axios.get(url);

    return {
        type: SEARCH_SUBREDDITS,
        payload: request
    };

};