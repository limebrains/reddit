import * as React from 'react';
import {connect} from 'react-redux';
import SearchSubreddits from './searching';
import SavedSubreddits from './show_saved_subreddits';
import ButtonComponent from "./visibility_button";
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

interface IProps {
  dispatch?: any;
  isVisible?: boolean;
  quanityOfSavedSubreddits?: number;
}

const mapStateToProps = (state: any): IProps => {
  return {
    isVisible: state.subreddits.isVisible,
    quanityOfSavedSubreddits: state.subreddits.savedSubreddits.length,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {dispatch};
};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class SearchPageComponent extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {
    };

    document.addEventListener('touchmove', this.preventMacbookBack);
  }

  private preventMacbookBack = (e: any) => {
    e.preventDefault();
  };

  public render() {

    const gridType = this.props.isVisible ?  "col-xs-8"  : "only-first-row";
    const panel_width = this.props.isVisible ? '' : `${this.props.quanityOfSavedSubreddits*160}px`;
    return (
      <div className="page-content">
        <div className="panel-top">

          <div className="col-xs-1">
            <ButtonComponent />
          </div>

        </div>

        <div className="search-panel-container" >
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
    );
  }
}
