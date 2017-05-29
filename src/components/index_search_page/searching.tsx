import * as React from 'react';
import {connect} from 'react-redux';
import {hideSearchpanel, saveSubreddit, searchForSubreddits} from '../../actions/searching_page';

interface ISubreddit {
  data: any;
  kind: string;
}

interface ISubreddits {
  savedSubreddits: ISubreddit[];
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
        onClick={this.saveSubredditClick(subreddit)}
      >
        <div className="custom-list search-panel-results">
          {subreddit.data.display_name_prefixed}
          <br/>
          <small>{subreddit.data.public_description}</small>
        </div>
      </li>
    )
  };

  private saveSubredditClick = (subreddit: ISubreddit) => {
    if (!(this.props.subreddits.savedSubreddits.some(elem => elem === subreddit.data))){ //checking if object is an array
      return (e: any) => {
        this.props.saveSubreddit(subreddit.data);
      };
    }
  };


  public render() {
    return (
      <div className="container-fluid">
        <div className="search-panel pall">
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
        <div className="search-results">
          <ul>
            {this.props.subreddits.data && this.props.subreddits.data.map(
              (subreddit: ISubreddit, index: number) => {
                return this.renderSubreddit(subreddit, index);
              })}
          </ul>
        </div>
      </div>
    );
  }

}
