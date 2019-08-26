import React from 'react'
import {Link} from 'react-router-dom'

import './Product.css'

const Product = (props) => {
    return (
        <div className="outer-product-container">
        <div className="product-container">
                <img src={props.itemImg} alt={"item"}/>
                <h1>{props.itemName}</h1>
                <h1>${props.itemPrice}</h1>
            <div className='product-button-container'>
                <Link to='/'><button onClick={() => props.deleteItem(props.item.id)}>Delete</button></Link>
                <Link to={`/edit/${props.item.id}`}> <button>Edit</button> </Link>
            </div>
        </div>
        </div>
    )
}

export default Product
