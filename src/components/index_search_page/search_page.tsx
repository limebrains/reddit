import * as React from 'react';
import {connect} from 'react-redux';
import SearchSubreddits from './searching';
import SavedSubreddits from './show_saved_subreddits';
import ButtonComponent from "./visibility_button";
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

interface IProps {
  dispatch?: any;
  isVisible?: boolean;
}

const mapStateToProps = (state: any): IProps => {
  return {
    isVisible: state.subreddits.isVisible,
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

  }

  public render() {

    const gridType = this.props.isVisible ?  "col-xs-8"  : "col-xs-11";
    const gridnumber = this.props.isVisible ? 'col-xs-4' : 'col-xs-1';
    return (
      <div className="page-content">

        <div className={gridnumber}>
          <CSSTransitionGroup
            transitionName="searchPanelAnim"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
          >
            {
              this.props.isVisible &&
              <div className="col-xs-11">

                <SearchSubreddits/>
              </div>
            }

            <div className="col-xs-1">
              < ButtonComponent />
            </div>
          </CSSTransitionGroup>
        </div>
        <div className={gridType}>
          <SavedSubreddits />
        </div>
      </div>
    );
  }
}
