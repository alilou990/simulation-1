import React, {Component} from 'react'
import axios from 'axios';
import './Dashboard.css'

//Components
import Product from './Product/Product'


class Dashboard extends Component {
    constructor(){
        super();
        this.state ={
            inventory: []
        }
    }

    componentDidMount() {
        this.getInventory();
        };
    
        getInventory = (req, res) => {
          axios.get('/api/inventory').then((response) => {
          console.log(response.data)
          this.setState({
            inventory: response.data
          })
        })
        .catch(err => {
          console.log(err)
      })
    }
    
    deleteItem = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const mappedInventory = this.state.inventory.map((item, i) => {
            return(
            <Product item={item} key={item.id} itemImg = {item.img} itemName = {item.name} itemPrice = {item.price} itemId={item.id} deleteItem={this.deleteItem} />
            )
          })
    return (
       <div>
           <h3>Dashboard</h3>
           {mappedInventory}
       </div>
    )
    }
}

export default Dashboard

