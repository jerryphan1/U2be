import React from "react";


export default class VideoViews extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.video
    this.updateViewCount = this.updateViewCount.bind(this)
  }


  componentDidMount(){
    // debugger
    console.log(this.state.views)
    this.setState({
      views: this.state.views + 1
    })
    this.updateViewCount()
  }

  updateViewCount(){
    const video = Object.assign({}, this.state);
    console.log(video)
    // debugger
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