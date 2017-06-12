import {authorization} from '../../actions/searching_page';
import {connect} from 'react-redux';
import * as React from 'react';

interface IProps {
  authorization?: any;
}

interface IState {
  mounted: boolean;
  username: string;
  password: string;
  submitted: boolean;
}

const mapDispatchToProps = {authorization};

@(connect(null, mapDispatchToProps) as any)
export default class Login extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      mounted: false,
      password: '',
      username: '',
      submitted: false,
    };
  }

  public formSubmit = (event: any) => {
    event.preventDefault();
    const newState = {
      ...this.state,
      submitted: true,
    };
    this.setState(newState);
  };

  public handleChange = (event: any): void => {
    const newState = {
      ...this.state,
      [event.target.name]: event.target.value,
    };

    this.setState(newState);
  };

  public render() {
    return (<div>
      <h1>Login Page</h1>
      <form onSubmit={this.formSubmit}>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" className="btn" value="Submit!"/>
      </form>
    </div>);

  }
}
