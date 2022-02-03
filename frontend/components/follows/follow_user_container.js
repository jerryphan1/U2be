import { connect } from "react-redux";
import { fetchFollows, createFollow, deleteFollow } from "../../actions/follow_actions";
import FollowUser from "./follow_user";
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state,ownProps) => {
  let follows, filteredFollow;

  // getting all followers of the user on respective show page
  follows = (!state.entities.follows) ? null : Object.values(state.entities.follows).filter((follow) => {
    return follow.user_following_id === ownProps.user.id 
  })

  // checking to see if there is a current user, if there is then check to see if following the video owner
  // if (state.entities.users[state.session.id]){
  //   for (let i = 0; i < follows.length; i++){
  //     if (follows[i].user_id === state.entities.users[state.session.id].id) {
  //       filteredFollow = follows[i]
  //     }
  //   }
  // } else {
  //   filteredFollow = false 
  // }

  return {
    follows: follows,
    user: ownProps.user,
    currentUser: state.entities.users[state.session.id]
  }
}


const mDTP = (dispatch) => {
  return {
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal,id) => dispatch(openModal(modal,id))
  }
}

export default connect(mSTP,mDTP)(FollowUser)