import React, { Component } from 'react';
// import logo from './logo.svg';
import { data } from '../data.js/userData'
// import './App.css';
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { UserList } from './users/UsersList';
import { mappedUsers } from '../data.js/userData'

const App = () => {
  return (
    <div>
      <Header appTitle="React Users" />
      <hr />
      <UserList userList={mappedUsers} />
      <Footer footerText="&copy;2018 Copyright Bit" />
    </div>
  );
};



export default App;
