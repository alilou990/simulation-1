import React, { Component } from 'react';
import axios from 'axios';

//stylesheets
import 'reset-css'
import './App.css'

//Components
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
  }

  

  componentDidMount() {
       axios.get('/api/inventory').then((response) => {
        console.log(response.data)
        this.setState({
          inventory: response.data
        })
      })
      .catch(err => {
        console.log(err)
    })
    };

  

  render(){
    return (
      <div className='main-container'>
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form inventory={this.componentDidMount}/>
      </div>
    )
  }
}

