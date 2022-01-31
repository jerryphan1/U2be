import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import UserShow from "./user_show";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state,ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: (modal,dumbId) => dispatch(openModal(modal,dumbId))
  }
}

export default connect(mSTP,mDTP)(UserShow)