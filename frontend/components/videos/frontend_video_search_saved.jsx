import React from "react";
import LeftNavbar from "./left_navbar";
import LeftIcons from "./left_icons";
import TopNavbar from "./top_navbar";
// import VideoIndexItem from './videos/video_index_item'

export default class VideosSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      errors: []
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount(){
    this.props.fetchVideos()
      .fail(() => this.setState({errors: this.props.errors}))
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.componentDidMount()
    }
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
    if (!this.props.videos) return null 
    if (this.props.errors.length > 0) {
      return (
        <div>
          <TopNavbar/>
          <LeftNavbar/>
          <LeftIcons/>
            <ul className="no-search-errors">
                  {this.props.errors.map((error, idx) => {
                      return <li key={idx}>{error}, please try again</li>
                  })}
              </ul>
        </div>
      )
    } else {
        return(
          <div>
            <TopNavbar/>
            <LeftNavbar/>
            <LeftIcons/>
              <div id='main-video-index-container'>
                <div id='video-index-blacktext'></div>
                {
                  this.props.videos.map((video) => <VideoIndexItem video={video} key={video.id} MouseEnter={this.handleMouseEnter} MouseLeave={this.handleMouseLeave}
                    loadTop={this.loadTop}/>)
                }
              </div>
          </div>
        )
    }
  }
}