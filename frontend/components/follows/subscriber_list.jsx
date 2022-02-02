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

  render(){
    if (!this.props.fetchFollows) return null
    if (!this.props.fetchUsers) return null
    let userFollows = [];
    let userFollowsUsername = [];
    if (this.props.currentUser) {
      this.props.follows.forEach((follow) => {
        if (follow.user_id === this.props.currentUser.id) userFollows.push(follow)
      })
      console.log(userFollows)
      for (let i = 0; i < userFollows.length; i++){
        for (let j = 0; j < this.props.users.length; j++){
          if (this.props.users[j].id === userFollows[i].user_following_id) {
            userFollowsUsername.push(this.props.users[j])
          }
        }
      }
      console.log(userFollowsUsername)

    }

    if (!this.props.currentUser) {
      return (<div className="left-nav-panel"><p>Must login to view subscribers</p></div>)
    } else {
      return(
        <div className='left-nav-panel'>
          {
            userFollowsUsername.map((user) => 
            {
              return <Link to={`/users/${user.id}`} key={user.id} className="left-nav-links">{user.username}</Link>
            })
          }
        </div>
      )
    }
  }

}