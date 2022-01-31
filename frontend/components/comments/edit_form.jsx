import React from "react";

export default class EditForm extends React.Component{
  constructor(props){
    super(props)
    this.state = Object.assign({errors: []} , this.props.comment)
    this.storage = this.props.comment.body
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    // this.storeBody = this.storeBody.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    // debugger
    this.props.processForm(comment)
      .fail(() => this.setState({ errors: this.props.errors }));
      return null
      // this.props.processForm(user).fail(() => this.setState({ errors: this.props.errors }));
  }

  handleCancel(e){
    //reset body to empty
    e.preventDefault();
    // this.props.edit()
    // return e => this.setState({body: this.props.comment.body});
    // this.setState({body: this.storeBody})
  }

  // storeBody(){
  //   const savedState = this.storage
  //   return savedState
  // }

  // componentDidMount(){
  //   //someone signs out mid comment update
  //   if (!this.props.user) return null;
  //   // this.setState({
  //   //   user_id: this.props.comment.user_id,
  //   //   video_id: this.props.comment.video_id,
  //   //   body: this.props.comment.body,
  //   //   errors: []
  //   // })
  // }

  // componentDidUpdate(prevProps){
  //   if (this.props.user.id !== prevProps.user.id){
  //     this.componentDidMount()
  //   }
  // }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    if (!this.props.user) return null;
    return(
      <div  id="edit-form-container">
      <form onSubmit={this.handleSubmit} className="edit-form">
        <textarea onClick={this.handleVisible} className="edit-form-textarea" value={this.state.body} onChange={this.update('body')}/>
        <div className="edit-form-buttons">
          <button className='edit-form-button'onClick={this.handleCancel} >Cancel</button>
          <input className='edit-form-input'type='submit' placeholder="Comment"/>
        </div>
        <ul className="errors-edit-form">
              {this.state.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>
              })}
          </ul>
      </form>
      </div>
    )
  }

}