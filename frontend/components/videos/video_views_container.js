import { connect } from "react-redux";
import { updateVideo } from "../../actions/video_actions";
import VideoViews from "./video_views";

const mSTP = (state,ownProps) => {
  return {
    video: ownProps.video
  }
}

const mDTP = (dispatch) => {
   return {
     processForm: (video) => dispatch(updateVideo(video))
   }
}

export default connect(mSTP,mDTP)(VideoViews)