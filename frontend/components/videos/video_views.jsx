import React from "react";


export default class VideoViews extends React.Component{
  constructor(props){
    super(props)
    this.state = Object.assign({errors: []} , this.props.video)
    this.updateViewCount = this.updateViewCount.bind(this)
  }


  componentDidMount(){
    this.setState(Object.assign({errors: []} , this.props.video),
    () => this.updateViewCount())
    // this.updateViewCount()
  }

  componentDidUpdate(prevProps){
    // if (!this.props.currentUser) return null;
    if (this.props.video.id !== prevProps.video.id) {
      this.componentDidMount()
    }
  }

  updateViewCount(){
    this.setState({
      views: this.state.views + 1
    },() => this.props.processForm(this.state))
    // const video = Object.assign({}, this.state);
    // this.props.processForm(video)
  }

  render(){
    if (!this.props.video) return null
    let internationalNumberFormat = new Intl.NumberFormat('en-US')
    return(
      <h3 className="video-show-views">{internationalNumberFormat.format(this.state.views)} views</h3>
    )
  }
}