import * as React from 'react';
import {connect} from 'react-redux';
import {hideSearchpanel, saveSubreddit, searchForSubreddits} from '../../actions/searching_page';
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')

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
    isVisible?: boolean;
    SavedSubreddits?: any[];
}

interface IState {
    mounted: boolean;
    input?: string;
    isVisible?: boolean;
}

const mapStateToProps = (state: any): IProps => {
    return {
        text: state.text || "",
        subreddits: state.subreddits,
        isVisible: state.isVisible || true,
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
            input: '',
            isVisible: true,
            mounted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeVisibilityOfSearchPanel = this.changeVisibilityOfSearchPanel.bind(this);
        this.renderSearchPanel = this.renderSearchPanel.bind(this);
        this.renderVButton = this.renderVButton.bind(this);
    }


    public componentDidMount() {
        const {
            searchForSubreddits
        } = this.props;

    }

    public openSubreddit(event: any) {
        console.log(event);

    }

    public changeVisibilityOfSearchPanel() {
        this.setState({isVisible: !this.state.isVisible});
    }


    public handleChange(event: any): void {
        const value = event.target.value;
        this.setState({input: value});
        this.props.dispatch(searchForSubreddits(value, this.props.dispatch));
    }

    private renderSubreddit = (subreddit: ISubreddit, index: number) => {

        const boundSubClick = this.onItemClick.bind(this, subreddit);
        return (
            <li className="row search-panel pall" key={index} onClick={boundSubClick}>
                <div className="custom-list">
                    {subreddit.data.display_name_prefixed}
                    <br/>
                    <small>{subreddit.data.public_description}</small>
                </div>
            </li>
        )
    }

    private onItemClick(item: any, event: any) {
        const target = item.data;
        console.log(target);
        this.props.dispatch(saveSubreddit(target, this.props.dispatch))
    }

    public renderSearchPanel() {
        return (
            <div className="row col-xs-3 pall pleft">
                <div className="row">
                    <div className="row search-panel pall ptop">
                        <form className="form-group">
                            <input type="text" className="search-query mac-style"
                                   style={{height: '30px', width:'100%', fontSize: '18px'}} value={this.state.input}
                                   onChange={e => this.handleChange(e)}/>
                        </form>
                    </div>
                </div>
                <ul>
                    {this.props.subreddits.data && this.props.subreddits.data.map(
                        (subreddit: ISubreddit, index: number) => {
                            return this.renderSubreddit(subreddit, index);
                        })}
                </ul>
            </div>

        );
    }

    public renderVButton() {
        return (
            <div className="col-xs-1">
                <button type="button" className="btn" id="search-btn" onClick={this.changeVisibilityOfSearchPanel}>o
                </button>
            </div>
        )
    }


    public render() {
        return (
            <div className="container-fluid">
                <CSSTransitionGroup
                    transitionName="searchPanelAnim"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.state.isVisible && <this.renderSearchPanel />}
                    <this.renderVButton />

                </CSSTransitionGroup>
            </div>
        );
    }

}
