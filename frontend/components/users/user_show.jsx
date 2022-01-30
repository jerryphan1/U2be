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
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      home: true,
      liked: false,
      disliked: false,
      upload: false,
      about: false 
    }
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.componentDidMount()
    }
  }

  resetState(){
    this.setState({
      home: false,
      liked: false,
      disliked: false,
      upload: false,
      about: false 
    })
  }

  handleClick(field){
    this.resetState();
    this.setState({
      [field]: true
    })
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
                  <div>
                      <p onClick={() => this.handleClick('home')} className={this.state.home ? 'active' : ''}>HOME</p> 
                  </div>  
                  <div>
                    <p onClick={() => this.handleClick('liked')}className={this.state.liked ? 'active' : ''}>LIKED VIDEOS</p>
                  </div>   
                  <div>
                    <p onClick={() => this.handleClick('disliked')} className={this.state.disliked ? 'active' : ''}>DISLIKED VIDEOS</p>
                  </div> 
                  <div>
                    <p onClick={() => this.handleClick('upload')} className={this.state.upload ? 'active' : ''}>UPLOAD A VIDEO</p> 
                  </div> 
                  <div>
                    <p onClick={() => this.handleClick('about')} className={this.state.about ? 'active' : ''}>ABOUT</p>
                  </div>       
                </div>
          </div>
            <div className={this.state.home ? 'home' : 'hide'}><UserVideoContainer user={this.props.user}/></div>
            <div className={this.state.liked ? 'liked' : 'hide'}><UserLikedVideoContainer user={this.props.user}/></div>
            <div className={this.state.disliked ? 'disliked' : 'hide'}><UserDislikedVideoContainer user={this.props.user}/></div>
            <div className={this.state.about ? 'user-show-about-container' : 'hide'}>
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