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
    this.props.fetchLikes();
    this.props.fetchDislikes();
    if (!this.props.currentUser) return null;
    this.setState({user_id: this.props.currentUser.id, 
                  video_id: this.props.video.id,
                  })
  }

  handleLike(){
    // no user = no like
    if (!this.props.currentUser) return;
    this.checkLikeStatus()
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
    }
  }

  checkPreviousLike(){
    // no likes exist yet 
    if (!this.props.likes) return false   
    for (let i = 0; i < this.props.likes.length; i++){
      if ( this.props.likes[i].user_id === this.props.currentUser.id) {
        return this.props.likes[i]
      }
    }
    return false 
  }

  checkPreviousDislike(){
    // no dislikes exist yet 
    if (!this.props.dislikes) return false 
    for (let i = 0; i < this.props.dislikes.length; i++){
      if ( this.props.dislikes[i].user_id === this.props.currentUser.id) {
        return this.props.dislikes[i]
      }
    }
    return false 
  }


  render(){
    let likeCount, dislikeCount;
    likeCount = (this.props.likes) ? this.props.likes.length : ''
    dislikeCount = (this.props.dislikes) ? this.props.dislikes.length : ''

    return(
      <div id='video-show-likes-dislikes'>
        <p className="video-like-p" onClick={() => this.handleLike()}><i className="fas fa-thumbs-up"></i>{likeCount}</p>
        <p className="video-dislike-p" onClick={() => this.handleDislike()}><i className="fas fa-thumbs-down"></i>{dislikeCount}</p>
    </div>
    )
  }
}