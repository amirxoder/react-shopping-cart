import React, { useContext } from "react";

//components
import Cart from "./shared/Cart";

//context
import { CartContext } from "./../context/CartContextProvider";
import { Link } from "react-router-dom";

//style
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          {state.selectedItems.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>
        {state.itemsCounter > 0 && (
          <div className={styles.shopping__price}>
            <p className={styles.total__items}>
              <span>Total Items: </span>
              {state.itemsCounter}
            </p>
            <p className={styles.total__price}>
              <span>Total Payments: </span>
              {state.total} $
            </p>
            <div>
              <button
                className={styles.check__btn}
                onClick={() => dispatch({ type: "CHECKOUT" })}
              >
                Check Out
              </button>
              <button
                className={styles.check__btn}
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear
              </button>
            </div>
          </div>
        )}
        {state.isCheckout && (
          <div>
            <h3 style={{ color: "green" }}>Check Out Successfuly</h3>
            <Link to={"/product"}>Buy more</Link>
          </div>
        )}
        {!state.isCheckout && state.itemsCounter === 0 && (
          <div>
            <h3>Want to bye?</h3>
            <Link to={"/products"}>Go to shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
