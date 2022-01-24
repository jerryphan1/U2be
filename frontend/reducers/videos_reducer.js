import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from "../actions/video_actions";

const VideosReducer = (state = {} , action) => {
  Object.freeze(state)
  const nextState = Object.assign({},state)
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign(nextState,action.videos);
    case RECEIVE_VIDEO:
      nextState[action.video.id] = action.video;
      return nextState;
    case REMOVE_VIDEO:
      delete nextState[action.videoId];
      return nextState;
    default:
      return state;
  }
}

export default VideosReducer;