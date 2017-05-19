/* Import the requirements */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
require('bootstrap-loader');

/* Start the app */
const rootEl = document.getElementById('site');
ReactDOM.render((
          <AppContainer>
            <Routes />
          </AppContainer>
), rootEl);
