import React from "react";

export default class LeftNavbar extends React.Component {

  handleClick(e){
    e.preventDefault();
    // const hideMenu = document.querySelector('#hide-menu');
    const sideMenu = document.querySelector('#left-nav-menu');
    sideMenu.classList.toggle('active');
  }

  render(){
    return(

      <nav id='left-nav-menu'>
        <ul className='left-nav-menu-items'>
            <div id="navbar-toggle">
              <a href="#/" className="menu-bars" id='hide-menu' onClick={this.handleClick}>
                <i className="fas fa-bars left-nav-icon"></i>
              </a>

              <a href='#'>
                <i className="fab fa-react" id='left-main-logo'></i>
              </a>
            </div>
            {/* <hr/> */}

            <div className="left-nav-section">
              <li className="left-nav-text">
                <a href="#"><i className="fas fa-home left-nav-icon"></i>Home</a>
              </li>

              <li className="left-nav-text">
                <a href="https://github.com/jerryphan1" target='_blank'><i className="fab fa-github left-nav-icon"></i>Github</a>
              </li>

              <li className="left-nav-text">
                <a href="https://www.linkedin.com/in/jerry-phan-8615a7a3/" target='_blank'><i className="fab fa-linkedin left-nav-icon"></i>LinkedIn</a>
              </li>

              <li className="left-nav-text">
                <a href="#"><i className="fas fa-random left-nav-icon"></i>Random</a>
              </li>

              
            </div>
        </ul>
      </nav>
    )
  }
}