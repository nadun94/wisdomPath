import React, { useEffect, useState } from 'react';
import axios from "axios";

export const UserContext = React.createContext({
    current: {
        users: [],
        posts: [],
        selectedUser: null,
        setSelectedUser: (val) => { },
        selectedUserName: null,
        setSelectedUserName: (val) => { },
    }
})

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [selectedUserName, setSelectedUserName] = useState();

    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                console.log('user list ', JSON.stringify(result.data))
                setUsers(result.data);
            })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUser}/posts`)
            .then((result) => {
                console.log('post list ', JSON.stringify(result.data))
                setPosts(result.data);
            })
            .catch((e) => {
                console.log('exception coo', JSON.stringify(e))
            })
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts, selectedUser, setSelectedUserName])
    return (
        <UserContext.Provider value={
            {
                current: { setPosts, selectedUser, selectedUserName, posts, users, setSelectedUser, setSelectedUserName }
            }
        } > {props.children}
        </UserContext.Provider>
    )
}