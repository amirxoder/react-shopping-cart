import React, { useContext } from "react";

//Context
import { ProductsContext } from "./../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default Store;
