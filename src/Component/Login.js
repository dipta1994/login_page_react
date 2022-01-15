import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        this.handleinputForUserName = this.handleinputForUserName.bind(this);
        this.handleinputForPassword = this.handleinputForPassword.bind(this);

    }
    handleinputForUserName = (event) => {
        this.setState({ username: event.target.value });
        console.log(this.state)
    }
    handleinputForPassword = (event) => {
        this.setState({ password: event.target.value });
        console.log(this.state)
    }
    render() {
        return (
            <form>
                <h1 className="text-center text-blink display-4">Welcome To Bisotech</h1>
                <div>
                    <h3 className="text-center text-info-black">Log In</h3>
                    <div>
                        <label>Enter Username: </label>
                        <input type="text" name='username' value={this.state.username} onChange={this.handleinputForUserName} />
                    </div>
                    <div>
                        <label>Enter Password: </label>
                        <input type="text" name='password' value={this.state.password} onChange={this.handleinputForPassword} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <div>
                        <Link to="/Page1" className="btn btn-primary">Login</Link>

                    </div>
                </div>

            </form>
        )
    }
}

export default Login
