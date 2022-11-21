import React from 'react'
import '../components/LoginForm.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maskStyle: {
                left: 512,
                right: 0
            }
        }

        this.container = React.createRef()

        this.onSignIn = this.onSignIn.bind(this)
        this.onSignUp = this.onSignUp.bind(this)

    }
    componentDidMount() {
      
    }
    componentWillUnmount() {
        clearInterval(this.interval);

    }

    onSignUp() {
        this.container.current.classList.add("right-panel-active");
    }
    onSignIn() {
        debugger
        this.container.current.classList.remove("right-panel-active");
    }

    render() {
        const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`
        // const clipValue =  `inset(0 200px 0 200px)`

        return (
            <div className="container" id="container" ref={this.container}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h4>Create Account</h4>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.onSignUp}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h4>Sign in</h4>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={this.onSignIn}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h4>Your Static is Waiting for you.</h4>
                            <p>Make sure you got everyone food and drinks.</p>
                            <button className="ghost" id="signIn" onClick={this.onSignIn}>Log Back In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h4>Raid Finder and Scheduler</h4>
                            <p>Looking for your next Deathless Clear?</p>
                            <button className="ghost" id="signUp" onClick={this.onSignUp}>Sign Up Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;