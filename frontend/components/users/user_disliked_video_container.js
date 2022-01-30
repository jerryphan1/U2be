import { connect } from "react-redux";
import {fetchDislikes} from "../../actions/dislike_actions";
import { fetchVideos } from "../../actions/video_actions";
import UserDislikedVideo from "./user_disliked_video";

const mSTP = (state,ownProps) => {
  let dislikedVids = [];
  let dislikes, videos;
  dislikes = (!state.entities.dislikes) ? null : Object.values(state.entities.dislikes).filter((dislike) => {
    return dislike.user_id === ownProps.user.id
  })

  videos = Object.values(state.entities.videos)
  dislikes.forEach((dislike) => {
    for (let i = 0; i < videos.length; i++) {
      if (dislike.video_id === videos[i].id) dislikedVids.push(videos[i])
    }
  })
  return {
    dislikedVids: dislikedVids,
    // videos: Object.values(state.entities.videos),
    user: ownProps.user
  }
}

const mDTP = (dispatch) => {
  return {
    fetchDislikes: () => dispatch(fetchDislikes()),
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP,mDTP)(UserDislikedVideo)
