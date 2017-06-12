import * as React from 'react';
import {connect} from 'react-redux';
import {hideSearchpanel} from '../../actions/searching_page';

interface IProps {
  dispatch?: any;
  hideSearchpanel?: any;
  isVisible?: boolean;
}

interface IState {
}

const mapStateToProps = (state: any): IProps => {
  return {
    isVisible: state.subreddits.isVisible,
  };
};

const mapDispatchToProps = { hideSearchpanel };


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class ButtonComponent extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {};
  }


  public changeVisibilityOfSearchPanel = () => {
    this.props.hideSearchpanel(this.props.isVisible);
  };

  public render() {
    return(
      <div className="container-fluid flip-menu">
          <button
            type="button"
            className="btn"
            id="search-btn"
            onClick={this.changeVisibilityOfSearchPanel}
          >
            o
          </button>
      </div>
    );
  };

}
