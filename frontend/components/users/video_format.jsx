import moment from 'moment-timezone';
import React from "react";
import { Link } from "react-router-dom";

const VideoFormat = (props) => {
  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  let date = moment.parseZone(props.video.created_at).local().format('YYYYMMDD HH:mm:ss');
  let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();
  return(
    <div className='user-video-container'>
        <Link className="user-video-thumbnail" to={`/videos/${props.video.id}`}>
          <video className='user-video-actual-video'src={props.video.uploaded_video}  
            poster={props.video.thumbnail} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}/>
        </Link>

        <div className="user-video-info-container">
            <Link to={`/videos/${props.video.id}`} className="user-video-title">
                <h2>{props.video.title}</h2>
            </Link>
            <Link to={`/users/${props.video.user.id}`} className="user-video-user">
              <h2>{user}</h2>
            </Link>

            <div className="user-video-viewdates">
              <p className="user-video-views">{props.video.views} views</p>
              <p className='user-video-date'>{newDate}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoFormat