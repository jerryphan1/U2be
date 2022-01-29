import React from "react";

export default class LikesDislikes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      video_id: '',
    }
  }

  componentDidMount(){
    // only signed in users can like or dislike
    if (this.props.currentUser) {
      this.setState({user_id: this.props.currentUser.id, 
        video_id: this.props.video.id,
        })
    }
    this.props.fetchLikes();
    this.props.fetchDislikes();
  }

  componentDidUpdate(prevProps){
    // if (!this.props.currentUser) return null;
    if (this.props.video.id !== prevProps.video.id) {
      this.componentDidMount()
    }
    this.changeColor()
  }


  handleLike(){
    // no user = no like
    if (!this.props.currentUser) return;
    this.checkLikeStatus();
  }

  handleDislike(){
    if (!this.props.currentUser) return;
    this.checkDislikeStatus()
  }

  // trying to like something, if previous like = delete, no like = create 
  // BUT need to check if dislike video already too.... 
  checkLikeStatus(){
    if (!this.props.currentUser) return;
    let dislikeStatus, likeStatus;
    dislikeStatus = this.checkPreviousDislike();
    likeStatus = this.checkPreviousLike();
    //delete the previous dislike if there was one
    if (dislikeStatus){
      this.props.deleteDislike(dislikeStatus.id)
    }

    //check if theres a like
    if (likeStatus) {
      this.props.deleteLike(likeStatus.id)
    } else {
      const like = Object.assign({}, this.state);
      this.props.createLike(like)
        .then(this.likeBackgroundColor())
    }
  }

  checkDislikeStatus(){
    if (!this.props.currentUser) return;
    let dislikeStatus, likeStatus;
    dislikeStatus = this.checkPreviousDislike();
    likeStatus = this.checkPreviousLike();
    //delete the previous like if there was one
    if (likeStatus){
      this.props.deleteLike(likeStatus.id)
    }

    //check if theres a dislike
    if (dislikeStatus) {
      this.props.deleteDislike(dislikeStatus.id)
    } else {
      const dislike = Object.assign({}, this.state);
      this.props.createDislike(dislike)
      .then(console.log(this.props.dislikes))
      this.dislikeBackgroundColor()
    }
  }

  checkPreviousLike(){
    // no likes exist yet 
    if (!this.props.likes || this.props.likes.length === 0) return false   
    for (let i = 0; i < this.props.likes.length; i++){
      if ( this.props.likes[i].user_id === this.props.currentUser.id) {
        return this.props.likes[i]
      }
    }
    return false 
  }

  checkPreviousDislike(){
    // no dislikes exist yet 
    if (!this.props.dislikes || this.props.dislikes.length === 0) return false 
    for (let i = 0; i < this.props.dislikes.length; i++){
      if ( this.props.dislikes[i].user_id === this.props.currentUser.id) {
        return this.props.dislikes[i]
      }
    }
    return false 
  }

  changeColor(){
    if (!this.props.currentUser) return 
    this.resetBackgroundColor();
    this.likeBackgroundColor();
    this.dislikeBackgroundColor();
  }


  resetBackgroundColor(){
    let resetLike = document.querySelector('.fa-thumbs-up');
    let resetDislike = document.querySelector('.fa-thumbs-down');
    resetLike.classList.remove('active-color');
    resetDislike.classList.remove('active-color');
  }

  addLikeBackgroundColor(){
    let color = document.querySelector('.fa-thumbs-up')
    color.classList.add('active-color')
  }

  addDislikeBackgroundColor(){
    let color = document.querySelector('.fa-thumbs-down');
    color.classList.add('active-color');
  }

  likeBackgroundColor(){
    // this.resetBackgroundColor();
    for (let i = 0; i < this.props.likes.length; i++){
      if ( this.props.likes[i].user_id === this.props.currentUser.id) {
        this.addLikeBackgroundColor();
      }
    }
  }

  dislikeBackgroundColor(){
    // this.resetBackgroundColor()
    console.log(this.props.dislikes)
    console.log(this.props.currentUser)
    for (let i = 0; i < this.props.dislikes.length; i++){
      if ( this.props.dislikes[i].user_id === this.props.currentUser.id) {
        console.log('inside')
        this.addDislikeBackgroundColor();
      }
    }
  }


  render(){
    let likeCount, dislikeCount;
    console.log('hello')
    console.log(this.props.likes)
    likeCount = (this.props.likes && this.props.likes.length > 0) ? this.props.likes.length : ' '
    dislikeCount = (this.props.dislikes && this.props.dislikes.length > 0) ? this.props.dislikes.length : ' '

    return(
      <div id='video-show-likes-dislikes'>
        <p className="video-like-p" onClick={() => this.handleLike()}><i className="fas fa-thumbs-up"></i>{likeCount}</p>
        <p className="video-dislike-p" onClick={() => this.handleDislike()}><i className="fas fa-thumbs-down"></i>{dislikeCount}</p>
      </div>
    )
  }
}