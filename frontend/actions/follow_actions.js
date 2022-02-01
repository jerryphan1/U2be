import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const receiveFollows = (follows) => {
  return {
    type: RECEIVE_FOLLOWS,
    follows
  }
}

const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  }
}

const removeFollow = (followId) => {
  return {
    type: REMOVE_FOLLOW,
    followId
  }
}

const receiveFollowErrors = (errors) => {
  return {
      type: RECEIVE_FOLLOW_ERRORS,
      errors
  }
};

export const fetchFollows = () => (dispatch) => {
  return FollowAPIUtil.fetchFollows()
    .then((follows) => dispatch(receiveFollows(follows)),
    (errors) => dispatch(receiveFollowErrors(errors.responseJSON)))
}

export const createFollow = (follow) => (dispatch) => {
  return FollowAPIUtil.createFollow(follow)
    .then((created) => dispatch(receiveFollow(created)),
    (errors) => dispatch(receiveFollowErrors(errors.responseJSON)))
}

export const deleteFollow = (followId) => (dispatch) => {
  return FollowAPIUtil.deleteFollow(followId)
    .then(() => dispatch(removeFollow(followId)),
    errors => dispatch(receiveFollowErrors(errors.responseJSON)))
}