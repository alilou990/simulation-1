import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'


export default class Form extends Component {
    constructor(){
        super();
        this.state = {
          img: '',
          name: '',
          price: 0
        }
      }
    
      handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,

        })  
        
      }

      resetInputs = () => {
        this.setState({
            img: '',
            name: '',
            price: 0
        })
      }

      createItem = (event) => {
        const body = {
          img: this.state.img,
          name: this.state.name,
          price: this.state.price
        }
        axios.post('/api/inventory', body)
          .then((response) => {
            this.props.getInventory()
            this.resetInputs()
          })
      }


    render() {
        return (
            <div className='form-container'>
                <label>Image URL:</label>
                <input name="img" onChange={(event) => this.handleOnChange(event)} value={this.state.img}/>
                <label>Product Name:</label>
                <input name="name" onChange={(event) => this.handleOnChange(event)} value={this.state.name}/>
                <label>Price:</label>
                <input name="price" onChange={(event) => this.handleOnChange(event)} value={this.state.price}/>
                <button onClick={this.createItem}>Add to Inventory</button>
                <button onClick={this.resetInputs}>Cancel</button>
            </div>
        )
    }
}
