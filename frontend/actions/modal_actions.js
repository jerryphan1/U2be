export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal,commentId) => {
  return {
    type: OPEN_MODAL,
    modal: modal,
    commentId, commentId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};