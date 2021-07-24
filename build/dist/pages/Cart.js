import React from "../../_snowpack/pkg/react.js";
import {Header} from "../components/Header.js";
import {Main} from "../components/Main.js";
import {Footer} from "../components/Footer.js";
import {CartContainer} from "../components/CartComps.js";
export const Cart = ({cart}) => {
  document.title = "Dukkan | Your cart";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    cartItems: cart.getCart().length
  }), /* @__PURE__ */ React.createElement(Main, null, /* @__PURE__ */ React.createElement(CartContainer, {
    cart
  })), /* @__PURE__ */ React.createElement(Footer, null));
};
