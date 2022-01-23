import React from "react";
import { Link } from "react-router-dom";
import U2beLogo from '../../../app/assets/images/U2be.svg';


export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).fail(() => this.setState({ errors: this.props.errors }));
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
                    <a href='#'>
                        <img src={U2beLogo} alt="main-logo" id='session-logo'/>
                    </a>
                        <h2 className='session-h2-text'>{text}</h2>
                        <p className="session-p-text">to continue to U2be</p>
                    </div>

                    <form onSubmit={this.handleSubmit} id='form-container'>

                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder='username'
                            />
                        
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder='password'
                            />
                        
                    
                        <input className='demo-submit' type='submit' value='Demo Login'/>
                        
                        <div id='session-submit-options'>
                            
                            <Link className="session-link" to={link}>{other_text === 'Signup' ? other_text = 'Create Account' : other_text = 'Already have an account?'}</Link>
                            <input className='session-submit' type="submit" value={text}/>
                        </div>
                    </form>

                    <ul className="errors">
                        {this.state.errors.map((error, idx) => {
                            return <li key={idx}>{error}</li>
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}