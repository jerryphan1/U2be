import React from "react";

export default class FormatSideViews extends React.Component{
  constructor(props){
    super(props)
  }

  formatHundreds(views){
    // 12345
    let stringViews = views.toString();
    let begin = stringViews.slice(0,stringViews.length-3)
    let end = stringViews.slice(begin.length, begin.length+1)
    return begin + '.' + end + 'K'
  }

  formatThousands(views){
    let stringViews = views.toString();
    let begin = stringViews.slice(0,stringViews.length-6)
    let end = stringViews.slice(begin.length, begin.length+1)
    return begin + '.' + end + 'M'
  }

  formatMillions(views){
    let stringViews = views.toString();
    let begin = stringViews.slice(0,stringViews.length-9)
    let end = stringViews.slice(begin.length, begin.length+1)
    return begin + '.' + end + 'B'
  }

  formatViews(views){
    if (views < 1000) {
      return views;
    } else if (views < 1000000){
      return this.formatHundreds(views)
    } else if (views < 1000000000){
      return this.formatThousands(views)
    } else {
      return this.formatMillions(views)
    }
  }

  render(){
    if (!this.props.video) return null
    let formatted = this.formatViews(this.props.video.views)
    return(
      <p className="video-side-views">{formatted} views</p>
    )
  }
}