import { connect } from "react-redux";
import { updateComment } from "../../actions/comment_actions";
import EditForm from "./edit_form";

const mSTP = (state,ownProps) => {
  return {
    comment: ownProps.comment,
    user: ownProps.user,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    processForm: (comment) => dispatch(updateComment(comment))
  }
}

export default connect(mSTP,mDTP)(EditForm)