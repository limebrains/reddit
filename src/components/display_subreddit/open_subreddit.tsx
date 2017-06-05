import * as React from 'react';
import {connect} from 'react-redux';
import {LoaderComponent} from "../common/loader";
import {Link} from "react-router";
const Markdown = require('react-remarkable');

interface IProps {
  threads?: any[];
  dispatch?: any;
  isVisible?: boolean;
  quanityOfSavedSubreddits?: number;
  openThread?: any;
}

const mapStateToProps = (state: any): IProps => {
  return {
    threads: state.displaySubreddit.threads,
  };
};

const mapDispatchToProps = (dispatch: any) => { return {dispatch}; };


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class DisplaySubreddit extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {};
  };

  public componentDidMount() {
    const script = document.createElement('script');
    script.src = "//s.imgur.com/min/embed.js";
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.threads &&
          this.props.threads.map((threads: any) => {
            return this.renderThreads(threads);
          })}
          {this.props.threads && this.props.threads.length === 0 && (<LoaderComponent />)}
        </div>
      </div>
    );
  }

  private renderMedia = (media: any) => {
    const extension = media.url.split('.')[media.url.split('.').length - 1];
    if (extension === 'gif') {
      return <img src={media.url} alt=""/>
    }
    if (extension === 'gifv') {
      setTimeout(() => {
        (window as any).imgurEmbed.createIframe();
      }, 1000);
      const dataId = media.url.split('.com/')[1].split('.gif')[0];
      return (<blockquote className="imgur-embed-pub" lang="en" data-id={dataId}>
        <a href={`//imgur.com/${dataId}`}></a></blockquote>);
    }

    switch(media.post_hint){
      case "image":
        return <img src={media.url} />;
      case "rich:video":
        return <div className="giphy-shit">
          <iframe src={media.url} frameBorder="0" className="giphy-iframe-props" allowFullScreen>
          </iframe></div>;
      default:
        return;
    }

  }


  private renderThreads = (thread: any) => {
    return (
      <div className="thread-panel col-xs-12" key={thread.data.id}>
        <h2><Markdown source={thread.data.title} /></h2>
        <a href={thread.data.url}><h5>{thread.data.domain}</h5></a>
        {this.renderMedia(thread.data)}
        {/*<Markdown source={thread.data.media_embed.content} />*/}
        <span>
          <Markdown source={thread.data.selftext.substring(0, 266)} />
        </span>
        <br/>
        <Link to={`/${thread.data.subreddit_name_prefixed}/thread/${thread.data.id}/`}>
          Open thread
        </Link>
      </div>
    );
  }


}
