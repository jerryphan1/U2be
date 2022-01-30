import React from "react";
import VideoSideItem from "./video_side_item";

export default class VideoSide extends React.Component {
  constructor(props){
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount(){
    this.props.fetchVideos();
  }  

  handleMouseEnter(e) {
    e.preventDefault();
    {
      if (e.target.className === 'side-actual-video' ) {
      this.startPreview(e.target);
      setTimeout(() => this.stopPreview(e.target),4000)
      }
    } 
  }
  
  handleMouseLeave(e) {
    e.preventDefault();
    if (e.target.className === 'side-actual-video') {
      this.stopPreview(e.target);
    }
  }
  
  startPreview(target) {
    // e.preventDefault();
    target.muted = true;
    target.currentTime = 1;
    target.playbackRate = 0.5;
    target.play()
  }
  
  stopPreview(target){
    target.currentTime = 0;
    target.playbackRate = 1;
    target.pause();
    target.load();
  }


  render(){
    return (
      <div>
        {
          this.props.videos.map((video) => <VideoSideItem video={video} key={video.id}
          MouseEnter={this.handleMouseEnter} MouseLeave={this.handleMouseLeave}/>)
        }
      </div>
    ) 
  }
}

