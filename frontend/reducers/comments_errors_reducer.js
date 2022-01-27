import { RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENTS } from "../actions/comment_actions";

const CommentsErrorsReducer = (state = [], action) => {
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


export default CommentsErrorsReducer;