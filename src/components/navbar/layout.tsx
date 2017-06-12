import * as React from 'react';
import {StatelessComponent} from 'react';
import Navbar from "./search_page";

const IndexPage: StatelessComponent<any> = ({children}): any => {
  return (
    <div className="page-container">
      < Navbar />
      <section className="content">
        { children }
      </section>
    </div>

  );
};

export default IndexPage;
