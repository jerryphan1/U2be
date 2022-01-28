import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from "../actions/like_actions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({},state)
  switch (action.type){
    case RECEIVE_LIKES: 
      return Object.assign(nextState,action.likes);
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState
    case REMOVE_LIKE:
      delete nextState[action.likeId];
      return nextState
    default:
      return state;
  }
}

export default LikesReducer;