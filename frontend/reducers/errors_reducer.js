import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import CommentsErrorsReducer from "./comments_errors_reducer";
import LikesErrorsReducer from "./likes_errors_reducer";
import DislikesErrorsReducers from './dislikes_errors_reducers'
import UsersErrorsReducer from "./users_errors_reducer";
import VideoErrorsReducer from "./video_errors_reducer";

const ErrorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer,
    userErrors: UsersErrorsReducer,
    commentErrors: CommentsErrorsReducer,
    likeErrors: LikesErrorsReducer,
    dislikeErrors: DislikesErrorsReducers,
    videoErrors: VideoErrorsReducer
});

export default ErrorsReducer;