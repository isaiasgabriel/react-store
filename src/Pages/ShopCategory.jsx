import React from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import all_product from "../Components/Assets/all_product";
import Item from "../Components/Item/Item";
import { useEffect } from "react";

const ShopCategory = (props) => {

  useEffect(() => {
    if(props.category==='men'){
      document.title = `e-fantasias | masculino`;
    } else if (props.category==='women'){
      document.title = 'e-fantasias | feminino';
    } else if (props.category==='kid'){
      document.title = 'e-fantasias | kids';
    } else {
      document.title = 'e-fantasias';
    }
  }, [props.category]);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de 36 produtos
        </p>
        <div className="shopcategory-sort">
          Organizar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Carregar mais
      </div>
    </div>
  );
};

export default ShopCategory;
