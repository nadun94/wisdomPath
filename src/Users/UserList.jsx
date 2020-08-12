import React, {useEffect, useState} from "react";
import User from "./User";
import axios from 'axios';

export const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [text, setText] = useState('');
    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                console.log('temp ', JSON.stringify(result.data))
                setUserData(result.data);
            })
    }
    useEffect(fetchUsers, [text]);
    return <>

        <div className="user-list-container">
            <h1>user list</h1>
            <h2>{text}</h2>
            {userData.map((val, index) => {
                return <User name={val.name} onClickX={(val) => setText(val)}
                             city={val.address.city} email={val.email}/>
            }
            )}
        </div>

    </>
}