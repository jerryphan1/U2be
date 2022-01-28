import { connect } from "react-redux";
import { fetchDislikes, createDislike, deleteDislike } from "../../actions/dislike_actions";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";
import LikesDislikes from "./likes_dislikes";


const mSTP = (state,ownProps) => {
  let likes, dislikes;
  likes = !(ownProps.video.likes) ? null : Object.values(ownProps.video.likes)
  dislikes = !(ownProps.video.dislikes) ? null : Object.values(ownProps.video.dislikes)
  return {
    likes: likes,
    dislikes: dislikes,
    currentUser: state.entities.users[state.session.id],
    video: ownProps.video
  }
}


const mDTP = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchLikes()),
    fetchDislikes: () => dispatch(fetchDislikes()),
    createLike: (like) => dispatch(createLike(like)),
    createDislike: (dislike) => dispatch(createDislike(dislike)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
    deleteDislike: (dislikeId) => dispatch(deleteDislike(dislikeId))
  }
}


export default connect(mSTP,mDTP)(LikesDislikes)