import * as titleActions from './titles';
import axios from 'axios';
export { titleActions };
import { Component } from 'react';

const ROOT_URL = 'http://reddit.com/';
export const SEARCH_SUBREDDITS = 'search_subreddits';

export default function searchForSubreddits(text) {

    const url = `${ROOT_URL}/subreddits/search.json/?q=${text}`;
    const request = axios.get(url);

    return {
        type: SEARCH_SUBREDDITS,
        payload: request
    };


}