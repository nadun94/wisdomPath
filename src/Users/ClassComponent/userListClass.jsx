import React, { Component } from 'react';
import Axios from 'axios';
import UserClass from './UserClass';

import './UserClass.styles.css';

class UserListClass extends Component {
    state = {
        UserData: []
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        Axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                const UserData = res.data.data;
                this.setState({ UserData });
            })
    }


    render() {
        return (
            <div className="container">
                <h1>User List</h1>
                <div className="row">
                    {this.state.UserData.map(
                        (users) => <UserClass key={users.id} user={users} />
                    )}
                </div>
            </div>
        )
    }

}



export default UserListClass;