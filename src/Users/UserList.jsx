import React, {useEffect, useState} from "react";
import User from "./User";
import axios from 'axios';

export const UserList = () => {
    const [userData, setUserData] = useState([]);
    const fetchUsers = () => {
        axios.get('https://reqres.in/api/users?page=1')
            .then((result) => {
                console.log('temp ', JSON.stringify(result.data.data))
                setUserData(result.data.data);
            })
    }
    useEffect(fetchUsers, []);
    return <>

        <div className="user-list-container">
            <h1>user list</h1>
            {userData.map((val, index) => {
                return <User first_name={val.first_name} avatar={val.avatar}
                             last_name={val.last_name} email={val.email}/>
            }
            )}
        </div>

    </>
}