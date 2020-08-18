import React from 'react';
import {
    CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './UserClass.styles.css';

const UserClass = ({ user }) => {
    return (
        <div className="column">
            <div className="card">
                <CardImg top src={user.avatar} alt={user.first_name} />
                <CardBody>
                    <CardTitle>{`${user.first_name} ${user.last_name}`}</CardTitle>
                    <CardSubtitle>{user.email}</CardSubtitle>
                </CardBody>
            </div>
        </div>
    )
}

export default UserClass;
