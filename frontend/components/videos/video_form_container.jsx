import { connect } from "react-redux";
import { createVideo } from "../../actions/video_actions";
import { closeModal, openModal } from '../../actions/modal_actions';
import VideoForm from "./video_form";


const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}


const mDTP = (dispatch) => {
  return {
    processForm: (video) => dispatch(createVideo(video)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mSTP,mDTP)(VideoForm)