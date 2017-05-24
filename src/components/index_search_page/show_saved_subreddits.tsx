import * as React from 'react';
import {connect} from 'react-redux';

interface IProps {
  dispatch?: any;
  SavedSubreddits?: ISubreddit[];
}

interface ISubreddit {
  data: any;
  kind: string;
}

interface ISubreddits {
  data: Object;
}


interface IState {
}

const mapStateToProps = (state: any): IProps => {
  return {
    SavedSubreddits: state.subreddits.savedSubreddits,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {dispatch};
};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class showSavedSubreddits extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };

  }


  private renderSubreddit = (subreddit: any, index: number) => {
    return (
      <div className="custom-list row search-panel pall col-xs-2" key={index}>
        {subreddit.display_name_prefixed}
      </div>
    );
  };


  public render() {
    return (
      <div className="container-fluid">
        {this.props.SavedSubreddits &&
        this.props.SavedSubreddits.map((subreddit: any, index: number) => {
          return this.renderSubreddit(subreddit, index);
        })
        }
      </div>
    );
  }
}
