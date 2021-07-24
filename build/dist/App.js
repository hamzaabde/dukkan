import React, {useState} from "../_snowpack/pkg/react.js";
import {BrowserRouter as Router, Route, Switch} from "../_snowpack/pkg/react-router-dom.js";
import {useProducts} from "./hooks/useProducts.js";
import {useCart} from "./hooks/useCart.js";
import {Home} from "./pages/Home.js";
import {Products} from "./pages/Products.js";
import {Cart} from "./pages/Cart.js";
import {ProductPage} from "./pages/Product.js";
import "../styles/app.css.proxy.js";
const App = () => {
  const {getAllProducts, getProduct, search, categories} = useProducts();
  const cart = useCart();
  console.log(cart.getCart());
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", {
    className: "app"
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, {
    products: getAllProducts(),
    cart
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "/product/:id"
  }, /* @__PURE__ */ React.createElement(ProductPage, {
    getProduct,
    cart
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "/products"
  }, /* @__PURE__ */ React.createElement(Products, {
    products: getAllProducts(),
    search,
    categories,
    cart
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "/cart"
  }, /* @__PURE__ */ React.createElement(Cart, {
    cart
  })))));
};
export default App;
