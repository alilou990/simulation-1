import React from 'react'

const Product = (props) => {
    return (
        <div>
            <img src={props.itemImg} alt={"item"}/>
            <h1>{props.itemName}</h1>
            <h1>{props.itemPrice}</h1>
            <button onClick={() => props.deleteItem(props.item.id)}>Delete</button>
        </div>
    )
}

export default Product
