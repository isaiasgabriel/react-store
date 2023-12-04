import React from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import all_product from "../Assets/all_product";

const CartItems = () => {
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Produtos</p>
        <p>Título</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (e.id === 37) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">2</button>
                <p>TOTAL : R${e.new_price * 2}</p>
                <img className="cartitems-remove-icon" src={remove_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <button className="checkout">Checkout</button>
    </div>
  );
};

export default CartItems;
