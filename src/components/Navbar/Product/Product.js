import React from 'react';

const Product = (props) => {
    const {id, title, brand, price, image_url} = props.product;
    const cartHandlr = props.cartHandlr
    return (
        <div className='product'>
           <img src={image_url} alt=""/>
           <div className="title">
               <span> {title} </span>
               <span> {brand} </span>
           </div>

           <div className="actions">
               <span>$ {price} </span>
               <button onClick ={ () => cartHandlr(id)} >Add Cart</button>
           </div>
        </div>
    );
};

export default Product;