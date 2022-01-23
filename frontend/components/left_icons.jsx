import React from "react";

export default class LeftIcons extends React.Component{
  render(){
    return(
      <div id='left-icon-container'>
        <ul id='left-icon-ul'>
              <li className="left-icon-nav-text" id='left-icon-home'>
                <a href="#"><i className="fas fa-home left-icon-nav-icon"></i></a>
                <p>Home</p>
              </li>

              <li className="left-icon-nav-text">
                <a href="https://github.com/jerryphan1" target='_blank'><i className="fab fa-github left-icon-nav-icon"></i></a>
                <p>GitHub</p>
              </li>

              <li className="left-icon-nav-text">
                <a href="https://www.linkedin.com/in/jerry-phan-8615a7a3/" target='_blank'><i className="fab fa-linkedin left-icon-nav-icon"></i></a>
                <p>LinkedIn</p>
              </li>

              <li className="left-icon-nav-text">
                <a href="https://www.youtube.com/c/Valkyrae1" target='_blank'><i className="fas fa-random left-icon-nav-icon"></i></a>
                <p>Random</p>
              </li>
        </ul>
      </div>
    )
  }
}