import React from "react";
import { Link } from "react-router-dom";
import LeftNavbar from "../left_navbar";
import TopNavbar from "../top_navbar";
import VideoSideContainer from "./video_side_container";
import CommentIndexContainer from '../comments/comment_index_container';
import LoginFormContainer from "../session/login_form_container";

export default class VideoShow extends React.Component {
  constructor(props){
    super(props)
  }



  componentDidMount(){
    // let url = window.location.href.split('/');
    // let video = url[url.length-1]
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.componentDidMount()
    }
  }

  // this.props.video?.uploaded_video  "" checks for value if not itll return empty, 
  // good to run with the id because refreshes can take time
  render(){
    if (!this.props.video) return null;
    return (
      <div id='show-div'>
        <TopNavbar/>
        <LeftNavbar/>
            <video id='video-show-video' src={this.props.video?.uploaded_video || ""} controls/>
          <div id='video-show-container'>
            <div id ='video-show-info'>
                <div id='video-show-top-info-container'>
                    <h1>{this.props.video.title}</h1>
                      <div className="video-show-format-container">
                        <div id='video-show-views-create'>
                          <h3 className="video-show-views">{this.props.video.views} views</h3>
                          <h3>{this.props.video.createdAt}</h3>
                        </div>
                        <div id='video-show-likes-dislikes'>
                          <p> 9 likes</p>
                          <p>6 dislikes</p>
                        </div>
                      </div>
                </div>
                <div id='video-show-image-username'>
                    <Link to='/' className='video-show-image'><p>J</p></Link>
                    <div>
                      <h2>{(this.props.video?.user.username[0].toUpperCase() + 
                          this.props.video?.user.username.slice(1).toLowerCase())
                          }</h2>
                      <h3>Description</h3>
                    </div>
                </div>

                <CommentIndexContainer video={this.props.video}/>
            </div>

            <div id='video-show-suggested-container'>
              <h1>Most Viewed</h1>
              <VideoSideContainer/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, fugit rem. Architecto ex iure modi dignissimos labore incidunt voluptatibus ea iste dolore quaerat. Fuga, mollitia vitae in itaque tempora tenetur.</p>  
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, fugit rem. Architecto ex iure modi dignissimos labore incidunt voluptatibus ea iste dolore quaerat. Fuga, mollitia vitae in itaque tempora tenetur.</p>  
              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, fugit rem. Architecto ex iure modi dignissimos labore incidunt voluptatibus ea iste dolore quaerat. Fuga, mollitia vitae in itaque tempora tenetur.</p>  
            </div>
          </div>
      </div>   
    )
  }
}