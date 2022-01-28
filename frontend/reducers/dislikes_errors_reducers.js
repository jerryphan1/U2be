import { RECEIVE_DISLIKE_ERRORS, RECEIVE_DISLIKES } from "../actions/dislike_actions";

const DislikesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DISLIKE_ERRORS:
      return action.errors;
    case RECEIVE_DISLIKES:
      return [];
    default:
      return state;
  }
}


export default DislikesErrorsReducer;