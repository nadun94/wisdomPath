import React from "react";

const User = (props) => {
    const { first_name, last_name, email, avatar} = props;
    return <div className="user-container">
    <img className="avatar-container" src={avatar}/>
        <div className="description">
            <span className="name">{`${first_name} ${last_name}`}</span>
            <div className={'email'}>{email}</div>
        </div>
    </div>
}
export default User;