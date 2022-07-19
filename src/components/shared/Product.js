import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { shorten } from "../../helpers/functions";

const Product = ({ productData: { title, image, price, id } }) => {
  
  return (
    <div>
      <img src={image} style={{ width: "200px" }} alt="product-img" />
      <h3>{shorten(title)}</h3>
      <p>{price}$</p>
      <div>
        <Link to={`/products/${id}`}>Details</Link>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Product;
