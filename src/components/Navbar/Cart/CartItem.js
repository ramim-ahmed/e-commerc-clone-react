import React from 'react';

const CartItem = (props) => {
    const {id, title, price, removeItem} = props.items;
    return (
        <div className='cart-item'>
            <button onClick = { () => removeItem(id)} >X</button>
            <div className="itemInfo">
                <span>{title}</span>
                <span>${price} </span>
            </div>
        </div>
    );
};

export default CartItem;