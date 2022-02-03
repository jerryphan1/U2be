import React from "react";
import { withRouter } from "react-router-dom";

class Searchbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange(field) {
      return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.searchVideos(this.state.query)
      .then(() => this.props.history.push(`/search/${this.state.query}`))
      .fail(() => this.props.history.push(`/search/${this.state.query}`))
    }


  render(){
    return(
      <form id='top-navbar-searchbar' onSubmit={this.handleSubmit}>
        <input className='searchbar' type='text' placeholder="Search"
          value={this.state.query} onChange={this.handleChange('query')}/>
        <button><i className="fas fa-search"></i></button>
      </form>
    )
  }
}

// const Searchbar = () => {
//   return(
//     <form id='top-navbar-searchbar'>
//       <input className='searchbar' type='text' placeholder="Search"/>
//       <button><i className="fas fa-search"></i></button>
//     </form>
//   )
// }

// export default Searchbar
export default withRouter(Searchbar)