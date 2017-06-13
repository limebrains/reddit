import * as React from 'react';
import {StatelessComponent} from 'react';
import Navbar from "./search_page";
import '../layout.scss';

interface ILayout {
  children: React.ComponentElement<any, any>;
}

const IndexPage: StatelessComponent<ILayout> = ({children}): any => {
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
