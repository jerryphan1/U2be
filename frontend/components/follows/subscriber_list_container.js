import { connect } from "react-redux";
import { fetchFollows } from "../../actions/follow_actions";
import {fetchUsers} from '../../actions/user_actions';
import SubscriberList from "./subscriber_list";

const mSTP = (state) => {
  let follows, users;

  // getting all followers of the video owner
  follows = (!state.entities.follows) ? null : Object.values(state.entities.follows);
  users = (!state.entities.users) ? null: Object.values(state.entities.users)

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
    users: users,
    currentUser: state.entities.users[state.session.id]
  }
}


const mDTP = (dispatch) => {
  return {
    fetchFollows: () => dispatch(fetchFollows()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mSTP,mDTP)(SubscriberList)