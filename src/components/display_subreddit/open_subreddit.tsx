import * as React from 'react';
import {connect} from 'react-redux';
import {LoaderComponent} from "../common/loader";
import {Link} from "react-router";
import {openSubreddit, fetchingSubreddit, loadNewPage, openNewPage} from "../../actions/display_subreddit";
import {RenderMedia} from "../common/render_media";
const Markdown = require('react-remarkable');
const Waypoint = require('react-waypoint');



interface IProps {
  threads?: any[];
  dispatch?: any;
  isVisible?: boolean;
  quanityOfSavedSubreddits?: number;
  openThread?: any;
  openSubreddit?: any;
  loadNewPage?: any;
  pageNumber?: number;
  fetchingSubreddit?: any;
  openNewPage?: any;
  route?: string;
}

const mapStateToProps = (state: any): IProps => {
  return {
    threads: state.displaySubreddit.threads,
    route: state.routing.locationBeforeTransitions.pathname,
    pageNumber: state.displaySubreddit.pageNumber,
  };
};

const mapDispatchToProps = {openSubreddit, fetchingSubreddit, loadNewPage, openNewPage};


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class DisplaySubreddit extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {};
  };


  private renderThreads = () => {
    return(
      <div className="row">
        {this.props.threads &&
        this.props.threads.map((threads: any) => {
          return this.renderThread(threads);
        })}
        {this.props.threads && this.props.threads.length === 0 && (<LoaderComponent />)}
      </div>
    );

  }

  private renderThread = (thread: any) => {
    return (
      <div className="thread-panel col-xs-12" key={thread.data.id}>
        <h2><Markdown source={thread.data.title} /></h2>
        <a href={thread.data.url}><h5>{thread.data.domain}</h5></a>
        <RenderMedia media={thread.data} />
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

  public componentWillMount() {
    this.props.fetchingSubreddit();
    this.props.openSubreddit(this.props.route);
  }

  public componentWillUnmount() {
    // document.body.removeChild(script);
  }

  public componentDidMount() {
    const script = document.createElement('script');
    script.src = "//s.imgur.com/min/embed.js";
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }

  public componentWillReceiveProps(newProps: any){
    if(this.props.route != newProps.route) {
      this.props.fetchingSubreddit();
      this.props.openSubreddit(newProps.route);
    }
  }

  public loadNewPage = () => {
    const {threads, pageNumber} = this.props;
    const lastItem = threads[threads.length - 1];
    console.log('LAST ITEM', lastItem);
    const newRoute = this.props.route + '.json?count=' + pageNumber*25 + '&after=' + lastItem.data.name;
    console.log(newRoute);
    this.props.loadNewPage();
    this.props.openNewPage(newRoute);
  }

  public render() {
    return (
      <div className="container">
        {this.renderThreads()}

        <Waypoint
          onEnter={this.loadNewPage}
        />
        <div className="row">LOAD MOAR</div>
      </div>
    )
  }
}
