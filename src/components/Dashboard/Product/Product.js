import React from 'react'
import {Link} from 'react-router-dom'

const Product = (props) => {
    return (
        <div>
            <img src={props.itemImg} alt={"item"}/>
            <h1>{props.itemName}</h1>
            <h1>${props.itemPrice}</h1>
            <Link to='/'><button onClick={() => props.deleteItem(props.item.id)}>Delete</button></Link>
            <Link to={`/edit/${props.item.id}`}> <button>Edit</button> </Link>
        </div>
    )
}

export default Product
