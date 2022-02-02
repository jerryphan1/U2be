import React from "react";

export default class DeleteSub extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.deleteFollow(this.props.subId).then(
      this.props.closeModal()
    )
  }


  render(){
    return (
      <div id='sub-delete-modal'>
        <p className="sub-delete-modal-text">Are you sure you want to unsubscribe?</p>
        <div id='sub-delete-modal-button-container'>
          <button className="sub-delete-button-cancel" onClick={() => this.props.closeModal()}>CANCEL</button>
          <button className="sub-delete-button-confirm" onClick={this.handleClick}>UNSUBSCRIBE</button>
        </div>
      </div>
    )
  }
}