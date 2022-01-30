import { connect } from "react-redux";
import {fetchLikes} from "../../actions/like_actions";
import { fetchVideos } from "../../actions/video_actions";
import UserLikedVideo from "./user_liked_video";

const mSTP = (state,ownProps) => {
  let likedVids = [];
  let likes, videos;
  likes = (!state.entities.likes) ? null : Object.values(state.entities.likes).filter((like) => {
    return like.user_id === ownProps.user.id
  })

  videos = Object.values(state.entities.videos)
  likes.forEach((like) => {
    for (let i = 0; i < videos.length; i++) {
      if (like.video_id === videos[i].id) likedVids.push(videos[i])
    }
  })
  return {
    likedVids: likedVids,
    // videos: Object.values(state.entities.videos),
    user: ownProps.user
  }
}

const mDTP = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchLikes()),
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP,mDTP)(UserLikedVideo)
