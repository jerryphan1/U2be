import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import FormatIndexViews from "./videos/format_index_views";



const VideosSearchItem = (props) => {
  let user = props.video.user.username[0].toUpperCase() + props.video.user.username.slice(1).toLowerCase();
  let initial = props.video.user.username[0].toUpperCase();
  let date = moment.parseZone(props.video.created_at).local().format('YYYYMMDD HH:mm:ss');
  let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();
  return(
    <div className="video-search-container">
      <div className="video-search-video-container">
        <Link className="video-search-thumbnail" to={`/videos/${props.video.id}`}>
          <video className='search-actual-video'src={props.video.uploaded_video}  
          poster={props.video.thumbnail} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}
          onClick={() => props.loadTop()}/>
        </Link>
      </div>
      <div className="video-search-info-container">
        {/* <div className="video-search-image-container"> */}
            <Link to={`/videos/${props.video.id}`} className="video-search-title" >
              <h2>{props.video.title}</h2>
            </Link>

          <div className="video-search-viewdates">
            <FormatIndexViews video={props.video}/>
            <p>{newDate}</p>
          </div>
        {/* </div> */}
        <div className="video-search-info">
            <Link to={`/users/${props.video.user.id}`} className='video-search-image'><p>{initial}</p></Link>
            <Link to={`/users/${props.video.user.id}`}  onClick={() => props.loadTop()} className="video-search-user">
              <h2>{user}</h2>
            </Link>
        </div>
        <h2 className="video-search-description">{props.video.description}</h2>
      </div>

    </div>
  )
}

export default VideosSearchItem