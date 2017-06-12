import * as React from 'react';
import {connect} from "react-redux";
import {authorization} from "../../actions/authentication";

interface IProps {
  authorization?: any;
  request_data?: string;
}

interface IState {
}
const mapStateToProps = (state: any): IProps => {
  return {
    request_data: state.routing.locationBeforeTransitions.search,

  }
};

const mapDispatchToProps = {authorization};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class AuthPage extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  public componentDidMount() {
    const code = this.props.request_data.split('&code=')[1];
    this.props.authorization(code);

  }

  public render() {
    return(
      <div>
        Thanks you for login in, switching to main page in 3, 2, 1...
      </div>
    );

  }

}
