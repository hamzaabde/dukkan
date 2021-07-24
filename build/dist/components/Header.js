import React from "../../_snowpack/pkg/react.js";
import {Nav} from "./Nav.js";
import {Search} from "./Icons.js";
const Hero = () => /* @__PURE__ */ React.createElement("div", {
  className: "hero"
}, /* @__PURE__ */ React.createElement("div", {
  className: "hero__backdrop"
}, /* @__PURE__ */ React.createElement("div", {
  className: "app__content hero__content"
}, /* @__PURE__ */ React.createElement("h1", {
  className: "hero__heading"
}, "High Quality Products From Well Know Brands All Around The World"), /* @__PURE__ */ React.createElement("form", {
  action: "/products",
  className: "hero__search"
}, /* @__PURE__ */ React.createElement("input", {
  type: "text",
  className: "hero__input",
  name: "search",
  placeholder: "Enter keywords",
  required: true
}), /* @__PURE__ */ React.createElement("button", {
  type: "submit",
  className: "hero__submit"
}, /* @__PURE__ */ React.createElement(Search, {
  color: "#0f0825"
}))))));
export const Header = ({searchBar = true, cartItems}) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement(Nav, {
    searchBar,
    cartItems
  }), !searchBar && /* @__PURE__ */ React.createElement(Hero, null));
};
