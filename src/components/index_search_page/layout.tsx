import * as React from 'react';
import { StatelessComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SearchSubreddits from "./searching";


const IndexPage: StatelessComponent<any> = (): any => {
  return (
    <div className="page-container">
        < SearchSubreddits />
        <Link to="/home">Home</Link>
    </div>
      );
};

export default IndexPage;
