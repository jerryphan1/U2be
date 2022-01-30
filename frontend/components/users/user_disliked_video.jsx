import React from "react";
import VideoFormat from "./video_format";

export default class UserDislikedVideo extends React.Component{
  constructor(props){
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount(){
    this.props.fetchVideos();
    this.props.fetchDislikes();
  }  

  handleMouseEnter(e) {
    e.preventDefault();
    {
      if (e.target.className === 'user-video-actual-video' ) {
      this.startPreview(e.target);
      setTimeout(() => this.stopPreview(e.target),4000)
      }
    } 
  }
  
  handleMouseLeave(e) {
    e.preventDefault();
    if (e.target.className === 'user-video-actual-video') {
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
    if (!this.props.dislikedVids) {
      return null
    } else if (this.props.dislikedVids.length === 0){
      return (
        <div>
          <p>This channel has no disliked videos.</p>
        </div>
      )
    } else {
              return(
                <div className="user-video-container">
                  {
                    this.props.dislikedVids.map((video) => <VideoFormat video={video}
                    key={video.id}
                    MouseEnter={this.handleMouseEnter} MouseLeave={this.handleMouseLeave}/>)
                  }
                </div>
              )
    }
  }
}