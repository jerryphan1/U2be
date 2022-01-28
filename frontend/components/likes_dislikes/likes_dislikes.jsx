import React from "react";


export default class LikesDislikes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      video_id: ''
    }
  }

  componentDidMount(){
    // only signed in users can like or dislike
    if (!this.props.currentUser) return null;
    this.setState({user_id: this.props.currentUser.id, 
                  video_id: this.props.video.id,
                  })
  }


  

  render(){
    let likeCount, dislikeCount;
    likeCount = (this.props.likes) ? this.props.likes.length : ''
    dislikeCount = (this.props.dislikes) ? this.props.dislikes.length : ''

    return(
      <div id='video-show-likes-dislikes'>
        <p className="video-like-p"><i className="fas fa-thumbs-up"></i>{likeCount}</p>
        <p className="video-dislike-p"><i className="fas fa-thumbs-down"></i>{dislikeCount}</p>
    </div>
    )
  }
}