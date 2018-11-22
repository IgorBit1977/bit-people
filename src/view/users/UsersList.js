import React from 'react';
import { UserItem } from './UserItem';
import { hiddingEmail } from './UserItem';
import { DATA_Api } from '../../shared/constants'
import './userList.css';


const UserList = (props) => {
    // console.log(props);
    const reactUserItems = props.userList.map((user, index) => {
        return <UserItem key={index} userName={user.firstName} userEmail={user.email} userBirthday={user.birthDate} userPicture={user.picture.large} />
    });

    return (
        <div className="userList clearFix">
            {reactUserItems}

        </div>
    );
}

export { UserList }