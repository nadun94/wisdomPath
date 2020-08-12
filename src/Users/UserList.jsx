import React, {useContext, useEffect, useState} from "react";
import User from "./User";
import axios from 'axios';
import {UserContext} from "./UserContext";

export const UserList = () => {
    const [text, setText] = useState('');
    const { users, posts, } = useContext(UserContext).current;


    return <>

        <div className="user-list-container">
            <h1>user list</h1>
            <h2>{text}</h2>
            {users.map((val, index) => {
                return <User name={val.name} onClickX={(val) => setText(val)}
                             city={val.address.city} email={val.email}/>
            }
            )}
        </div>

    </>
}