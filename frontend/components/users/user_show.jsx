import React from "react";
import { Link } from "react-router-dom";
import LeftNavbar from "../left_navbar";
import TopNavbar from "../top_navbar";
import LeftIcons from "../left_icons";

export default class UserShow extends React.Component{
  constructor(props){
    super(props)
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

      <div id='user-show-main-container'>
        <TopNavbar/>
        <LeftNavbar/>
        <LeftIcons/>
        <div id='user-show-info-container'>
            <div id='user-show-info'>
              <div className="user-show-initials"><p>{initial}</p></div>
              <h2 className="user-show-username">{this.props.user.username}</h2>
            </div>
            <div id='user-show-tabs'>
              <p>HOME</p>
              <p>LIKED VIDEOS</p>
              <p>DISLIKED VIDEOS</p>
              <p>ABOUT</p>
            </div>
        </div>

        
      </div>
    )
  }
}