/* React */
import * as React from 'react';
import { StatelessComponent } from 'react';

/* React Router */
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

/* Router dependencies preparing */
import { history, store } from './prepare';

/* App configs */
import config from './config';

/* Components */
import { NotFound } from './components';
import IndexPage from "./components/index_search_page/layout";
import DisplaySubreddit from "./components/display_subreddit/open_subreddit";


/* Routes */
const { urlPrefix } = config;
const Routes: StatelessComponent<any> = (): any => {
  return (
    <Provider store={ store }>
      <Router history={ history }>
          <Route path={urlPrefix} component={ IndexPage }>
              <IndexRoute component= {DisplaySubreddit} />
          </Route>
          <Route path="*" component={ NotFound } />

      </Router>
    </Provider>
  );
};

export default Routes;
