import React from "react"

const Searchbar = () => {
  return(
    <form id='top-navbar-searchbar'>
      <input className='searchbar' type='text' placeholder="Search"/>
      <button><i className="fas fa-search"></i></button>
    </form>
  )
}

export default Searchbar