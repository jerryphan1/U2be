import { connect } from "react-redux";
import { searchVideos } from "../actions/video_actions";
import Searchbar from "./searchbar";


const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos)
  }
}

const mDTP = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  }
}

export default  connect(mSTP,mDTP)(Searchbar)