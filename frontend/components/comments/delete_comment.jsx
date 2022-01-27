import React from "react";

export default class DeleteComment extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){
    console.log(this.props)
  }


  render(){
    return (
      <div id='delete-modal'>
        <h1 className="delete-modal-header">Are you sure?</h1>
        <p className="delete-modal-text">This action cannot be undone...</p>
        <div id='delete-modal-button-container'>
          <button className="delete-button-cancel" onClick={() => this.props.closeModal()}>Cancel</button>
          <button className="delete-button-confirm" onClick={this.handleClick}>Confirm</button>
        </div>

      </div>
    )
  }
}