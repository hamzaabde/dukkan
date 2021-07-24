import React from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {Header} from "../components/Header.js";
import {Main} from "../components/Main.js";
import {Footer} from "../components/Footer.js";
import {Product} from "../components/ProductComps.js";
export const ProductPage = ({getProduct, cart}) => {
  const product = getProduct(useParams().id);
  document.title = `Dukkan | ${product ? product.title : "loading"}`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    cartItems: cart.getCart().length
  }), /* @__PURE__ */ React.createElement(Main, null, product && /* @__PURE__ */ React.createElement(Product, {
    product,
    addToCart: cart.addToCart
  })), /* @__PURE__ */ React.createElement(Footer, null));
};
