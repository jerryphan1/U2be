import UsersReducer from "./users_reducer";
import VideosReducer from "./videos_reducer";
import { combineReducers } from "redux";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    videos: VideosReducer,
});

export default EntitiesReducer;