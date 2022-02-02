import { connect } from "react-redux";
import { deleteFollow } from "../../actions/follow_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import DeleteSub from './delete_sub';


// video show page video={this.props.video}, use in ownProps
const mSTP = (state,ownProps) => {
  return {
    // comments: Object.values(state.entities.comments).filter((comment) => {
    //   return comment.video_id === ownProps.video.id
    // }).sort((a,b) => {
    //   return b.createdAtIndex - a.createdAtIndex
    // }),
    currentUser: state.entities.users[state.session.id],
    subId: ownProps.subId
    // video: ownProps.video,
    // errors: state.errors.commentErrors
  }
} 

const mDTP = (dispatch) => {
  return {
    deleteFollow: (subId) => dispatch(deleteFollow(subId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal,id) => dispatch(openModal(modal,id))
  }
}

export default connect(mSTP,mDTP)(DeleteSub)