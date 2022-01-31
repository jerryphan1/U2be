import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

const receiveVideos = (videos) => {
  return {
    type: RECEIVE_VIDEOS,
    videos
  }
}

const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video
  }
}

const removeVideo = (videoId) => {
  return {
    type: REMOVE_VIDEO,
    videoId
  }
}

const receiveVideoErrors = (errors) => {
  return {
      type: RECEIVE_VIDEO_ERRORS,
      errors,
  }
}

export const fetchVideos = () => (dispatch) => {
  return VideoAPIUtil.fetchVideos()
    .then((videos) => dispatch(receiveVideos(videos)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const fetchVideo = (videoId) => (dispatch) => {
  return VideoAPIUtil.fetchVideo(videoId)
    .then((video) => dispatch(receiveVideo(video)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const createVideo = (video) => (dispatch) => {
  return VideoAPIUtil.createVideo(video)
    .then((created) => dispatch(receiveVideo(created)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const updateVideo = (video) => (dispatch) => {
  return VideoAPIUtil.updateVideo(video)
    .then((updated) => dispatch(receiveVideo(updated)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON)))
}

export const deleteVideo = (videoId) => (dispatch) => {
  return VideoAPIUtil.deleteVideo(videoId)
    .then(() => dispatch(removeVideo(videoId)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON)))
}