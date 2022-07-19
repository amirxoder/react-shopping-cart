import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//get specific products for pass error when refresh page
import { getProduct } from "../services/api";

//styles
import styles from "./ProductDetails.module.css";

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
    <div className={styles.productDetails__wrapper}>
      <div className={styles.productDetails__container}>
        <img src={image} alt="product" className={styles.img} />
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <p className={styles.category}>
            <span>Category:</span> {category}
          </p>
          <div>
            <span>{price}$</span>
            <Link className={styles.details__btn} to={"/products"}>
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
