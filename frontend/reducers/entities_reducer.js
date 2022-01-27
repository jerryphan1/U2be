import UsersReducer from "./users_reducer";
import VideosReducer from "./videos_reducer";
import CommentsReducer from "./comments_reducer";
import LikesReducer from "./likes_reducer";
import { combineReducers } from "redux";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    videos: VideosReducer,
    comments: CommentsReducer,
    likes: LikesReducer,
});

export default EntitiesReducer;