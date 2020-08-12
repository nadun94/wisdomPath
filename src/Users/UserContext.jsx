import React, {useEffect, useState} from 'react';
import axios from "axios";

export const UserContext = React.createContext({
   current:  {
       users: [],
       selectedUser: 1,
       posts: [],
       setSelectedUser: (val) => {}
   }
})

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selectedUser, setSelectedUser] = useState(1);
    // const [selectedUserName, setSelectedUserName] = useState('');

    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                console.log('user loist ', JSON.stringify(result.data))
                setUsers(result.data);
            })
    };
    const fetchPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUser}/posts`)
            .then((result) => {
                console.log('post list ', JSON.stringify(result.data))
                setPosts(result.data);
                // const u = users.find(value => value.id === selectedUser);
                // console.log('999dfsidf ', u)
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
    }, [selectedUser])
    return (
        <UserContext.Provider value={ {
            current:{setPosts, selectedUser, posts, users, setSelectedUser, }
        }}>
            {props.children}
        </UserContext.Provider>
    )
}