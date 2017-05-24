import * as React from 'react';
import {connect} from 'react-redux';
import {hideSearchpanel, saveSubreddit, searchForSubreddits} from '../../actions/searching_page';

interface ISubreddit {
  data: any;
  kind: string;
}

interface ISubreddits {
  data: ISubreddit[];
}

interface IProps {
  text?: string;
  SavedSubreddits?: any[];
  searchForSubreddits?: any;
  hideSearchpanel?: any;
  saveSubreddit?: any;
  subreddits?: ISubreddits;
  dispatch?: any;
}

interface IState {
  mounted: boolean;
  input?: string;
}


const mapStateToProps = (state: any): IProps => {
  return {
    text: state.subreddits.text || "",
    subreddits: state.subreddits,
  };
};

const mapDispatchToProps = {searchForSubreddits, saveSubreddit, hideSearchpanel};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class SearchSubreddits extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
      mounted: false,
    };
  }


  public componentDidMount() {
    const {
      searchForSubreddits
    } = this.props;
  }

  public openSubreddit = (event: any) => {

  };

  public handleChange = (event: any): void => {
    const value = event.target.value;
    this.setState(
      {
        ...this.state,
        input: value,
      }
    );
    this.props.searchForSubreddits(value);
  };

  private renderSubreddit = (subreddit: ISubreddit, index: number) => {
    return (
      <li
        className="row search-panel pall"
        key={index}
        onClick={this.onSubredditClick(subreddit)}
      >
        <div className="custom-list">
          {subreddit.data.display_name_prefixed}
          <br/>
          <small>{subreddit.data.public_description}</small>
        </div>
      </li>
    )
  };

  private onSubredditClick = (subreddit: ISubreddit) => {
    return (e: any) => {
      this.props.saveSubreddit(subreddit.data);
    };
  };

  public renderSearchPanel() {
    return (
      <div className="row pall pleft col-xs-11">
        <div className="row">
          <div className="row search-panel pall ptop">
            <form className="form-group">
              <input
                type="text"
                className="search-query mac-style"
                style={{height: '30px', width:'100%', fontSize: '18px'}}
                value={this.state.input}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
        <ul>
          {this.props.subreddits.data && this.props.subreddits.data.map(
            (subreddit: ISubreddit, index: number) => {
              return this.renderSubreddit(subreddit, index);
            })}
        </ul>
      </div>

    );
  }

  public render() {
    return (
      <div className="container-fluid">

          {this.renderSearchPanel()}
      </div>
    );
  }

}
