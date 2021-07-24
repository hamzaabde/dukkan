import React from "../../_snowpack/pkg/react.js";
import {Header} from "../components/Header.js";
import {Main} from "../components/Main.js";
import {Footer} from "../components/Footer.js";
import {ProductGrid} from "../components/ProductComps.js";
import {useParams, useLocation, useRouteMatch} from "../../_snowpack/pkg/react-router-dom.js";
export const Products = ({products, search, categories, cart}) => {
  const location = useLocation();
  const match = useRouteMatch("/products/:category");
  const {search: params} = location;
  console.log(location);
  document.title = "Dukkan | Check out our products";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    cartItems: cart.getCart().length
  }), /* @__PURE__ */ React.createElement(Main, null, params ? /* @__PURE__ */ React.createElement(ProductGrid, {
    products: search(params.match(/(?<=\?search=)[\w\d\+\b]+/i)[0]),
    title: "Search matched: " + params.match(/(?<=\?search=)[\w\d\+\b]+/i)[0]
  }) : match !== null ? /* @__PURE__ */ React.createElement(ProductGrid, {
    products: categories(match.params.category),
    title: "Category: " + match.params.category
  }) : /* @__PURE__ */ React.createElement(ProductGrid, {
    products,
    title: "All Products"
  })), /* @__PURE__ */ React.createElement(Footer, null));
};
