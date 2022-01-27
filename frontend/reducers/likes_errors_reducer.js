import { RECEIVE_LIKE_ERRORS, RECEIVE_LIKES } from "../actions/like_actions";

const LikesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE_ERRORS:
      return action.errors;
    case RECEIVE_LIKES:
      return [];
    default:
      return state;
  }
}


export default LikesErrorsReducer;