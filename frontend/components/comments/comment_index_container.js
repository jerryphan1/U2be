import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

import CommentIndex from "./comment_index";


// video show page video={this.props.video}, use in ownProps
  // let comments; 
  // comments = !(ownProps.video.comments) ? null : Object.values(ownProps.video.comments).sort((a,b) => {
  //   return b.createdAtIndex - a.createdAtIndex
  // })

const mSTP = (state,ownProps) => {
  let comments;
  comments = (!state.entities.comments) ? null : Object.values(state.entities.comments).filter((comment) => {
    return comment.video_id === ownProps.video.id
  }).sort((a,b) => {
    return b.createdAtIndex - a.createdAtIndex
  })
  return {
    comments: comments,
    currentUser: state.entities.users[state.session.id],
    video: ownProps.video,
    errors: state.errors.commentErrors
  }
} 

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    processForm: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal,id) => dispatch(openModal(modal,id))
  }
}

export default connect(mSTP,mDTP)(CommentIndex)