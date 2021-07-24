import React, {useState} from "../../_snowpack/pkg/react.js";
import {ChevronDown} from "./Icons.js";
import {Search} from "./Icons.js";
import {CartIcon} from "./Icons.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import "../../styles/nav.css.proxy.js";
const Cart = ({cartItems}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "cart"
  }, /* @__PURE__ */ React.createElement(CartIcon, {
    color: "#f7f5ff"
  }), cartItems ? /* @__PURE__ */ React.createElement("div", {
    className: "cart-items-number"
  }, cartItems) : null);
};
const UserDropdown = ({avatar}) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "user-menu",
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/products"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "user__name"
  }, /* @__PURE__ */ React.createElement("span", null, "All Products"))));
};
export const Select = ({options: options2}) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleDropdown = () => {
    setActive(!active);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `select ${active && "active"}`,
    onClick: handleDropdown
  }, /* @__PURE__ */ React.createElement("div", {
    className: "select__selected"
  }, selected || options2[0], /* @__PURE__ */ React.createElement(ChevronDown, {
    color: active ? "#11082b" : "#f7f5ff"
  })), /* @__PURE__ */ React.createElement("div", {
    className: `select__dropdown ${active && "active active__dropdown"}`
  }, options2.map((option) => /* @__PURE__ */ React.createElement("div", {
    className: "option",
    key: option,
    onClick: () => {
      console.log("hello");
      setSelected(option);
    }
  }, option))));
};
const options = ["All Products", "Electronics", "Jewelery", "Clothes"];
export const Nav = ({searchBar = true, cartItems}) => /* @__PURE__ */ React.createElement("nav", {
  className: "nav"
}, /* @__PURE__ */ React.createElement("div", {
  className: "app__content nav__content"
}, /* @__PURE__ */ React.createElement(Link, {
  to: "/"
}, /* @__PURE__ */ React.createElement("div", {
  className: "logo"
}, /* @__PURE__ */ React.createElement("h1", null, "Dukkan"))), searchBar && /* @__PURE__ */ React.createElement("div", {
  className: "search-box"
}, /* @__PURE__ */ React.createElement(Select, {
  options
}), /* @__PURE__ */ React.createElement("form", {
  action: "/products",
  className: "search-box-form",
  autoComplete: "off"
}, /* @__PURE__ */ React.createElement("input", {
  type: "text",
  className: "search-input",
  name: "search",
  placeholder: "Enter keywords",
  required: true
}), /* @__PURE__ */ React.createElement("button", {
  className: "search-btn",
  type: "submit"
}, /* @__PURE__ */ React.createElement(Search, {
  color: "hsl(255, 60%, 50%)",
  width: 16
})))), /* @__PURE__ */ React.createElement("div", {
  className: "user"
}, /* @__PURE__ */ React.createElement(UserDropdown, {
  avatar: "/icons/user.svg"
}), /* @__PURE__ */ React.createElement(Link, {
  to: "/cart"
}, /* @__PURE__ */ React.createElement(Cart, {
  cartItems
})))));
