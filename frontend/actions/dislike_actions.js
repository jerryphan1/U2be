import * as DislikeAPIUtil from '../util/dislike_api_util';


export const RECEIVE_DISLIKES = 'RECEIVE_DISLIKES';
export const RECEIVE_DISLIKE = 'RECEIVE_DISLIKE';
export const REMOVE_DISLIKE = 'REMOVE_DISLIKE';
export const RECEIVE_DISLIKE_ERRORS = 'RECEIVE_DISLIKE_ERRORS';


const receiveDislikes = (dislikes) => {
  return {
    type: RECEIVE_DISLIKES,
    dislikes
  }
}

const receiveDislike = (dislike) => {
  return {
    type: RECEIVE_DISLIKE,
    dislike
  }
}

const removeDislike = (dislikeId) => {
  return {
    type: REMOVE_DISLIKE,
    dislikeId
  }
}

const receiveDislikeErrors = (errors) => {
  return {
      type: RECEIVE_DISLIKE_ERRORS,
      errors
  }
};

export const fetchDislikes = () => (dispatch) => {
  return DislikeAPIUtil.fetchDislikes()
    .then((dislikes) => dispatch(receiveDislikes(dislikes)),
    (errors) => dispatch(receiveDislikeErrors(errors.responseJSON)))
}

export const createDislike = (dislike) => (dispatch) => {
  return DislikeAPIUtil.createDislike(dislike)
    .then((created) => dispatch(receiveDislike(created)),
    (errors) => dispatch(receiveDislikeErrors(errors.responseJSON)))
}

export const deleteDislike = (dislikeId) => (dispatch) => {
  return DislikeAPIUtil.deleteDislike(dislikeId)
    .then(() => dispatch(removeDislike(dislikeId)),
    errors => dispatch(receiveDislikeErrors(errors.responseJSON)))
}