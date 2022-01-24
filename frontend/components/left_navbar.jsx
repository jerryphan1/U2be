import React from "react";
import U2beLogo from '../../app/assets/images/U2be.svg';

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
                {/* <i className="fab fa-react" id='left-main-logo'></i> */}
                <img src={U2beLogo} alt="main-logo" id='left-main-logo'/>
              </a>
            </div>
            {/* <hr/> */}

            <div className="left-nav-section">
              <li className="left-nav-text">
                <a href="#"><i className="fas fa-home left-nav-icon"></i><p>Home</p></a>
                
              </li>

              <li className="left-nav-text">
                <a href="https://github.com/jerryphan1" target='_blank' className='github-all'><i className="fab fa-github left-nav-icon"></i><p className='github'>Github</p></a>

              </li>

              <li className="left-nav-text">
                <a href="https://www.linkedin.com/in/jerry-phan-8615a7a3/" target='_blank'className='linkedin-all'><i className="fab fa-linkedin left-nav-icon"></i><p className='linkedin'>LinkedIn</p></a>
                
              </li>

              <li className="left-nav-text">
                <a href="https://www.youtube.com/c/Valkyrae1" target='_blank'className='random-all'><i className="fas fa-random left-nav-icon"></i><p className='random'>Random</p></a>
                
              </li>

              
            </div>
        </ul>
      </nav>
    )
  }
}