import React from 'react';
import axios from 'axios';

import '../auth/addInterceptors';
import withAuth from '../auth/withAuth';

class UserList extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/users')
            .then(res => {
                console.log('users', res.data);
                this.setState({users: res.data.users });
            })
            .catch(err => {
                console.error('users error', err.response)
            })
    }

    render() {
        return(
            <div>
                <h3>Users</h3>
                <ul>
                    {this.state.users.map(user => {
                       return <li key={user.id}>{user.username}</li>
                    })}
                </ul>
            </div>
        );
    }
}


export default withAuth(UserList);