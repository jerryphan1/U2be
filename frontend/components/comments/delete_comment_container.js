import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import DeleteComment from "./delete_comment";


// video show page video={this.props.video}, use in ownProps
const mSTP = (state,ownProps) => {
  return {
    // comments: Object.values(state.entities.comments).filter((comment) => {
    //   return comment.video_id === ownProps.video.id
    // }).sort((a,b) => {
    //   return b.createdAtIndex - a.createdAtIndex
    // }),
    currentUser: state.entities.users[state.session.id],
    // video: ownProps.video,
    // errors: state.errors.commentErrors
  }
} 

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    // processForm: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mSTP,mDTP)(DeleteComment)