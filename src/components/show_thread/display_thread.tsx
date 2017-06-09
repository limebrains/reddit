import * as React from 'react';
import {connect} from 'react-redux';
import {openThread, fetchThread} from "../../actions/display_subreddit";
import {LoaderComponent} from "../common/loader";
import {RenderMedia} from "../common/render_media";
const Markdown = require('react-remarkable');

interface IProps {
  fetchThread?: any;
  threadList?: any;
  threadKey?: any;
  openThread?: any;
  thread_replies?: any;
  route?: any;
  original_post?: any;
}

interface IState {
}

const mapStateToProps = (state: any): IProps => {
  return {
    threadKey: state.routing.locationBeforeTransitions.pathname.split('/')[4],
    threadList: state.displaySubreddit.threads,
    thread_replies: state.displaySubreddit.thread_replies,
    original_post: state.displaySubreddit.original_post,
    route: state.routing.locationBeforeTransitions.pathname,
  };
};

const mapDispatchToProps = {openThread, fetchThread};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class showThread extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  private renderRepliestoReplies(reply: any) {
    return(
      <div className="thread-reply col-xs-12" key={reply.data.id}>
        <h5><Markdown source={reply.data.author} /></h5>
        <Markdown source={reply.data.body} />
        {reply.data.replies &&
        reply.data.replies.data.children.map((replies:any) =>{
          return this.renderRepliestoReplies(replies)
        })
        }

      </div>
    );
  }

  private renderReplies(reply: any) {
    return(
      <div className="thread-panel thread-reply col-xs-12" key={reply.data.id}>
        <h5><Markdown source={reply.data.author} /></h5>
        <Markdown source={reply.data.body} />
        {reply.data.replies &&
        reply.data.replies.data.children.map((replies:any) =>{
          return this.renderRepliestoReplies(replies)
        })
        }
      </div>

    );

  }

  public componentWillMount() {
    const { route, fetchThread, openThread } = this.props;

    fetchThread();

    const path = '/r/' + route.split('/')[2] + '/' + route.split('/')[4];
    openThread(path);
  };


  public render() {
    const { thread_replies, original_post } = this.props;
    console.log('REPLIES', thread_replies);
    console.log("OP", original_post);


    if(original_post)
    {
      let post = original_post.children["0"].data;
      return(
        <div className="container">
          <div className="thread-panel col-xs-12">
            <h2><Markdown source={post.title} /></h2>
            <h5><Markdown source={post.author} /></h5>
            <RenderMedia media={post} />
            <Markdown source={post.selftext} />
          </div>
          {
            thread_replies && thread_replies.length === 0 && <LoaderComponent />
          }
          <div className="thread-replies-container col-xs-12">
            {thread_replies &&
            thread_replies.map((replies: any) => {
              return this.renderReplies(replies)
            })}
          </div>
        </div>

      );
    }

    return(
      <div className="container">
        <LoaderComponent />
      </div>
    );
  }
}
