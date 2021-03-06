import { connect } from "react-redux";
import { fetchVideos,searchVideos } from "../actions/video_actions";
// import VideosSearch from "./videos_search";

const mSTP = (state,ownProps) => {
  let videos;
  videos = (!state.entities.videos) ? null : Object.values(state.entities.videos).filter((video) => {
      return video.title.toLowerCase().includes(ownProps.match.params.query.toLowerCase())
  })

  return {
    videos: videos,
    errors: state.errors.videoErrors
  }
}

const mDTP = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP,mDTP)(VideosSearch)