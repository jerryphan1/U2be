import React from "react";
import { Link } from "react-router-dom";

export default class Greeting extends React.Component {
    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <h1>Welcome {this.props.currentUser.username}</h1>
                    <button className='navbar-button' onClick={() => this.props.logout()}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className="navbar-link-container">
                    {/* <Link to={'/signup'}>
                        Signup
                    </Link> */}
                    {/*Youtube only shows a signup*/}
                    {/* <br /> */}
                    <button className='navbar-button'>
                        <Link to={'/login'} className='navbar-link'>Login</Link>
                    </button>

                </div>
            )
        }
    }
}