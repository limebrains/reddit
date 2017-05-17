import * as React from 'react';
import { connect } from 'react-redux';
import { searchForSubreddits } from '../../actions/index';

interface IProps {
    text?: string;
    searchForSubreddits?: any;
}

interface IState {
    mounted: boolean;
    input?: string;

}

const mapStateToProps = (state: any): IProps => {
  return {
      text: state.text || "",
  };
};

const mapDispatchToProps = {searchForSubreddits};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class SearchSubreddits extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            mounted: false,
            input: ''
        };

        //this.handleChange = this.handleChange.bind(this);
        console.log(props);
    }



    public componentDidMount() {
        const {
            searchForSubreddits
        } = this.props;


    }

    public handleChange(event: any) : void{
        this.setState({input: event.target.value});
        searchForSubreddits(this.state.input);
    }

    public render() {
        return(<div className="row justify-content-md-center">
            <h2>Hello {this.state.input}!</h2>
            <form className="form-group col-sm-4 col-sm-offset-2" >
                <input type="text" className="col-sm-4 col-sm-offset-2" style={{width:"80%", height:'20px'}} value={this.state.input} onChange={e => this.handleChange(e)} />
            </form>
            <br/>
        </div>);
    }

}
