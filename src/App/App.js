import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MySidebar from '../components/Sidebar/Sidebar';
import AboutMe from '../components/About/About';

import './App.scss';

export class App extends React.Component {
  render() {
    return (
    <div className="App">
      <MySidebar/>
      <AboutMe />
    </div>
    );
  }
}

export default App;
