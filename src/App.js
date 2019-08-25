import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

//stylesheets
import 'reset-css'
import './App.css'

//Components
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

export default class App extends Component {
  



  

  render(){
    return (
      <div className='main-container'>
        <Header />
        <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form}/>
        <Route path='/edit/:id' component={Form} />
        </Switch>
      </div>
    )
  }
}

