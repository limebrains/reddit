import * as React from 'react';
import { StatelessComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import searchForSubreddits from '../../actions';

const indexPage: StatelessComponent<any> = (): any => {
  return (
    <div>
        <h1>Hello Boilerplate!</h1>
        <Link to="/home">Home</Link>
    </div>
      );
};

export default indexPage;
