import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions";

import CommentIndex from "./comment_index";


// video show page video={this.props.video}, use in ownProps
const mSTP = (state,ownProps) => {
  return {
    comments: Object.values(state.entities.comments).filter((comment) => {
      return comment.video_id === ownProps.video.id
    }),
    currentUser: state.entities.users[state.session.id],
    video: ownProps.video,
    errors: state.errors.commentErrors
  }
} 

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    processForm: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(mSTP,mDTP)(CommentIndex)