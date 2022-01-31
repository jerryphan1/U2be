import React from "react";


export default class VideoForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      title: '',
      description: '',
      thumbnail: '',
      uploaded_video: '',
      errors: []
    }
    this.handleTitleColor = this.handleTitleColor.bind(this);
    this.handleDescriptionColor = this.handleDescriptionColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if (!this.props.currentUser.id) return null;
    this.setState({user_id: this.props.currentUser.id, 
      })
  }

  componentDidUpdate(prevProps){
    if (this.props.currentUser.id !== prevProps.currentUser.id){
      this.componentDidMount()
    }
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const video = Object.assign({}, this.state);

    this.props.processForm(video)
      .then(() => this.setState({ title: '', description: '', thumbnail: '', uploaded_video: ''}))
      .fail(() => this.setState({ errors: this.props.errors }));
  }

  handleCancel(e){
    //reset body to empty
    e.preventDefault();
    this.setState({ title: '', description: '', thumbnail: '', uploaded_video: ''})
  }

  handleTitleColor(e){
    console.log(typeof e.currentTarget.value)
    let div = document.querySelector('#video-form-title-container');
    let title = document.querySelector('.video-form-title');
    if (e.currentTarget.value.length > 0) {
      div.classList.add('blue-border');
      title.classList.add('blue-text')
    } else {
      div.classList.remove('blue-border');
      title.classList.remove('blue-text')
    }
    console.log(e.currentTarget.value)
  }

  handleDescriptionColor(e){
    let div = document.querySelector('#video-form-description-container');
    let title = document.querySelector('.video-form-description');

    if (e.currentTarget.value.length > 0){
      div.classList.add('blue-border');
      title.classList.add('blue-text')
    } else {
      div.classList.remove('blue-border');
      title.classList.remove('blue-text')
    }
  }

  render(){
    return(
      <div>
        <form id='video-form-main-container' onSubmit={this.handleSubmit}>
            <h2>Upload a video</h2>
            <div id="video-form-title-container">
              <p className="video-form-title">Title (required)</p>
              <input className="video-form-title-textarea" type='textarea' placeholder="Add a title that describes your video"
                onKeyDown={this.handleTitleColor} value={this.state.title} onChange={this.update('title')}/>
            </div>

            <div id="video-form-description-container">
              <p className="video-form-description">Description</p>
              <input className="video-form-description-textarea" type='textarea' placeholder="Tell viewers about your video"
                onKeyDown={this.handleDescriptionColor} value={this.state.description} onChange={this.update('description')}/>
            </div>

            <div id='video-form-file-container'>
              <div id="video-form-video-url-container">
                <label htmlFor='video-file' className="video-form-video-label">
                <i className="fas fa-film"></i>
                  Upload Video
                </label>
                <input type="file" id='video-file' className="video-form-video" accept="video/mp4 , video/mov"/>
              </div>

              <div id="video-form-thumbnail-container">
              <label htmlFor='image-file' className="video-form-image-label">
                <i className="far fa-image"></i>
                  Upload Thumbnail
                </label>
                <input type="file" id='image-file' className="video-form-thumbnail" accept="image/jpg , image/jpeg, image/png"/>
              </div>
            </div>

            <div id='video-form-buttons-container'>
                <button className="video-form-cancel" onClick={() => this.props.closeModal()}>CANCEL</button>
                <input type='submit' className="video-form-submit" placeholder="SUBMIT" value='SUBMIT'/>
            </div>
        </form>
        {/* <ul className="errors">
              {this.state.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>
              })}
          </ul>  */}
      </div>
    )
  }

}
