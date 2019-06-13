import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        const end = 'http://localhost:5000/api/users'
        axios
            .get(end)
            .then(res => {
                console.log('users', res.data);
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
                       return <li key={user.id}>{user.username}, {user.department}</li>
                    })}
                </ul>
            </div>
        );
    }
}


export default UserList;