import React from "react";
import { withRouter } from "react-router-dom";


class VideoForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      title: '',
      description: '',
      thumbnail: '',
      thumbnailUrl: '',
      uploaded_video: '',
      uploadedUrl: '',
      errors: []
    }
    this.handleTitleColor = this.handleTitleColor.bind(this);
    this.handleDescriptionColor = this.handleDescriptionColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

    handleMouseEnter(e) {
      e.preventDefault();
      {
        if (e.target.className === 'video-preview' ) {
        this.startPreview(e.target);
        setTimeout(() => this.stopPreview(e.target),5000)
        }
      } 
    }
    
    handleMouseLeave(e) {
      e.preventDefault();
      if (e.target.className === 'video-preview') {
        this.stopPreview(e.target);
      }
    }
    
    startPreview(target) {
      // e.preventDefault();
      target.muted = true;
      target.currentTime = 1;
      target.playbackRate = 0.5;
      target.play()
    }
    
    stopPreview(target){
      target.currentTime = 0;
      target.playbackRate = 1;
      target.pause();
      target.load();
    }

  componentDidMount(){
    if (!this.props.currentUser.id) return null;
    this.setState({user_id: this.props.currentUser.id, errors: []
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
    // const video = Object.assign({}, this.state);
    const formData = new FormData();
    formData.append('video[user_id]', this.state.user_id)
    formData.append('video[title]', this.state.title)
    formData.append('video[description]', this.state.description)
    formData.append('video[thumbnail]', this.state.thumbnail)
    formData.append('video[uploaded_video]', this.state.uploaded_video)
    // setTimeout(() => {this.showSpinner()}, 500);
    this.props.processForm(formData)
      .then(() =>  {
        this.setState({ title: '', description: '', thumbnail: '', uploaded_video: ''})
        this.props.history.push(`/`)
      })
      //testing if this will take it to home page after submit
      // .then(() => this.props.history.push(`/`))
      .fail(() => {
        this.hideSpinner();
        this.setState({ errors: this.props.errors })
      });
      this.showSpinner();
  }

  showSpinner(){
    let spin = document.querySelector('.spinner')
    spin.classList.remove('hidden')
  }

  hideSpinner(){
    let spin = document.querySelector('.spinner')
    spin.classList.add('hidden')
  }

  handleCancel(e){
    //reset body to empty
    e.preventDefault();
    this.setState({ title: '', description: '', thumbnail: '', uploaded_video: ''})
    .then(this.props.closeModal())
  }

  handleImage(e){
    e.preventDefault();
    // this.handleErrors();
    const image = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({thumbnail: image, thumbnailUrl: fileReader.result, errors: []})
    }
    if (image){
      fileReader.readAsDataURL(image);
    }
  }

  handleVideo(e){
    e.preventDefault();
    // this.handleErrors();
    const video = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({uploaded_video: video, uploadedUrl: fileReader.result, errors: []})
    }
    if (video){
      fileReader.readAsDataURL(video);
    }
    // this.setState({uploaded_video: e.currentTarget.files[0]})
  }

  handleTitleColor(e){
    let div = document.querySelector('#video-form-title-container');
    let title = document.querySelector('.video-form-title');
    if (e.currentTarget.value.length > 0) {
      this.setState({errors: []})
      div.classList.add('blue-border');
      title.classList.add('blue-text')
    } else {
      div.classList.remove('blue-border');
      title.classList.remove('blue-text')
    }
  }

  handleDescriptionColor(e){
    // this.handleErrors();
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

  // handleErrors(e){
  //   if (e.currentTarget.value.length > 0) {
  //     this.setState({errors: []})
  //   }
  // }

  render(){
    // const thumbnailPreview = this.state.thumbnailUrl ? <img src={this.state.thumbnailUrl} className="thumbnail-preview"/> : null
    // const videoPreview = this.state.uploadedUrl ? <video src={this.state.uploadedUrl} className="video-preview"/> : null

    
    let combinedPic;
    if (this.state.uploadedUrl && this.state.thumbnailUrl) {      
      combinedPic = <video className='video-preview' src={this.state.uploadedUrl}  
      poster={this.state.thumbnailUrl} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
    } else if (this.state.thumbnailUrl && !this.state.uploadedUrl) {
      combinedPic = <img className='video-preview' src={this.state.thumbnailUrl}/>
    } else if (!this.state.thumbnailUrl && this.state.uploadedUrl) {
      combinedPic = <video className='video-preview' src={this.state.uploadedUrl}/>
    } else{
      combinedPic = <p className='text-preview'>Preview Here!</p>
    }
    

    return(
      <div>
        <form id='video-form-main-container' onSubmit={this.handleSubmit}>
            <h2>Upload a video</h2>
            <div id="video-form-title-container">
              <p className="video-form-title">Title (required)</p>
              <input className="video-form-title-textarea" type='textarea' placeholder="Add a title that describes your video"
                onKeyUp={this.handleTitleColor} value={this.state.title} onChange={this.update('title')}/>
            </div>

            <div id="video-form-description-container">
              <p className="video-form-description">Description</p>
              <input className="video-form-description-textarea" type='textarea' placeholder="Tell viewers about your video"
                onKeyUp={this.handleDescriptionColor} value={this.state.description} onChange={this.update('description')}/>
            </div>

            <div id='video-form-file-container'>
              <div id='video-form-upload-container'>
                <div id="video-form-video-url-container">
                  <label htmlFor='video-file' className="video-form-video-label">
                  <i className="fas fa-film"></i>
                      Upload Video
                  </label>
                  <input type="file" id='video-file' className="video-form-video" accept="video/mp4 , video/mov"
                  onChange={this.handleVideo}/>
                </div>

                <div id="video-form-thumbnail-container">
                <label htmlFor='image-file' className="video-form-image-label">
                  <i className="far fa-image"></i>
                    <p>Upload Thumbnail</p>
                  </label>
                  <input type="file" id='image-file' className="video-form-thumbnail" accept="image/jpg , image/jpeg, image/png"
                    onChange={this.handleImage}/>
                </div>
              </div>
              <div id='video-preview-container'>
                {combinedPic}
              </div>
            </div>

            <div id='video-form-buttons-container'>
                <button className="video-form-cancel" onClick={() => this.props.closeModal()}>CANCEL</button>
                <input type='submit' className="video-form-submit" placeholder="SUBMIT" value='SUBMIT'/>
            </div>
          <ul className="video-errors">
              {this.state.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>
              })}
          </ul> 
          <div className='spinner hidden'></div>
        </form>
      </div>
    )
  }

}

export default withRouter(VideoForm)
