import React from "react";
import { Link } from "react-router-dom";
import LoggedInGreeting from "./logged_in_greeting";

export default class Greeting extends React.Component {
    render() {
        if (this.props.currentUser) {
            return (
                <LoggedInGreeting user={this.props.currentUser} logout={this.props.logout}/>
            )
        } else {
            return (
                <div className="navbar-link-container">
                    <button className='navbar-button'>
                        <Link to={'/login'} className='navbar-link'>Login</Link>
                    </button>

                </div>
            )
        }
    }
}