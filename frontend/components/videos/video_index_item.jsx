import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';


// onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

const VideoIndexItem = (props) => {
  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  let newDate = moment(props.video.createdAtIndex,"YYYYMMDD").fromNow();
  return(
    <div className="video-index-container">
      <Link className="video-index-thumbnail" to={`/videos/${props.video.id}`}>
        <video className='index-actual-video'src={props.video.uploaded_video}  
        poster={props.video.thumbnail} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}/>
      </Link>
      {/* <video className='video-test'src={props.video.uploaded_video} controls></video> */}
      <div className="video-index-info-container">
        {/* <Link to={`/users/${props.video.user.id}`}><p>Image of user</p></Link> */}
        <Link to='/' className='video-index-image'><p>J</p></Link>
        <div className="video-index-info">
            <Link to={`/videos/${props.video.id}`} className="video-index-title">
              <h2>{props.video.title}</h2>
            </Link>
            <Link to={`/users/${props.video.user.id}`} className="video-index-user">
              <h2>{user}</h2>
            </Link>
            <div className="video-index-viewdates">
              <p className="video-index-views">{props.video.views} views</p>
              <p>{newDate}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default VideoIndexItem