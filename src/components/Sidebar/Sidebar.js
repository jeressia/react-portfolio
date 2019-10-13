import React, { Component } from 'react';

import bioImg from '../../assets/bio-pic.jpg';

import './Sidebar.scss';

export class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h1 className="sidebar-title">Jeressia Williamson</h1>
        <img src={bioImg} className="bio-pic" alt="Jeressia"/>
        <ul className="main-links">
          <li>About</li>
          <li>Portfolio</li>
          <li>Technologies</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
