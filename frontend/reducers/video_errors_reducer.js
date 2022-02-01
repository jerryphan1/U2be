import { RECEIVE_VIDEO_ERRORS, RECEIVE_VIDEO } from "../actions/video_actions";


const VideoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case RECEIVE_VIDEO:
            return [];
        default:
            return oldState;
    }
}

export default VideoErrorsReducer