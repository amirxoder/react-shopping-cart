import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

//heloper functions
import { isInCart, quntityCounter, shorten } from "../../helpers/functions";

//icon
import { BsFillTrashFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiPlus, HiMinusSm } from "react-icons/hi";

//style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  const { title, image, price, id } = productData;

  return (
    <div className={styles.cart__container}>
      <img src={image} className={styles.img} alt="product-img" />
      <div className={styles.desc__container}>
        <h3>{shorten(title)}</h3>
        <p className={styles.price}>{price}$</p>
        <div className={styles.buttons__wrapper}>
          <Link to={`/products/${id}`} className={styles.details__btn}>
            Details
          </Link>
          <div className={styles.toggle__btn_wrapper}>
            {isInCart(state, id) ? (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "INCREASE_ITEM", payload: productData })
                }
              >
                <HiPlus />
              </button>
            ) : (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                <FaCartPlus />
              </button>
            )}
            {quntityCounter(state, id) > 1 && (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "DECREASE_ITEM", payload: productData })
                }
              >
                <HiMinusSm />
              </button>
            )}
            {quntityCounter(state, id) === 1 && (
              <button
                className={styles.toggle__icon}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <BsFillTrashFill />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
