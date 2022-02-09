import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            passWord: '',
            isAuthnticated: false
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);


    }
    handleUserNameChange(event) {
        this.setState({ userName: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ passWord: event.target.value });
    }

    render() {
        return (
            <form >
                <h1 className="text-center text-blink display-4">Welcome To Bisotech</h1>
                <div>
                    <h3 className="text-center text-info-black">Log In</h3>
                    <div>
                        <label>Enter Username: </label>
                        <input type="text" value={this.state.event} onChange={this.handleUserNameChange} />
                    </div>
                    <div>
                        <label>Enter Password: </label>
                        <input type="text" value={this.state.event} onChange={this.handlePasswordChange} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <div>
                        {this.state.userName === 'admin' && this.state.passWord === 'admin' ?
                            (<Link to={'/Dashboard'}>
                                <button type='submit' className="btn btn-primary">Login</button>
                            </Link>)
                            : (<Link to={'/Page2'}><button type='submit' className="btn btn-primary">Login</button>
                            </Link>)}
                    </div>

                </div>
            </form >

        )
    }
}

export default Login
