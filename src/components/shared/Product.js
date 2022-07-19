import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

//heloper functions
import { isInCart, quntityCounter, shorten } from "../../helpers/functions";

//icon
import { BsFillTrashFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiPlus, HiMinusSm } from "react-icons/hi";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  const { title, image, price, id } = productData;

  return (
    <div>
      <img src={image} style={{ width: "200px" }} alt="product-img" />
      <h3>{shorten(title)}</h3>
      <p>{price}$</p>
      <div>
        <Link to={`/products/${id}`}>Details</Link>
        {isInCart(state, id) ? (
          <button
            onClick={() =>
              dispatch({ type: "INCREASE_ITEM", payload: productData })
            }
          >
            <HiPlus />
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            <FaCartPlus />
          </button>
        )}
        {quntityCounter(state, id) > 1 && (
          <button
            onClick={() =>
              dispatch({ type: "DECREASE_ITEM", payload: productData })
            }
          >
            <HiMinusSm />
          </button>
        )}
        {quntityCounter(state, id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            <BsFillTrashFill />
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
