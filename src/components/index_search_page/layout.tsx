import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as React from 'react';
import SearchSubreddits from './searching';
import SavedSubreddits from './show_saved_subreddits';
import {StatelessComponent} from 'react';
import SearchPageComponent from "./search_page";


const IndexPage: StatelessComponent<any> = (): any => {
  return (
    <div className="page-container">
      < SearchPageComponent />
    </div>

  );
};

export default IndexPage;
