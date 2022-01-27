import React from "react";

export default class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      video_id: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    debugger
    this.props.processForm(comment)
      .then(() => this.setState({ body: ''}));
  }

  handleCancel(e){
    //reset body to empty
    e.preventDefault();
    this.setState({body: ''})
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  componentDidMount(){
    // only signed in users can post comment
    if (!this.props.user) return null;
    this.setState({user_id: this.props.user.id, 
                  video_id: this.props.video.id
                  })
  }

  render(){
    //hopefully handles refresh 
    if (!this.props.user) return null;
    let initial = this.props.user.username[0].toUpperCase()
    return(
      <div id="comment-form-container">
        <h2>{initial}</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder='Add a public comment...' value={this.state.body} onChange={this.update('body')}/>
          <input type='button' placeholder="Cancel" onClick={this.handleCancel}/>
          <input type='submit' placeholder="Comment"/>
        </form>
      </div>
    )
  }
}