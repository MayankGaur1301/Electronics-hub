import React from 'react';
import './Products.css';

const Products = ({ productItems, handleAddProduct }) => {
    return (
        <div className='products'>
            {
                productItems.map((productItems) => (
                    <div className='card'>
                        <div>
                            <img className='product-image' src={productItems.image} alt={productItems.name} />
                        </div>
                        <div>
                            <h3 className='product-name'>{productItems.name}</h3>
                        </div>
                        <div>
                            <h3 className='product-price'>₹{productItems.price}/-</h3>
                        </div>
                        <div>
                            <button className='product-add-button' onClick={() => handleAddProduct(productItems)}>Add To Cart</button>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default Products;
