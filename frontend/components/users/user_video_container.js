import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions";
import UserVideo from "./user_video";

const mSTP = (state,ownProps) => {
  let videos;
  videos = (!state.entities.videos) ? null : Object.values(state.entities.videos).filter((video) => {
    return video.user_id === ownProps.user.id
  })
  return {
    videos: videos,
    user: ownProps.user
  }
}

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP,mDTP)(UserVideo)
