import React from 'react';
import { UserItem } from './UserItem'
import { data } from '../../data.js/userData'
const UserList = (props) => {
    console.log(props);
    const reactUserItems = props.userList.map((user, index) => {
        return <UserItem key={index} userName={user.firstName} userEmail={user.email} userBirthday={user.birthDate} userPicture={user.pictures.thumbnail} />
    });

    return (
        <div className="userList clearFix">
            {reactUserItems}
        </div>
    );
}

export { UserList }