import React, { Component } from 'react';

import { FormComponent } from './form.component';

import logo from './SystemCenter_logo.jpg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="title">
            <h1 >SNAP Triage Hub</h1>
          </div>
        </div>
        <div className="App-body"> 
          <FormComponent/>
        </div>
      </div>
    );
  }
}

export default App;
