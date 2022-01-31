import React from "react";
import { Link } from "react-router-dom";
// import moment from 'moment';
import moment from 'moment-timezone';
import EditFormContainer from "./edit_form_container";


export default class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
    this.testEdit = this.testEdit.bind(this)
  }

  testEdit(){
    this.setActive()
    this.setState({edit: true})
  }

  setActive(){
    let dropdown = document.querySelector('.comment-dropdown-content')
    dropdown.classList.toggle('active')
  }

  render(){
    if (!this.props.comment) return null;
    let deleteComm;
    if (this.props.user) {
      deleteComm = (this.props.user.id === this.props.comment.user_id) ? <i className="fas fa-ellipsis-v"></i> : ''
    } else {
      deleteComm = ''
    }

    let initial = this.props.comment.user.username[0].toUpperCase();
    let date = moment.parseZone(this.props.comment.created_at).local().format('YYYYMMDD HH:mm:ss');
    // {console.log(date)}
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
              <div className="comment-dropdown">
                  <p className="comment-delete" onClick={this.setActive}>{deleteComm}</p>
                  <div className="comment-dropdown-content"> 
                    <p className="comment-dropdown-options" onClick={this.testEdit}>Edit</p>
                    <p className="comment-dropdown-options" onClick={() => this.props.openModal('deleteOption',this.props.comment.id)}>Delete</p>
                  </div>
              </div>
          </div>
          {this.state.edit ? <EditFormContainer comment={this.props.comment} user={this.props.user}/> : <p className="comment-index-body">{this.props.comment.body}</p>}
        </div>
        
      </div>
    )
  }
}

// onClick={() => this.props.openModal('deleteOption',this.props.comment.id)}
// <i className="fas fa-trash-alt"></i>