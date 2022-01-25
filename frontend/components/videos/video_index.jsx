import React from "react";
import VideoIndexItem from "./video_index_item";

export default class VideoIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchVideos()
  }

  render(){
    return (
      <div id='main-video-index-container'>
        <div id='video-index-blacktext'></div>
        {
          this.props.videos.map((video) => <VideoIndexItem video={video} key={video.id} />)
        }
      </div>
    )
  }
}