import React from "react";
import { Link } from "react-router-dom";


const LoggedInGreeting = (props) => {
  let initial = (props.user) ? props.user.username[0].toUpperCase() : '?'
  return(
    <div id ='logged-in-container'>
    {/* <h1>Welcome {this.props.currentUser.username}</h1> */}
    <h2 className='video-greeting-button'><p>{initial}</p></h2>
    <div className='logged-in-dropdown'>
      <Link to={`/users/${props.user.id}`} className='logged-links'>Your Channel</Link>
      <Link to={`/videos/new`} className='logged-links'>Upload Video</Link>
      <button className='logged-logout' onClick={() => props.logout()}>Logout</button>
    </div>
  </div>
  )
}

export default LoggedInGreeting