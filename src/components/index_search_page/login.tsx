import * as React from 'react';
import { connect } from 'react-redux';
import { authorization } from '../../actions/index';

interface IProps {
    login?: string;
    password?: string;
    searchForSubreddits?: any;
}

interface IState {
    mounted: boolean;

}

const mapDispatchToProps = {authorization};


const mapStateToProps = (state: any): IProps => {
    return {
        login: state.login || "",
        password: state.password || ""
    };
};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Login extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            mounted: false,
        };

        //this.handleChange = this.handleChange.bind(this);
        console.log(props);
    }

    public LoginAndAuth(e){
        console.log(this.props);
        const config = {
            username: "",
            password: "",

        }
    }


    public render() {
        return(<div>
            <h1>Login Page</h1>
            <form onSubmit={this.LoginAndAuth}>
                <input type="text" name="Login" />
                <input type="text" name="password" />
                <input type="submit" className="btn" value="Submit!" />
            </form>
        </div>);

    }
}