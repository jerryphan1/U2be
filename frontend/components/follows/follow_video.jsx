import React from "react";
import { Link } from "react-router-dom";

export default class FollowVideo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      user_following_id: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    // only signed in users can subscribe
    if (this.props.currentUser) {
      this.setState({user_id: this.props.currentUser.id, 
        user_following_id: this.props.video.user_id,
        })
    }
    this.props.fetchFollows();
  }

  componentDidUpdate(prevProps){
    // if (!this.props.currentUser) return null;
    if (this.props.video.id !== prevProps.video.id) {
      this.componentDidMount()
    }
    this.changeColor();
    this.changeStatus();
    this.changeVisibility();
  }


  handleClick(e){
    if (!this.props.currentUser) return
    e.preventDefault();
    let subStatus = this.checkPreviousSubscribe();
    if (subStatus){
      // this.props.deleteFollow(subStatus.id)
      this.props.openModal('deleteSub',subStatus.id)
        // .then(this.changeColor())
    } else {
      const follows = Object.assign({}, this.state);
      this.props.createFollow(follows)
        // .then(this.changeColor())
    }
    this.changeColor()
  }

  checkPreviousSubscribe(){
    if (!this.props.follows || this.props.follows.length === 0) return false
    for (let i = 0; i < this.props.follows.length; i++){
      if ( this.props.follows[i].user_id === this.props.currentUser.id) {
        return this.props.follows[i]
      }
    }
    return false 
  }

  changeColor(){
    if (!this.props.currentUser) return 
    this.resetColor();
    this.setNewColor();
  }

  resetColor(){
    let color = document.querySelector('.subscribe');
    color.classList.remove('gray');
    color.classList.remove('hide-subscribe');
  }

  setNewColor(){
    let color = document.querySelector('.subscribe');
    for (let i = 0; i < this.props.follows.length; i++){
      if ( this.props.follows[i].user_id === this.props.currentUser.id) {
        color.classList.add('gray')
      }
    }
  }

  changeVisibility(){
    if (!this.props.currentUser || !this.props.follows) return;
    if (this.props.currentUser.id === this.props.video.user_id) {
      let color = document.querySelector('.subscribe');
      color.classList.add('hide-subscribe')
    }
  }

  changeStatus(){
    if (!this.props.currentUser || !this.props.follows) return false;
    for (let i = 0; i < this.props.follows.length; i++){
      if ( this.props.follows[i].user_id === this.props.currentUser.id) {
        return true
      }
    }
    return false 
  }

  render(){
    if (!this.props.follows) return null
    let disabled, status;
    disabled = (this.props.currentUser) ? false : true
    status = (this.changeStatus()) ? 'SUBSCRIBED' : 'SUBSCRIBE'
    // visible = (this.props.currentUser.id === this.props.video.user_id) ? 'hidden;' : 'hidden;'
    // background = (this.props.currentUser) ? 'subscribe red' : 'subscribe gray'
    if (!this.props.currentUser) {
      return (
        <div id='video-show-button-container' >
          <Link to='/login' className="link-subscribe-video">
            <p className='subscribe' disabled={disabled} onClick={this.handleClick}>{status}</p>
          </Link>
        </div>
      )
    } else {
        return(
          <div id='video-show-button-container' >
                <button className='subscribe' disabled={disabled} onClick={this.handleClick}>{status}</button>
          </div>
        )
    }
  }
}