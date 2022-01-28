import React from "react";
import CommentForm from "./comment_form";
import CommentIndexItem from "./comment_index_item";

export default class CommentIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchComments()
  }

  render(){
    // hopefully checks for comments or not
    if (!this.props.comments) {
      return (
        <div id='comment-index-container'>
          <h2>No Comments</h2>
          <CommentForm video={this.props.video} user={this.props.currentUser} processForm={this.props.processForm}
          errors={this.props.errors}/>
        </div>
      )
    } else {
    return (
      <div id='comment-index-container'>
        <h2>{this.props.comments.length} Comments</h2>
        <CommentForm video={this.props.video} user={this.props.currentUser} processForm={this.props.processForm}
          errors={this.props.errors}/>
          {
            this.props.comments.map((comment) => 
              <CommentIndexItem key={comment.id}comment={comment} deleteComment={this.props.deleteComment} 
              user={this.props.currentUser} closeModal={this.props.closeModal} openModal={this.props.openModal}
              video={this.props.video}/>)
          }
      </div>
      )
    }
  }
}