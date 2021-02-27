import React from 'react';
import Product from '../Product/Product';

const ProductList = ({products, cartHandlr}) => {
    return (
        <div className="product-list">
            {
                products.map( product => <Product key = {product.id} product = {product} cartHandlr ={cartHandlr} />)
            }
        </div>
    );
};

export default ProductList;