import * as React from 'react';
import {connect} from "react-redux";
import {browserHistory} from "react-router";

interface IProps {
}

interface IState {
}
const mapStateToProps = (state: any): IProps => {
  return {
  };
};

const mapDispatchToProps = {};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class AuthPage extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  public componentDidMount() {
    browserHistory.push('/');
  }

  public render() {
    return(
      <div>
        Thanks you for login in, switching to main page in 3, 2, 1...
      </div>
    );

  }

}
