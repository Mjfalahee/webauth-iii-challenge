import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
    state ={
        username: '',
        department: '',
        password: ''
    }

    handleChanges = e => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const end = 'http://localhost:5000/api/register';
        axios
            .post(end, this.state)
            .then(res => {
                console.log('Sign up response', res.data)
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                <h3> Sign Up </h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                    className='username' 
                    type ='text'
                    id='username'
                    onChange={this.handleChanges}
                    value={this.state.username}
                    />
                    <input
                    className='department' 
                    type ='text'
                    id='department'
                    onChange={this.handleChanges}
                    value={this.state.department}
                    />
                    <input
                    className='password' 
                    type ='password'
                    id='password'
                    onChange={this.handleChanges}
                    value={this.state.password}
                    />
                    <button type='submit'> Submit </button>
                </form>
            </div>


        )
    }
}