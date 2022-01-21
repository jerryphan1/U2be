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
        let link;
        let text;
        if (this.props.formType === 'login') {
            link = `/signup`;
            text = `Sign Up`;
        } else {
            link = `/login`;
            text = `Log In`;
        };
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    /></label>
                    <label>Password: <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    /></label>
                    <button type="submit">{this.props.formType}</button>
                </form>
                <ul className="errors">
                    {this.props.errors.map((error, idx) => {
                        return <li key={idx}>{error}</li>
                    })}
                </ul>

                <Link to={link}>{text}</Link>
            </div>
        )
    }
}