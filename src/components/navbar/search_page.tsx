import * as React from 'react';
import SearchSubreddits from './searching';
import SavedSubreddits from './show_saved_subreddits';
import ButtonComponent from "./visibility_button";
import {Link} from "react-router";
import {Config} from "../../constants";
import {connect} from "react-redux";
import {getUserName} from "../../actions/account";
import TopBar from "./top_bar";
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

interface IProps {
  dispatch?: any;
  isVisible?: boolean;
  quanityOfSavedSubreddits?: number;
  currentSubredditLocation?: string;
}

const mapStateToProps = (state: any): IProps => {
  return {
    isVisible: state.subreddits.isVisible,
    quanityOfSavedSubreddits: state.subreddits.savedSubreddits.length,
    currentSubredditLocation: state.routing.locationBeforeTransitions.pathname,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {dispatch};
};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Navbar extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {
    };

    document.addEventListener('touchmove', this.preventMacbookBack);
  }

  private preventMacbookBack = (e: any) => {
    e.preventDefault();
  };

  public printLocation = () => {
    const locationName = this.props.currentSubredditLocation.split('/');
    if (locationName.length <= 2)
    {
      return 'Reddit Front Page';
    }
    if (locationName.length >= 3)
    {
      locationName.splice(3, locationName.length);
    }
    return (
      <Link to={locationName.join('/') + '/'}>
        {locationName.join('/')}
      </Link>
    );
  };

  public render() {

    const gridType = this.props.isVisible ?  "top-panel-max-height col-xs-8"  : "only-first-row";
    const panel_width = this.props.isVisible ? '' : `${this.props.quanityOfSavedSubreddits*160}px`;

    return (
      <div className="navbar">
        <div className="row">
          <TopBar />
        </div>
        <div className="page-content top-panel-max-height">
          <div className="row">
            <div className="panel-top ">

              <div className="col-xs-1">
                <ButtonComponent />
              </div>

            </div>

            <div className="search-panel-container " >
              {
                this.props.isVisible &&
                <div className="col-xs-3">
                  <SearchSubreddits/>
                </div>
              }
            </div>
            <div className="extra-width">
              <SavedSubreddits gridType={gridType} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="where-you-are-bar">
            {this.printLocation()}
          </div>
        </div>

      </div>
    );
  }
}
