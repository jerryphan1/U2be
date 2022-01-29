import React from "react";
import { Link } from "react-router-dom";
import LeftNavbar from "../left_navbar";
import TopNavbar from "../top_navbar";
import LeftIcons from "../left_icons";
import UserVideoContainer from "./user_video_container";

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
                  <p>HOME</p>
                  <p>VIDEOS</p>     {/* user uploaded vids */}
                  <p>LIKED VIDEOS</p>    {/* user liked vids */}
                  <p>DISLIKED VIDEOS</p> {/* user disliked vids */}
                  <p>ABOUT</p>
                </div>
          </div>
          <div id='user-show-video-container'>
            <div className="user-video-container"><UserVideoContainer user={this.props.user}/></div>
          </div>
        </div>
      </div>
    )
  }
}