import React from "react";

export default class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      video_id: '',
      body: '',
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = Object.assign({}, this.state);

    this.props.processForm(comment)
      .then(() => this.setState({ body: ''}))
      .fail(() => this.setState({ errors: this.props.errors }));


      // this.props.processForm(user).fail(() => this.setState({ errors: this.props.errors }));
  }

  handleCancel(e){
    //reset body to empty
    e.preventDefault();
    this.setState({body: ''})
  }

  handleVisible(){
    let buttons = document.querySelector('.comment-form-buttons')
    buttons.classList.add('toggle-buttons')
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  componentDidMount(){
    // only signed in users can post comment
    if (!this.props.user) return null;
    this.setState({user_id: this.props.user.id, 
                  video_id: this.props.video.id,
                  errors: []
                  })
  }


  //remove error message 
  componentDidUpdate(prevProps){
    if (this.props.video.id !== prevProps.video.id){
      this.componentDidMount()
    }
  }

  render(){
    //hopefully handles refresh 
    let status = (!this.props.user) ? true : false
    let initial = (this.props.user) ? this.props.user.username[0].toUpperCase() : '?'
    return(
      <div id="comment-form-real">
        <div id="comment-form-container">
          <h2 className="comment-image-h2"><p>{initial}</p></h2>
          <form onSubmit={this.handleSubmit} className="comment-form">
            <textarea onClick={this.handleVisible} className="comment-form-textarea" placeholder='Add a public comment...' value={this.state.body} onChange={this.update('body')}/>
            <div className="comment-form-buttons">
              <button className='comment-form-button'onClick={this.handleCancel} disabled={status}>Cancel</button>
              <input className='comment-form-input'type='submit' placeholder="Comment" disabled={status}/>
            </div>
          </form>
        </div>
                   <ul className="errors">
              {this.state.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>
              })}
          </ul>
      </div>
    )
  }
}



          