import React, { Component } from 'react';
// import axios from 'axios';

//Components
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>App</h3>
        <Dashboard />
        <Form />
      </div>
    )
  }
}

