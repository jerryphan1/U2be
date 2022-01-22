import React from "react";
import Searchbar from "./searchbar";
import GreetingContainer from "./greeting/greeting_container";
import { Link } from "react-router-dom";

export default class TopNavbar extends React.Component {
  render(){
    return(
      <div id='top-navbar-container'>
        <div id='top-navbar-icons'>
          <i className="fas fa-bars nav-logos"></i>
          <a href='#/'><i className="fab fa-react nav-logos"></i></a>
        </div>
        <Searchbar/>
        <GreetingContainer/>
      </div>
    )
  }
}