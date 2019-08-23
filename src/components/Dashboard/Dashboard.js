import React, {Component} from 'react'
import './Dashboard.css'

//Components
import Product from './Product/Product'


class Dashboard extends Component {
    // constructor(){
    //     super();
    // }
    render(){
        const mappedInventory = this.props.inventory.map((item, i) => {
            return(
            <Product item={item} key={i} itemImg = {item.img} itemName = {item.name} itemPrice = {item.price} itemId={item.id}/>
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

