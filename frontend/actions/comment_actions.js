import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment 
  }
}

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

export const fetchComments = () => (dispatch) => {
  return CommentAPIUtil.fetchComments()
    .then((comments) => dispatch(receiveComments(comments)))
}

export const createComment = (comment) => (dispatch) => {
  return CommentAPIUtil.createComment(comment)
    .then((created) => dispatch(receiveComment(created)))
}

export const updateComment = (comment) => (dispatch) => {
  return CommentAPIUtil.updateComment(comment)
    .then((updated) => dispatch(receiveComment(updated)))
}

export const deleteComment = (commentId) => (dispatch) => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
}