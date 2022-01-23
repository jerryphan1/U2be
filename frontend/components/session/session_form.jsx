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
            text = 'Login';
            other_text = `Signup`;
        } else {
            link = `/login`;
            text = 'Signup';
            other_text = `Login`;
        };
        return (
            <div id='session-container'>
                <div id='form-outer-line'>
                    <div id='upper-form-container'>
                        <h1>Logo will go here</h1>
                        <h2>{text}</h2>
                        <p>to continue to U2be</p>
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
                    
                        <input className='demo-submit' type='submit' value='Demo Login'/>
                        
                        <div id='session-submit-options'>
                            
                            <Link to={link}>{other_text === 'Signup' ? other_text = 'Create Account' : other_text = 'Already have an account?'}</Link>
                            <input className='session-submit' type="submit" value={text}/>
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