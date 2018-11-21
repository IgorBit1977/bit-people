import React, { Component } from 'react';
// import logo from './logo.svg';
import { data } from '../data.js/userData'
import './App.css';
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { UserList } from './users/UsersList';
import { mappedUsers } from '../data.js/userData'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
const App = () => {
  return (
    <div>
      <Header appTitle="React Users" />
      <hr />
      <UserList userList={mappedUsers} />
      <Footer footerText="&copy;2018Copyright BIT" />
    </div>
  );
};


// const rootElement = document.querySelector('.root');
// ReactDOM.render(<App />, rootElement);

export default App;
