import React from "react";
import LeftNavbar from "./left_navbar";
import LeftIcons from "./left_icons";
import TopNavbar from "./top_navbar";

export default class VideosSearch extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchVideos()
  }

  loadTop(){
    window.scrollTo(0, 0);
  }

  handleMouseEnter(e) {
    e.preventDefault();
    {
      if (e.target.className === 'index-actual-video' ) {
      this.startPreview(e.target);
      setTimeout(() => this.stopPreview(e.target),4000)
      }
    } 
  }
  
  handleMouseLeave(e) {
    e.preventDefault();
    if (e.target.className === 'index-actual-video') {
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
    return(
      <div>
        <TopNavbar/>
        <LeftNavbar/>
        <LeftIcons/>
      </div>
    )
  }
}