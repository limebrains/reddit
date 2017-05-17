import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getNextTitle } from '../../actions/titles';
import {object} from "../../helpers";

interface IConnectedProps {
  getNextTitle?: any;
  dispatch?: any;
}

// Welcome component
interface IProps extends IConnectedProps {
  title?: string;
};

interface IState {
  mounted: boolean;
}

// Export the class for testing
export class Welcome extends Component<IProps, IState> {

  private interval: any;

  constructor(props: any) {
    super(props);
    this.state = {
      mounted: false
    }
  }

  public componentDidMount() {
    console.log(this.props);
    this.interval = setInterval(() => {
      const { getNextTitle, title } = this.props;
      getNextTitle(title);
    }, 1000);

    this.setState({mounted: true});
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({mounted: false});
  }

  public render() {
    const { getNextTitle, title } = this.props;
    return (
      <h3 onClick={ () => getNextTitle(title) }>
        Welcome to { title }.
      </h3>
    );
  }
}

// State to props for connect argument
const mapStateToProps = (state: any): IProps => {
  return {
    title: state.titleReducer.title,
  };
};

// Dispatch to props for connect argument
const mapDispatchToProps = {getNextTitle};

// Conect the component with Redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
