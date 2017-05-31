import * as React from 'react';
import {connect} from 'react-redux';
import { removeSubreddit } from '../../actions/searching_page';
import {openSubreddit, fetchingSubreddit } from "../../actions/display_subreddit";


interface IProps {
  removeSubreddit?: any;
  dispatch?: any;
  savedSubreddits?: ISubreddit[];
  gridType?: string;
  openSubreddit?: any;
  fetchingSubreddit?: any;
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
    savedSubreddits: state.subreddits.savedSubreddits,
  };
};

const mapDispatchToProps = { removeSubreddit, openSubreddit, fetchingSubreddit };


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class showSavedSubreddits extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  public componentDidMount() {
    const {
      removeSubreddit
    } = this.props;
  }

  private removeSubredditOnClick = (subreddit: any ) => {
    return (e: any) => {
      this.props.removeSubreddit(subreddit);
    };
  };

  private openSubredditOnClick = (subreddit: any ) => {
    return (e: any) => {
      this.props.fetchingSubreddit();
      this.props.openSubreddit(subreddit.display_name_prefixed);
    };
  };


  private renderSubreddit = (subreddit: any, index: number) => {
    return (

      <div className="saved-subreddit-menu-item search-panel-results" key={subreddit.id}>
        <span onClick={this.openSubredditOnClick(subreddit)}>{subreddit.display_name_prefixed}</span>
        <span onClick={this.removeSubredditOnClick(subreddit)} className="close-icon">x</span>
      </div>
    );
  };


  public render() {
    return (
      <div className={this.props.gridType}>
        {this.props.savedSubreddits &&
        this.props.savedSubreddits.map((subreddit: any, index: number) => {
          return this.renderSubreddit(subreddit, index);
        })
        }
      </div>
    );
  };

}
