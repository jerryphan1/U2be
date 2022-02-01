import UsersReducer from "./users_reducer";
import VideosReducer from "./videos_reducer";
import CommentsReducer from "./comments_reducer";
import LikesReducer from "./likes_reducer";
import DislikesReducer from './dislikes_reducer';
import FollowsReducer from "./follows_reducer";
import { combineReducers } from "redux";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    videos: VideosReducer,
    comments: CommentsReducer,
    likes: LikesReducer,
    dislikes: DislikesReducer,
    follows: FollowsReducer,
});

export default EntitiesReducer;