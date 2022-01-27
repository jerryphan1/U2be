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
    return (
      <div id='comment-index-container'>
        <h2>{this.props.comments.length} Comments</h2>
        <CommentForm video={this.props.video} user={this.props.currentUser} processForm={this.props.processForm}
          errors={this.props.errors}/>
        {
          this.props.comments.map((comment) => 
            <CommentIndexItem key={comment.id}comment={comment} deleteComment={this.props.deleteComment}/>)
        }
      </div>
    )
  }
}