import React from 'react';
import Products from '../products/Products';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../signup/SignUp';
import Cart from '../cart/Cart';

const Routess = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                <Products 
                productItems={productItems} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct} 
                />} 
                exact />

                <Route path='/signup' element={<SignUp />} exact />

                <Route path='/cart' element={
                <Cart 
                cartItems={cartItems} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance} 
                />} 
                exact />
            </Routes>

        </div>
    );
};

export default Routess;
