import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            R${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            R${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          Vestibulum tincidunt libero at ex viverra fermentum. Pellentesque ut
          mattis velit. Nam id dui a mi pulvinar feugiat eu id magna.
          
        </div>
        <div className="productdisplay-right-size">
            <h1>Selecione o tamanho</h1>
            <div className="productdisplay-right-sizes">
                <div>P</div>
                <div>M</div>
                <div>G</div>
                <div>XG</div>
                <div>XGG</div>
            </div>
        </div>
        <button>ADICIONAR AO CARRINHO</button>
      </div>
    </div>
  );
};
export default ProductDisplay;
