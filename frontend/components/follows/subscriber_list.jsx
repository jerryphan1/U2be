import React from "react";
import { Link } from "react-router-dom";

export default class SubscriberList extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchFollows();
    this.props.fetchUsers();
  }

  handleSubs(){
    const panel = document.querySelector('.left-nav-panel')
    const links = document.querySelectorAll('.left-nav-links')
    panel.classList.toggle('open-subs')
    links.forEach((link) => link.classList.toggle('open-subs'))
  }

  render(){
    if (!this.props.fetchFollows) return null
    if (!this.props.fetchUsers) return null
    let userFollows = [];
    let userFollowsUsername = [];
    if (this.props.currentUser) {
      this.props.follows.forEach((follow) => {
        if (follow.user_id === this.props.currentUser.id) userFollows.push(follow)
      })
      for (let i = 0; i < userFollows.length; i++){
        for (let j = 0; j < this.props.users.length; j++){
          if (this.props.users[j].id === userFollows[i].user_following_id) {
            userFollowsUsername.push(this.props.users[j])
          }
        }
      }

    }

    // return (<div className="left-nav-panel"><p className="left-nav-links">Must login to view subscribers</p></div>)
    if (this.props.currentUser) {
      return(
          <>
            <button className="left-nav-text left-nav-subs" onClick={this.handleSubs}>
                <i className="fas fa-plus left-nav-icon"></i>
                <p className='random-sub'>Subscriptions</p>                   
            </button>
            <div className='left-nav-panel'>
              {
                userFollowsUsername.map((user) => 
                {
                  return <Link to={`/users/${user.id}`} key={user.id} className="left-nav-links">{user.username}</Link>
                })
              }
            </div>
          </>
        ) 
    } else {
      return (
        null
      )
    }
    
  }

}