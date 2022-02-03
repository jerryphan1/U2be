import React from "react";

export default class FollowUser extends React.Component{
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
        user_following_id: this.props.user.id,
        })
    }
    this.props.fetchFollows();
  }

  componentDidUpdate(prevProps){
    // if (!this.props.currentUser) return null;
    if (this.props.user.id !== prevProps.user.id) {
      this.componentDidMount()
    }
    this.changeColor()
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
    let color = document.querySelector('.user-subscribe');
    color.classList.remove('gray');
    color.classList.remove('user-hide-subscribe');
  }

  setNewColor(){
    let color = document.querySelector('.user-subscribe');
    for (let i = 0; i < this.props.follows.length; i++){
      if ( this.props.follows[i].user_id === this.props.currentUser.id) {
        color.classList.add('gray')
      }
    }
  }

  changeVisibility(){
    if (!this.props.currentUser || !this.props.follows) return;
    if (this.props.currentUser.id === this.props.user.id) {
      let color = document.querySelector('.user-subscribe');
      color.classList.add('user-hide-subscribe')
    }
  }

  render(){
    if (!this.props.follows) return null
    let disabled;
    disabled = (this.props.currentUser) ? false : true
    // visible = (this.props.currentUser.id === this.props.video.user_id) ? 'hidden;' : 'hidden;'
    // background = (this.props.currentUser) ? 'subscribe red' : 'subscribe gray'
    return(
      <div id='user-show-button-container' >
          <button className='user-subscribe'disabled={disabled} onClick={this.handleClick}>SUBSCRIBE</button>
      </div>
    )
  }
}