import moment from 'moment-timezone';
import React from "react";
import { Link } from "react-router-dom";
import FormatSideViews from './format_side_views'

const VideoSideItem = (props) => {
  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  // let newDate = moment(props.video.createdAtIndex,"YYYYMMDD").fromNow();
  // let date = moment.tz(props.video.created_at, 'America/Los_Angeles').format('YYYYMMDD HH:mm:ss');
  // let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();

  let date = moment.parseZone(props.video.created_at).local().format('YYYYMMDD HH:mm:ss');
  let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();

  return(
    <div className='video-side-container'>
        <Link className="video-side-thumbnail" to={`/videos/${props.video.id}`}>
          <video className='side-actual-video'src={props.video.uploaded_video}  
            poster={props.video.thumbnail} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}
            onClick={() => props.loadTop()}/>
        </Link>

        <div className="video-side-info-container">
            <Link to={`/videos/${props.video.id}`} className="video-side-title">
                <h2>{props.video.title}</h2>
            </Link>
            <Link to={`/users/${props.video.user.id}`} className="video-side-user-h2">
              <h2>{user}</h2>
            </Link>

            <div className="video-side-viewdates">
              {/* <p className="video-side-views">{props.video.views} views</p> */}
              <FormatSideViews video={props.video}/>
              <p className='video-side-date'>{newDate}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoSideItem;