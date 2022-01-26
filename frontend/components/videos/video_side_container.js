import { connect } from "react-redux";
import VideoSide from "./video_side";
import { fetchVideos } from "../../actions/video_actions";

const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos).sort((a,b) => {
      return b.views - a.views
    }).slice(0,8)
  }
}

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP,mDTP)(VideoSide)


