import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleChanges = e => {
        e.preventDefault();

    }

    handleSubmit = e => {
        e.preventDefault();
        const end = 'http://localhost:5000/api/login'
        axios
            .post(end, this.state)
            .then(res => {
                console.log('Login Response', res.data);
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/users');
            })
            .catch(error => {
                console.log('Login Error', error);
            })
    }

    render() {
        return(
            <div>
                <h1> Login </h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="username" type='text' value={this.state.} onChange={this.handleChanges}/>
                    <input className="password" type='password' value={this.state.} onChange={this.handleChanges}/>
                    <button className="submit"> Submit </button>
                </form>
            </div>
        )
    }
}