import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({},state)
  switch (action.type){
    case RECEIVE_FOLLOWS: 
      return Object.assign(nextState,action.follows);
    case RECEIVE_FOLLOW:
      nextState[action.follow.id] = action.follow;
      return nextState
    case REMOVE_FOLLOW:
      delete nextState[action.followId];
      return nextState
    default:
      return state;
  }
}

export default FollowsReducer;