import React, {Component} from 'react'
import axios from 'axios';
import './Dashboard.css'

//Components
import Product from './Product/Product'


class Dashboard extends Component {
    
    deleteItem = (id) => {
        axios.delete(`/api/inventory/${id}`)
            .then(() => {
                this.props.getInventory()
            })
    }

    render(){
        const mappedInventory = this.props.inventory.map((item, i) => {
            return(
            <Product item={item} key={i} itemImg = {item.img} itemName = {item.name} itemPrice = {item.price} itemId={item.id} deleteItem={this.deleteItem}/>
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

