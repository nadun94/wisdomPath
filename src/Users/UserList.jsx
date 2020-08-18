import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./UserContext";
import { Post } from "./Post";

export const UserList = (val) => {
    const { users, posts, selectedUserName } = useContext(UserContext).current;

    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="user-list-container">
            {users.map((val, index) => {
                return <User data={val} />
            }
            )}
        </div>
        <div className="post-list-container">
            {<h2>Posted by selected user : {selectedUserName} </h2>}
            {posts.map((val, index) => {
                return <Post data={val} />
            }
            )}
        </div>

    </div>
}