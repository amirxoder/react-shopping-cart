import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//get specific products for pass error when refresh page
import { getProduct } from "../services/api";

const ProductsDetails = () => {
  const [productData, setProductData] = useState({});

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      setProductData(await getProduct(id));
    };
    fetchProduct();
  }, []);

  const { image, title, description, price, category } = productData;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category:</span> {category}
        </p>
        <div>
          <span>{price}$</span>
          <Link to={"/products"}>Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
