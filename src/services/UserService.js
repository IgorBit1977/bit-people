import { DATA_Api } from "../shared/constants";
import React from 'react';
import { User } from '../entities/User';
// import './userData.css';

const fetchUsers = () => {

    return fetch(DATA_Api)
        .then(response => {
            return response.json();
        })
        .then(result => {
            const niz = result.results;
            // console.log(niz);
            return niz;
        })

}

export { fetchUsers };