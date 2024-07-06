import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";
import Pages from "./Component/pages/Pages";
import Cart from "./Cart/Cart";
import Footer from "./Common/Footer/Footer";

function App() {
  // const [CartItem, setCartItem] = useState([]);

  // to add data in cart and doesn't add more than one number of card in the page more than once //
  // const addToCart = (product) => {
  //   const existingProduct = CartItem.find((item) => item.id === product.id);

  //   if (existingProduct) {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...existingProduct, qty: existingProduct.qty + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItem([...CartItem, { ...product, qty: 1 }]);
  //   }
  // };

  // const decreaseQty = (product) => {
  //   const existingProduct = CartItem.find((item) => item.id === product.id);
  //   if (existingProduct.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id));
  //   } else {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...existingProduct, qty: existingProduct.qty - 1 }
  //           : item
  //       )
  //     );
  //   }
  // };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Pages
            // addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
            // decreaseQty={decreaseQty}
            // CartItem={CartItem}
            // addToCart={addToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
