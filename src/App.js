import React from "react";
import "./App.css";

//Components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";

//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

//Router
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/*" element={<Navigate to="/products " />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
