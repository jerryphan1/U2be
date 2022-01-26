import moment from 'moment';
import React from "react";
import { Link } from "react-router-dom";

const VideoSideItem = (props) => {
  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  let newDate = moment(props.video.createdAtIndex,"YYYYMMDD").fromNow();

  return(
    <div className='video-side-container'>
        <Link className="video-side-thumbnail" to={`/videos/${props.video.id}`}>
          <video className='side-actual-video'src={props.video.uploaded_video}  
            poster={props.video.thumbnail} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}/>
        </Link>

        <div className="video-side-info-container">
            <Link to={`/videos/${props.video.id}`} className="video-side-title">
                <h2>{props.video.title}</h2>
            </Link>
            <Link to={`/users/${props.video.user.id}`} className="video-side-user">
              <h2>{user}</h2>
            </Link>

            <div className="video-side-viewdates">
              <p className="video-side-views">{props.video.views} views</p>
              <p className='video-side-date'>{newDate}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoSideItem;