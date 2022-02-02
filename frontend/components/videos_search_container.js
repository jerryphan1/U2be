import { connect } from "react-redux";
import { fetchVideos,searchVideos } from "../actions/video_actions";
import VideosSearch from "./videos_search";

const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    errors: state.errors.videoErrors
  }
}

const mDTP = (dispatch) => {
  return {
    // searchVideos: (query) => dispatch(searchVideos(query)),
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP,mDTP)(VideosSearch)