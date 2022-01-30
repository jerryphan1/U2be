import React from "react";

export default class EditForm extends React.Component{
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
    this.setState({body: this.storeBody()})
  }

  storeBody(){
    const savedState = this.state.body
    return savedState
  }

  componentDidMount(){
    //someone signs out mid comment update
    if (!this.props.user) return null;
    this.setState({
      user_id: this.props.comment.user_id,
      video_id: this.props.comment.video_id,
      body: this.props.comment.body,
      errors: []
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.user.id !== prevProps.user.id){
      this.componentDidMount()
    }
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    if (!this.props.user) return null;
    return(
      <>
      <form onSubmit={this.handleSubmit} className="comment-form">
        <textarea onClick={this.handleVisible} className="comment-form-textarea" placeholder='Add a public comment...' value={this.state.body} onChange={this.update('body')}/>
        <div className="comment-form-buttons">
          <button className='comment-form-button'onClick={this.handleCancel} >Cancel</button>
          <input className='comment-form-input'type='submit' placeholder="Comment"/>
        </div>
      </form>
        <ul className="errors">
              {this.state.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>
              })}
          </ul>
      </>
    )
  }

}