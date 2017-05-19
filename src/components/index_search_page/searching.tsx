import * as React from 'react';
import { connect } from 'react-redux';
import { searchForSubreddits } from '../../actions/searching_page';

interface ISubreddit {
    data: any;
    kind: string;
}

interface ISubreddits {
    data: ISubreddit[];
}

interface IProps {
    text?: string;
    searchForSubreddits?: any;
    subreddits?: ISubreddits;
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
    }



    public componentDidMount() {
        const {
            searchForSubreddits
        } = this.props;


    }

    public openSubreddit(event:any){
        console.log(event);
    }

    public handleChange(event: any) : void{
        const value = event.target.value;
        this.setState({input: value});
        this.props.dispatch(searchForSubreddits(value, this.props.dispatch));
        console.log(this.props.subreddits);
    }
    private renderSubreddit = (subreddit: ISubreddit, index: number) => {
        return (
            <li key={index} onClick={e => this.openSubreddit(e)}>
                {subreddit.data.display_name_prefixed}
                <br/>
                <small>{subreddit.data.public_description}</small>
            </li>
        )
    };

    public render() {
        return(

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
                        <form className="form-group">
                            <input type="text" className="search-query mac-style" style={{height: '30px', width:'100%', fontSize: '18px'}} value={this.state.input} onChange={e => this.handleChange(e)} />
                        </form>
                    </div>
                    <div className="col-lg-7"></div>
                </div>


                <div className="row">
                    <div className="col-12 col-md-auto">
                        <ul>
                            {this.props.subreddits.data && this.props.subreddits.data.map((subreddit: ISubreddit, index: number) => {
                                return this.renderSubreddit(subreddit, index);
                            })}
                        </ul>
                    </div></div></div>);
    }

}
