import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        let link, text, other_text;
        if (this.props.formType === 'login') {
            link = `/signup`;
            text = 'Log In';
            other_text = `Sign Up`;
        } else {
            link = `/login`;
            text = 'Sign Up';
            other_text = `Log In`;
        };
        return (
            <div id='session-container'>
                <div id='form-outer-line'>
                    <div id='upper-form-container'>
                        <h1>Logo will go here</h1>
                        <h1>{text}</h1>
                    </div>

                    <form onSubmit={this.handleSubmit} id='form-container'>

                        <label><input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder='username'
                            />
                        </label>
                        <label><input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder='password'
                            />
                        </label>
                        <div id='session-submit-options'>
                            <Link to={link}>{other_text}</Link>
                            <input type="submit" value={text}/>
                        </div>
                    </form>

                    <ul className="errors">
                        {this.props.errors.map((error, idx) => {
                            return <li key={idx}>{error}</li>
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}