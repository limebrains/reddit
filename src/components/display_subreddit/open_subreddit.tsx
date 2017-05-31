import * as React from 'react';
import {connect} from 'react-redux';
import {LoaderComponent} from "../common/loader";
import {Link} from "react-router";
import { Home } from '../home';


interface IProps {
  threads?: any[];
  dispatch?: any;
  isVisible?: boolean;
  quanityOfSavedSubreddits?: number;
}

const mapStateToProps = (state: any): IProps => {
  return {
    threads: state.displaySubreddit.threads,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {dispatch};
};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class DisplaySubreddit extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  public readMore(){

  }

  private renderThreads = (thread: any) => {
    return(
      <div className="thread-panel col-xs-12" key={thread.data.id}>
        <h2>{thread.data.title}</h2> <h5>{thread.data.domain}</h5>
        <span>{thread.data.selftext.substring(0, 255)}... <span onClick={this.readMore}>READ MORE</span></span>
        <span><Link to="/home"> See on reddit</Link></span>
      </div>
    );
  };

  public render() {
    return(
      <div className="container">
        <div className="row">
          {this.props.threads &&
          this.props.threads.map((threads: any) => {
            return this.renderThreads(threads);
          })}
          {this.props.threads && this.props.threads.length === 0 && (<LoaderComponent />)}
        </div>
      </div>
    );
  }
}
