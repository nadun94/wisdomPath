import React, {useContext, useEffect, useState} from "react";
import User from "./User";
import axios from 'axios';
import {UserContext} from "./UserContext";
import {Post} from "./Post";

export const UserList = () => {
    const { users, posts, selectedUser } = useContext(UserContext).current;

// useEffect(() => {
//    if(users.length > 0){
//        const x = users.find((val) => val.id === selectedUser);
//        console.log('fsdf ', x)
//    }
// }, [])
    return <div style={{ display: 'flex', flexDirection: 'row'}}>

        <div className="user-list-container">
            {users.map((val, index) => {
                return <User data={val}
                             />
            }
            )}
        </div>
        <div className="post-list-container">
            {users.length > 0 && <h2>Posted by selected user </h2>}
            {posts.map((val, index) => {
                    return <Post data={val}/>
                }
            )}
        </div>

    </div>
}