import React from "react";
import Searchbar from "./searchbar";
import GreetingContainer from "./greeting/greeting_container";
import { Link } from "react-router-dom";

export default class TopNavbar extends React.Component {

  handleClick(e){
    e.preventDefault();
    const sideMenu = document.querySelector('#left-nav-menu');
    sideMenu.classList.toggle('active');
  }

  render(){
    return(
      <div id='top-navbar-container'>
        <div id='top-navbar-icons'>
        <a href='#/'id='show-menu' onClick={this.handleClick}><i className="fas fa-bars nav-logos"></i></a>
          <a href='#/'><i className="fab fa-react nav-logos"></i></a>
        </div>
        <Searchbar/>
        <GreetingContainer/>
      </div>
    )
  }
}