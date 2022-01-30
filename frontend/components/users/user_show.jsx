import React from "react";
import { Link } from "react-router-dom";
import LeftNavbar from "../left_navbar";
import TopNavbar from "../top_navbar";
import LeftIcons from "../left_icons";
import UserVideoContainer from "./user_video_container";
import UserLikedVideoContainer from "./user_liked_video_container";
import UserDislikedVideoContainer from "./user_disliked_video_container";


export default class UserShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      home: true,
      videos: false,
      liked: false,
      disliked: false,
      about: false 
    }
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.componentDidMount()
    }
  }

  render(){
    if (!this.props.user) return null;
    let initial = this.props.user.username[0].toUpperCase();
    return(

      <div>
        <TopNavbar/>
        <LeftNavbar/>
        <LeftIcons/>
        <div id='user-show-main-container'>
          <div id='user-show-info-container'>
                <div id='user-show-info'>
                  <div className="user-show-initials"><p>{initial}</p></div>
                  <h2 className="user-show-username">{this.props.user.username}</h2>
                </div>
                <div id='user-show-tabs'>

                  <p>HOME</p>                {/* user uploaded vids */}
                  <p>LIKED VIDEOS</p>    {/* user liked vids */}
                  <p>DISLIKED VIDEOS</p> {/* user disliked vids */}
                  <p>UPLOAD A VIDEO</p> 
                  <p>ABOUT</p>
                </div>
          </div>
            {/* <div className="just-placeholder"><UserVideoContainer user={this.props.user}/></div> */}
            {/* <div className="just-placeholder"><UserLikedVideoContainer user={this.props.user}/></div> */}
            {/* <div className="just-placeholder"><UserDislikedVideoContainer user={this.props.user}/></div> */}
            <div className="just-placeholder user-show-about-container">
              <div className="user-show-right-column">

                <p className="user-show-stats">Stats</p>
                <p className="user-show-created">Joined {this.props.user.createdAt}</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}