import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Form.css'


export default class Form extends Component {
    constructor(){
        super();
        this.state = {
          inventory: [],
          img: '',
          name: '',
          price: 0,
          edit: false
        }
      }

      componentDidMount(){
        let {id} = this.props.match.params
        if (id){
          axios.get(`/api/inventory/${id}`)
            .then(res => {
              this.setState({
                inventory: res.data,
                edit: true
              })
            })
        }
        
      }

      componentDidUpdate(prevProps){
        if(this.props.match.path !== prevProps.match.path){
          this.setState({
            img: '',
            price: 0,
            name: ''
          })
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
            id: null,
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
          .catch(err => {
            console.log(err)
        })
      }

      updateItem = (id) => {
        const body = {
          img: this.state.img,
          name: this.state.name,
          price: this.state.price
        }
        axios.put(`/api/inventory/${id}`, body)
          .catch(err => {
            console.log(err)
      })
      }

     


    render() {
        return (
           <div className='large-form-container'>
              <div className='form-container'>
                <label>Image URL:</label>
                <input name="img" onChange={(event) => this.handleOnChange(event)} value={this.state.img}/>
                <label>Product Name:</label>
                <input name="name" onChange={(event) => this.handleOnChange(event)} value={this.state.name}/>
                <label>Price:</label>
                <input name="price" onChange={(event) => this.handleOnChange(event)} value={this.state.price}/>
                
                <div className="form-buttons">
                <Link to='/'><button onClick={this.resetInputs}>Cancel</button></Link>
                  {!this.state.edit
                  ? <Link to='/'><button onClick={this.createItem}>Add to Inventory</button></Link>
                  : <Link to='/'><button onClick={()=> this.updateItem(this.props.match.params.id)}>Save Changes</button></Link>
                  }
                </div>
            </div>
            </div>
        )
    }
}
