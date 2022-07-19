import React, { useContext } from "react";

//styles
import styles from "./Cart.module.css";

//functions
import { shorten } from "../../helpers/functions";

//context
import { CartContext } from "../../context/CartContextProvider";

//icons
import { HiPlus, HiMinusSm } from "react-icons/hi";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, price, quntity } = props.data;

  return (
    <div className={styles.cart__product}>
      <img className={styles.image} src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quntity}</span>
      </div>
      <div className={styles.toggle__btn_wrapper}>
        {quntity > 1 ? (
          <button
            className={styles.toggle__icon}
            onClick={() =>
              dispatch({ type: "DECREASE_ITEM", payload: props.data })
            }
          >
            <HiMinusSm />
          </button>
        ) : (
          <button
            className={styles.toggle__icon}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <BsFillTrashFill />
          </button>
        )}
        <button
          className={styles.toggle__icon}
          onClick={() =>
            dispatch({ type: "INCREASE_ITEM", payload: props.data })
          }
        >
          <HiPlus />
        </button>
      </div>
    </div>
  );
};

export default Cart;
