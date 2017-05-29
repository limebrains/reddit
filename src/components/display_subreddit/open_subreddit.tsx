import * as React from 'react';
import {connect} from 'react-redux';

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

  private renderThreads = (thread: any) => {
    console.log(thread);
    return(
      <div className="thread-panel col-xs-12" key={thread.data.id}>
        <h2>{thread.data.title}</h2>
        <span>{thread.data.selftext}</span>
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
        </div>
      </div>
    );
  }
}
