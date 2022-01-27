import React from "react";
import { Link } from "react-router-dom";
// import moment from 'moment';
import moment from 'moment-timezone';


export default class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    let initial = this.props.comment.user.username[0].toUpperCase();
    let date = moment.tz(this.props.comment.created_at, 'America/Los_Angeles').format('YYYYMMDD HH:mm:ss');
    let newDate = moment(date, 'YYYYMMDD HH:mm:ss').fromNow();
    return(
      <div className="comment-index-container">
        <Link to={`/users/${this.props.comment.user.id}`} className='comment-index-image'><p>{initial}</p></Link>
        <div className="comment-index-info-container">
          <div className="comment-index-top-info">
            <h2 className="comment-index-username">{this.props.comment.user.username}</h2>
            <h2 className="comment-index-date">{newDate}</h2>
          </div>
            <p className="comment-index-body">{this.props.comment.body}</p>
        </div>
      </div>
    )
  }
}