import React, { useContext } from "react";

//Components
import Product from "./shared/Product";

//Context
import { ProductsContext } from "./../context/ProductContextProvider";

//styles
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
