import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

const Item = (props) => {
  const setTitle = () => {
    document.title = props.name; 
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={setTitle}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
          R${props.new_price}
        </div>
        <div className="item-prices-old">
          R${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
