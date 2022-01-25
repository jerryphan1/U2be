import React from "react";
import { Link } from "react-router-dom";

const VideoIndexItem = (props) => {
  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  return(
    <div className="video-index-container">
      <Link className="video-index-thumbnail" to={`/videos/${props.video.id}`}>
        <img src={props.video.thumbnail} alt={`thumbnail for ${props.video.title}`} />
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
              {/* <span>.</span> */}
              <p>{props.video.createdAt}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default VideoIndexItem