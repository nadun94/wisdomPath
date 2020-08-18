import React from "react";

export const Post = (props) => {
    const { title, body, id } = props.data;
    return <div className="post-container">
        <div className="description" key={id}>
            <span className="name">{title}</span>
            <span className="address">{body}</span>
        </div>
    </div>
}