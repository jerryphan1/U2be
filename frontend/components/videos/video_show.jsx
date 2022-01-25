import React from "react";

export default class VideoShow extends React.Component {
  constructor(props){
    super(props)
  }



  componentDidMount(){
    let all = window.location.href.split('/');
    let video = all[all.length -1]
    this.props.fetchVideo(video)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.componentDidMount()
    }
  }

  // this.props.video?.uploaded_video  "" checks for value if not itll return empty, 
  // good to run with the id because refreshes can take time
  render(){
    return (
      <div id='video-show-container'>
        <video id='video-show-video' src={this.props.video?.uploaded_video || ""} controls/>

      </div>
    )
  }
}