import React from "react";
import { Link } from "react-router-dom";


export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this)
    }

    handleUser(){
        let demoUsername = 'demo username'.split('');
        let nextUserLetters = '' 
        const userTypewriter =  setInterval(() => {
            if ('demo username' !== this.state.username){
                nextUserLetters += demoUsername.shift()
                this.setState({username: nextUserLetters})
            } else {
                clearInterval(userTypewriter);
                this.handlePassword()
            }
        },100)
    }

    handlePassword(){
        let demoPassword = 'demo password'.split('');
        let nextPassLetters = ''
        const passTypewriter = setInterval(() => {
            if ('demo password' !== this.state.password){
                nextPassLetters += demoPassword.shift()
                this.setState({password: nextPassLetters})
            } else {
                clearInterval(passTypewriter)
                this.props.processForm({ username: 'demo username', password: 'demo password' })
            }
        },100)
    }

    handleDemo(e){
        e.preventDefault();
        e.stopPropagation();
        this.handleUser();
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
                        <img src={window.u2be_logo} alt="main-logo" id='session-logo'/>
                    </a>
                        <h2 className='session-h2-text'>{text}</h2>
                        <p className="session-p-text">to continue to U2be</p>
                    </div>

                    <form onSubmit={this.handleSubmit} id='form-container' >

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
                        
                    
                        <input onClick={this.handleDemo} className='demo-submit' type='button' value='Demo Login'
                            onkeydown={"return event.key != 'Enter';"}/>
                        
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