import React, {useContext} from "react";
import {UserContext} from "./UserContext";

const User = (props) => {
    const { data} = props;
    const { selectedUser, setSelectedUser } = useContext(UserContext).current;
    const { name, email, city, id } = data;
    return <div className={`user-container ${ selectedUser === id ? ' selected' : ''}`} onClick={() => setSelectedUser(id)}>
    <div className="avatar-container "  >
       <span className="avatarText">{`${name[0]}${name.split(' ')[1][0]}`}</span>
    </div>
        <div className="description">
            <span className="name">{name}</span>
            <span className="address">{city}</span>
            <div className={'email'}>{email}</div>
        </div>
    </div>
}
export default User;