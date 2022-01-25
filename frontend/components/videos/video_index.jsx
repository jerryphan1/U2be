import React from "react";
import VideoIndexItem from "./video_index_item";

export default class VideoIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchVideos()
  }

  handleMouseEnter(e) {
    e.preventDefault();
    {if (e.target.className === 'video-index-thumbnail' ) console.log('test')} {
      console.log('hello')
    }
    // this.startPreview();
    // setTimeout(this.stopPreview,4000)
  }
  
  handleMouseLeave(e) {
    e.preventDefault();
    clearTimeout();
    // this.stopPreview();
  }
  
  startPreview() {
    // e.preventDefault();
    const video = document.querySelector('.video-index-thumbnail video');
    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play()
  }
  
  stopPreview(){
    // e.preventDefault();
    const video = document.querySelector('.video-index-thumbnail video');
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
  }

  render(){
    return (
      <div id='main-video-index-container' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div id='video-index-blacktext'></div>
        {
          this.props.videos.map((video) => <VideoIndexItem video={video} key={video.id} />)
        }
      </div>
    )
  }
}