import * as React from "react";
import {connect} from "react-redux";
import {Config} from "../../constants";
import {getUserName} from "../../actions/account";

interface IProps {
  token?: string;
  username?: string;
  getUserName?: any;
}

interface IState {
}

const mapStateToProps = (state: any): IProps => {
  return {
    token: state.authReducer.token,
    username: state.accountReducer.userName
  };
};

const mapDispatchToProps = {getUserName};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class TopBar extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  public render() {
    const {
      ROOT_API_URL,
      CLIENT_ID,
      REDIRECT_URI
    } = Config;
    const {
      token, username
    } = this.props;
    const STATE = '12345';
    const authLink = `${ROOT_API_URL}authorize?client_id=${CLIENT_ID}&response_type=code&state=${STATE}&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=identity`;


    if(!token){
      return(
        <div className="auth-top col-xs-12">
          <div className="auth-urself">
            <a href={authLink}>
              Auth yourself with your Reddit account!
            </a>
          </div>
        </div>
      );
    }

    if(token){
      if(!username) {this.props.getUserName(token)}
      return(
        <div className="auth-top col-xs-12">
          <div className="nick">
            Hello {username}!
          </div>
        </div>
      );
    }
  }
}
