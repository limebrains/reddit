import * as React from 'react';
import {connect} from 'react-redux';
import {openThread} from "../../actions/display_subreddit";
const Markdown = require('react-remarkable');

interface IProps {
  threadList?: any;
  threadKey?: any;
  openThread?: any;
}

interface IState {
}

const mapStateToProps = (state: any): IProps => {
  return {
    threadKey: state.routing.locationBeforeTransitions.pathname.split('/')[4],
    threadList: state.displaySubreddit.threads,
  };
};

const mapDispatchToProps = {openThread};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class showThread extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  public componentDidMount() {
    this.props.openThread(this.props.threadList[0].data.permalink);
  };

  public find(obj: any) {
    return obj.id === this.props.threadKey;
  }


  public render() {
    const {
      threadList,
      threadKey,
    } = this.props;

    const thread = threadList.filter( (obj: any) => {
      return obj.data.id === threadKey;
    })[0];
    console.log(threadList, threadKey, thread);

    return(
      <div className="container">
        <div className="thread-panel col-xs-12">
          <Markdown source={thread.data.selftext} />
        </div>
      </div>
    );
  }
}
