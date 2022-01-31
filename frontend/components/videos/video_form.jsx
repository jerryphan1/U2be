import React from "react";


export default class VideoForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      title: '',
      description: '',
      thumbnail: '',
      uploaded_video: ''
    }
    this.handleTitleColor = this.handleTitleColor.bind(this);
    this.handleDescriptionColor = this.handleDescriptionColor.bind(this);
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
        <form id='video-form-main-container'>
            <h2>Upload a video</h2>
            <div id="video-form-title-container">
              <p className="video-form-title">Title (required)</p>
              <input className="video-form-title-textarea" type='textarea' placeholder="Add a title that describes your video"
                onKeyDown={this.handleTitleColor}/>
            </div>

            <div id="video-form-description-container">
              <p className="video-form-description">Description</p>
              <input className="video-form-description-textarea" type='textarea' placeholder="Tell viewers about your video"
                onClick={this.handleDescriptionColor}/>
            </div>

            <div id='video-form-file-container'>
              <div id="video-form-video-url-container">
                <label for='video-file' className="video-form-video-label">
                <i className="fas fa-film"></i>
                  Upload Video
                </label>
                <input type="file" id='video-file' className="video-form-video" accept="video/mp4 , video/mov"/>
              </div>

              <div id="video-form-thumbnail-container">
              <label for='image-file' className="video-form-image-label">
                <i className="far fa-image"></i>
                  Upload Thumbnail
                </label>
                <input type="file" id='image-file' className="video-form-thumbnail" accept="image/jpg , image/jpeg, image/png"/>
              </div>
            </div>
        </form>
    )
  }

}