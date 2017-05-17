import * as React from 'react';
import { connect } from 'react-redux';
import { searchForSubreddits } from '../../actions/index';

interface IProps {
    text?: string;
    searchForSubreddits?: any;
    subreddits?: any[];
    dispatch?: any;
}

interface IState {
    mounted: boolean;
    input?: string;

}

const mapStateToProps = (state: any): IProps => {
  return {
      text: state.text || "",
      subreddits: state.subreddits,
  };
};

const mapDispatchToProps = (dispatch: any) => {
    return {dispatch, searchForSubreddits};
};

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
        const value = event.target.value;
        this.setState({input: value});
        this.props.dispatch(searchForSubreddits(value, this.props.dispatch));
    }
    private renderSubreddit = (subreddit: any, index: number) => {
      return (
          <li key={index}>
              {subreddit.data.subreddit}
              <br/>
              <small>{subreddit.data.title}</small>
          </li>
      )
    };

    public render() {
        return(<div className="row justify-content-md-center">
            <h2>Hello {this.state.input}!</h2>
            <form className="form-group col-sm-4 col-sm-offset-2" >
                <input type="text" className="col-sm-4 col-sm-offset-2" style={{width:"80%", height:'20px'}} value={this.state.input} onChange={e => this.handleChange(e)} />
            </form>
            <hr/>
            <ul>
                {this.props.subreddits[0] && Object.keys(this.props.subreddits).map((key: any, index: number) => {
                    const subreddit = this.props.subreddits[key];
                    return this.renderSubreddit(subreddit, index);
                })}
            </ul>
            <hr/>
        </div>);
    }

}
