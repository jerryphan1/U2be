import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import CommentsErrorsReducer from "./comments_errors_reducer";
import LikesErrorsReducer from "./likes_errors_reducer";

const ErrorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer,
    commentErrors: CommentsErrorsReducer,
    likeErrors: LikesErrorsReducer,
});

export default ErrorsReducer;