import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
    state = {
        username: 'Me',
        password: 'taco',
        department: 'food'
    }

    handleChanges = e => {
        e.preventDefault();
        const {id, value} = e.target;
        this.setState({ [id]: value });
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
                window.location.reload();
            })
            .catch(error => {
                console.log('Login Error', error.response);
            })
    }

    render() {
        return(
            <div>
                <h1> Login </h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="username"
                    placeholder="username" 
                    id='username'
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleChanges}
                    />
                    <input className="department"
                    placeholder="department"
                    id='department'
                    type='text' 
                    value={this.state.department}
                    onChange={this.handleChanges}
                    />
                    <input className="password"
                    placeholder="password"
                    id='password' 
                    type='password' 
                    value={this.state.password} 
                    onChange={this.handleChanges}
                    />
                    <button className="submit"> Submit </button>
                </form>
            </div>
        )
    }
}