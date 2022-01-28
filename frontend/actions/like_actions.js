import * as LikeAPIUtil from '../util/like_api_util';


export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';


const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes
  }
}

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  }
}

const removeLike = (likeId) => {
  return {
    type: REMOVE_LIKE,
    likeId
  }
}

const receiveLikeErrors = (errors) => {
  return {
      type: RECEIVE_LIKE_ERRORS,
      errors
  }
};

export const fetchLikes = () => (dispatch) => {
  return LikeAPIUtil.fetchLikes()
    .then((likes) => dispatch(receiveLikes(likes)),
    (errors) => dispatch(receiveLikeErrors(errors.responseJSON)))
}

export const createLike = (like) => (dispatch) => {
  return LikeAPIUtil.createLike(like)
    .then((created) => dispatch(receiveLike(created)),
    (errors) => dispatch(receiveLikeErrors(errors.responseJSON)))
}

export const deleteLike = (likeId) => (dispatch) => {
  return LikeAPIUtil.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)),
    errors => dispatch(receiveLikeErrors(errors.responseJSON)))
}