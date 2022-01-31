import React from "react";


export default class VideoViews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // user_id: this.props.video.user_id,
      // title: this.props.video.title,
      // description: this.props.video.description,
      // thumbnail: this.props.video.thumbnail,
      // uploaded_video: this.props.video.uploaded_video,
      views: this.props.video.views
    }
  }


  componentDidMount(){
    this.setState({
      // user_id: this.props.video.user_id,
      // title: this.props.video.title,
      // description: this.props.video.description,
      // thumbnail: this.props.video.thumbnail,
      // uploaded_video: this.props.video.uploaded_video,
      views: this.state.views + 1
    })
  }

  updateViewCount(){
    const video = Object.assign({}, this.state);
    this.props.processForm(video)
  }

  render(){
    if (!this.props.video) return null
    let internationalNumberFormat = new Intl.NumberFormat('en-US')
    return(
      <h3 className="video-show-views">{internationalNumberFormat.format(this.state.views)} views</h3>
    )
  }
}