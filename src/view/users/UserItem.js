
import React from 'react';

const UserItem = (props) => {
    console.log(props);

    return (
        <div className="user clearFix">
            <div className="image">
                <img src={props.userPicture} />
            </div>
            <div className="info">
                <p>Name: {props.userName}</p>
                <p>Email: {props.userEmail}</p>
                <p>Date: {props.userBirthday}</p>
            </div>
        </div>
    );
}

export { UserItem };