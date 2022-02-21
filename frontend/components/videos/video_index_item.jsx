import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import FormatIndexViews from "./format_index_views";


// onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

const VideoIndexItem = (props) => {

  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  // let newDate = moment(props.video.createdAtIndex,"YYYYMMDD").fromNow();
  // let date = moment.tz(props.video.created_at, 'America/Los_Angeles').format('YYYYMMDD HH:mm:ss');
  // let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();
  let initial = props.video.user.username[0].toUpperCase();
  let date = moment.parseZone(props.video.created_at).local().format('YYYYMMDD HH:mm:ss');
  let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();
  return(
    <div className="video-index-container">
      <Link className="video-index-thumbnail" to={`/videos/${props.video.id}`}>
        <video className='index-actual-video'src={props.video.uploaded_video}  
        poster={props.video.thumbnail} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}
        onClick={() => props.loadTop()}/>
      </Link>
      {/* <video className='video-test'src={props.video.uploaded_video} controls></video> */}
      <div className="video-index-info-container">
        {/* <Link to={`/users/${props.video.user.id}`}><p>Image of user</p></Link> */}
        <div className="video-index-image-container">
          <Link to={`/users/${props.video.user.id}`} className='video-index-image'><p>{initial}</p></Link>
        </div>
        <div className="video-index-info">
            <Link to={`/videos/${props.video.id}`} className="video-index-title" >
              <h2>{props.video.title}</h2>
            </Link>
            <Link to={`/users/${props.video.user.id}`}  onClick={() => props.loadTop()} className="video-index-user">
              <h2>{user}</h2>
            </Link>
            <div className="video-index-viewdates">
              {/* <p className="video-index-views">{props.video.views} views</p> */}
              <FormatIndexViews video={props.video}/>
              <p>{newDate}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default VideoIndexItem