import * as React from 'react';
import {connect} from 'react-redux';
import SearchSubreddits from './searching';
import SavedSubreddits from './show_saved_subreddits';
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')


interface IState {
}

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
export default class SearchPageComponent extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
    };

  }

  public render() {

    const gridType = this.props.isVisible ?  "col-xs-8"  : "col-xs-12";
    return (
      <div className="page-content">
        <CSSTransitionGroup
          transitionName="searchPanelAnim"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {
            this.props.isVisible &&
            <div className="col-xs-4">
              <SearchSubreddits/>
            </div>
          }
          <div className={gridType}>
            <SavedSubreddits />
          </div>
        </CSSTransitionGroup>

      </div>
    );
  }
}
