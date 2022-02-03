import React from "react";
import { Link } from "react-router-dom";
import LeftNavbar from "../left_navbar";
import TopNavbar from "../top_navbar";
import VideoSideContainer from "./video_side_container";
import CommentIndexContainer from '../comments/comment_index_container';
import LikesDislikesContainer from "../likes_dislikes/likes_dislikes_container"
import FollowVideoContainer from "../follows/follow_video_container";
import VideoViewsContainer from "./video_views_container";

export default class VideoShow extends React.Component {
  constructor(props){
    super(props)
  }



  componentDidMount(){
    // let url = window.location.href.split('/');
    // let video = url[url.length-1]
    // this,props.fetchVideo(video)
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.componentDidMount()
    }
  }

  // this.props.video?.uploaded_video  "" checks for value if not itll return empty, 
  // good to run with the id because refreshes can take time
  // autoPlay
  render(){
    if (!this.props.video) return null;
    let initial = this.props.video.user.username[0].toUpperCase();
    let internationalNumberFormat = new Intl.NumberFormat('en-US')
    return (
      <div id='show-div'>
        <TopNavbar/>
        <LeftNavbar/>
        
            <video id='video-show-video' src={this.props.video?.uploaded_video || ""}  controls autoPlay muted/>
          <div id='video-show-container'>
            <div id ='video-show-info'>
                <div id='video-show-top-info-container'>
                    <h1>{this.props.video.title}</h1>
                      <div className="video-show-format-container">
                        <div id='video-show-views-create'>
                            <VideoViewsContainer video={this.props.video}/>
                          {/* <h3 className="video-show-views">{internationalNumberFormat.format(this.props.video.views)} views</h3> */}

                          <h3>{this.props.video.createdAt}</h3>
                        </div>
                        <LikesDislikesContainer video={this.props.video}/>

                      </div>
                </div>
                <div id='video-show-image-username'>
                  <div id='video-show-image-username-container'>
                    <div id='video-show-links-container'>
                      <Link to={`/users/${this.props.video.user.id}`} className='video-show-image'><p>{initial}</p></Link>
                      <Link to={`/users/${this.props.video.user.id}`} className="video-show-username-link">
                        <h2>{(this.props.video?.user.username[0].toUpperCase() + 
                            this.props.video?.user.username.slice(1).toLowerCase())
                            }</h2>
                      </Link>
                    </div>
                    {/* <div id='video-show-button-container'>
                      <button className='subscribe'>SUBSCRIBE</button>
                    </div> */}
                    <FollowVideoContainer video={this.props.video}/>
                  </div>
                      <h3 className="video-show-description">Description</h3>
                </div>

                <CommentIndexContainer video={this.props.video}/>
            </div>

            <div id='video-show-suggested-container'>
              <h1>Most Viewed</h1>
              <VideoSideContainer/>
            </div>
          </div>
      </div>   
    )
  }
}