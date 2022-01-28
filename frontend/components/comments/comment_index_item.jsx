import React from "react";
import { Link } from "react-router-dom";
// import moment from 'moment';
import moment from 'moment-timezone';


export default class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    if (!this.props.comment) return null;
    let deleteComm;
    if (this.props.user) {
      deleteComm = (this.props.user.id === this.props.comment.user_id) ? <i className="fas fa-trash-alt"></i> : ''
    } else {
      deleteComm = ''
    }

    let initial = this.props.comment.user.username[0].toUpperCase();
    let date = moment.tz(this.props.comment.created_at, 'America/Los_Angeles').format('YYYYMMDD HH:mm:ss');
    let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();
    return(
      <div className="comment-index-container">
        <Link to={`/users/${this.props.comment.user.id}`} className='comment-index-image'><p>{initial}</p></Link>
        <div className="comment-index-info-container">
          <div className="comment-index-top-info">
              <div className="comment-index-delete">
                <h2 className="comment-index-username">{this.props.comment.user.username}</h2>
                <h2 className="comment-index-date">{newDate}</h2>
              </div>
              {/* {console.log(this.props.comment.id)} */}
            <p className="comment-delete" onClick={() => this.props.openModal('deleteOption',this.props.comment.id)}>{deleteComm}</p>
          </div>
            <p className="comment-index-body">{this.props.comment.body}</p>
        </div>
      </div>
    )
  }
}