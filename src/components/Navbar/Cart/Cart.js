import React from 'react';
import CartItem from './CartItem';
const Cart = ({cartItems, removeItem}) => {
    const Total = cartItems.reduce( (sum, itemPrice) => sum + itemPrice.price,0)
    return (
        <div className="cart">
            <h2 style = {{textAlign : 'center'}}>Cart Summary</h2>
           <div className="cart-items">
           {
                cartItems.map( item => <CartItem items = {item} removeItem = {removeItem}  />)
            }
           </div>

           <div className="totalInfo">
                <span> <h4>Grand Total</h4></span>
                <span> <h4>${Total}</h4> </span>
            </div>
        </div>
    );
};

export default Cart;