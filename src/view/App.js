import React, { Component } from 'react';
// import logo from './logo.svg';
import { data } from '../data.js/userData'
// import './App.css';
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { UserList } from './users/UsersList';
import { fetchUsers } from '../services/UserService';
// import { mappedUsers } from '../data.js/userData'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      gridLayout: false
    }
  }
  gridOnClick = () => {

  }

  componentDidMount() {
    fetchUsers()
      .then((niz) =>
        this.setState({ userList: niz }));

  }


  render() {
    return (
      <div>
        <Header appTitle="React Users" />
        <hr />
        <input className="btn" type="button" value="Change view mode" onClick={this.onChangeClick} />
        <UserList userList={this.state.userList} />
        <Footer footerText="&copy; Copyright" />
      </div>
    );
  }

};



export default App;
