import * as React from 'react';
import {isUndefined} from "util";

interface IProps{
  media?: any;
}


export class RenderMedia extends React.Component<IProps, any> {

  public render(){
    const { media } = this.props;
    if (!isUndefined(media)) {
      const extension = media.url.split('.')[media.url.split('.').length - 1];
      if (media.url.indexOf('gfycat') !== -1) {
        return(
          <iframe
            src={`https://thumbs.${media.url.split('://')[1]}-mobile.mp4`}
            scrolling='no'
            width='640'
            height='360'>

          </iframe>
        );
      }
      if (media.url.indexOf('youtube') !== -1) {
        let link = `https://www.youtube.com/embed/${media.url.split('watch?v=')[1]}`;
        if (media.url.indexOf('&') !== -1){
          link = link.split('&')[0];
        }
        return(
          <iframe
            width="560"
            height="315"
            src={link} />
        );
      }

      if (media.url.indexOf('youtu.be') !== -1) {
        let link = `https://www.youtube.com/embed/${media.url.split('be/')[1]}`;
        if (media.url.indexOf('&') !== -1){
          link = link.split('&')[0];
        }
        return(
          <div className="">
            <iframe
              width="560"
              height="315"
              src={link} />
          </div>
        );
      }
      if (extension === 'gif') {
        return (<img src={media.url} alt=""/>);
      }
      if (extension === 'gif') {
        return (<img src={media.url} alt=""/>);
      }
      if (extension === 'gifv') {
        setTimeout(() => {
          (window as any).imgurEmbed.createIframe();
        }, 1000);
        const dataId = media.url.split('.com/')[1].split('.gif')[0];
        return (<blockquote className="imgur-embed-pub" lang="en" data-id={dataId}>
          <a href={`//imgur.com/${dataId}`}>Open Location</a></blockquote>);
      }

      switch(media.post_hint){
        case "image":
          return <img src={media.url} />;
        case "rich:video":
          return <div className="giphy-shit">
            <iframe
              src={media.url}
              frameBorder="0"
              className="giphy-iframe-props"
              allowFullScreen
            >
            </iframe></div>;
        default:
          return null;
      }
    }
    return null;
  }
}
