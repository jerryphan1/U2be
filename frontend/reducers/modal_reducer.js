
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (action.commentId) {
        return [action.modal, action.commentId];
      } else {
        return action.modal
      }
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}