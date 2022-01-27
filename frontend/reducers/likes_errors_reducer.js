import { RECEIVE_LIKE_ERRORS, RECEIVE_LIKES } from "../actions/like_actions";

const LikesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENTS:
      return [];
    default:
      return state;
  }
}


export default LikesErrorsReducer;