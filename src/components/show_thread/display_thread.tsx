import * as React from 'react';
import {connect} from 'react-redux';


interface IProps {
  threadList?: any;
  threadKey?: any;
}

interface IState {
}

const mapStateToProps = (state: any): IProps => {
  console.log(state.routing);
  return {
    threadList: state.displaySubreddit.threads,
    threadKey: parseInt(state.routing.locationBeforeTransitions.pathname.split('/')[2]),

  };
};

const mapDispatchToProps = {};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class showThread extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  public find(obj: any){
     return obj.id == this.props.threadKey;
    }


  public render() {
    const {
      threadList,
      threadKey,
    } = this.props;

    const thread = threadList.filter( (obj:any) => {
      return obj.data.id == threadKey
    })[0];
    console.log(threadList, threadKey, thread);

    return(
      <div className="container">
        <p>{thread.data.selftext}</p>
      </div>
    );
  }
}
