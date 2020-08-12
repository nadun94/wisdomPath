import React from "react";

const User = (props) => {
    const { name, city, email, onClickX} = props;
    return <div className="user-container" onClick={() => onClickX("hello")}>
    <div className="avatar-container"  >
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