import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { useEffect } from 'react';

const Cart = () => {
    useEffect(() => {
        document.title = 'e-fantasias | carrinho';
  }, []);
    return (
        <div>
            <CartItems/>
        </div>
    )
}

export default Cart