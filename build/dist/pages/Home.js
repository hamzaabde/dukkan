import React from "../../_snowpack/pkg/react.js";
import {Header} from "../components/Header.js";
import {Main} from "../components/Main.js";
import {Footer} from "../components/Footer.js";
import {Categories, RecentProducts} from "../components/ProductComps.js";
import "../../styles/header.css.proxy.js";
import "../../styles/main.css.proxy.js";
import "../../styles/footer.css.proxy.js";
export const Home = ({products, cart}) => {
  document.title = "Dukkan | Home";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    searchBar: false,
    cartItems: cart.getCart().length
  }), /* @__PURE__ */ React.createElement(Main, null, /* @__PURE__ */ React.createElement(Categories, null), products && /* @__PURE__ */ React.createElement(RecentProducts, {
    products: products.slice(0, 3)
  })), /* @__PURE__ */ React.createElement(Footer, null));
};
