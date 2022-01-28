import { RECEIVE_DISLIKE, RECEIVE_DISLIKES, REMOVE_DISLIKE } from "../actions/dislike_actions";

const DislikesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({},state)
  switch (action.type){
    case RECEIVE_DISLIKES: 
      return Object.assign(nextState,action.dislikes);
    case RECEIVE_DISLIKE:
      nextState[action.dislike.id] = action.dislike;
      return nextState
    case REMOVE_DISLIKE:
      delete nextState[action.dislikeId];
      return nextState
    default:
      return state;
  }
}

export default DislikesReducer;