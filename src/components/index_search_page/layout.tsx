import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as React from 'react';
import SearchSubreddits from './searching';
import { StatelessComponent } from 'react';

const IndexPage: StatelessComponent<any> = (): any => {
  return (
    <div className="page-container">
         < SearchSubreddits />
        <Link to="/home">Home</Link>
    </div>
      );
};

export default IndexPage;
