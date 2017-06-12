/* Import the requirements */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import SearchPageComponent from "./components/navbar/search_page";
import SearchSubreddits from "./components/navbar/searching";

require('bootstrap-loader');

/* Start the app */
const rootEl = document.getElementById('site');
ReactDOM.render((
          <AppContainer>
            <Routes />
          </AppContainer>
), rootEl);
