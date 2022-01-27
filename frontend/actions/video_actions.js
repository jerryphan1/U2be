import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';


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

export const fetchVideos = () => (dispatch) => {
  return VideoAPIUtil.fetchVideos()
    .then((videos) => dispatch(receiveVideos(videos)))
}

export const fetchVideo = (videoId) => (dispatch) => {
  return VideoAPIUtil.fetchVideo(videoId)
    .then((video) => dispatch(receiveVideo(video)))
}

export const createVideo = (video) => (dispatch) => {
  return VideoAPIUtil.createVideo(video)
    .then((created) => dispatch(receiveVideo(created)))
}

export const updateVideo = (video) => (dispatch) => {
  return VideoAPIUtil.updateVideo(video)
    .then((updated) => dispatch(receiveVideo(updated)))
}

export const deleteVideo = (videoId) => (dispatch) => {
  return VideoAPIUtil.deleteVideo(videoId)
    .then(() => dispatch(removeVideo(videoId)))
}