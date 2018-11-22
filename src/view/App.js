import React, { Component } from 'react';
// import logo from './logo.svg';
import { data } from '../data.js/userData'
// import './App.css';
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { UserList } from './users/UsersList';
import { mappedUsers } from '../data.js/userData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'My App Title onClick',
      userList: []
    }
  }
  onChangeClick = (event) => {
    const reactUserItems =
      this.setState({ reactUserItems })
  }

  render() {
    return (
      <div>
        <Header appTitle={this.state.appTitle} />
        <input type='button'
        <hr />
        <UserList userList={mappedUsers} />
        <Footer footerText="&copy;2018 Copyright Bit" />
      </div >
    );
  }


};



export default App;
