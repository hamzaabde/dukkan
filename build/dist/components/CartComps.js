import React from "../../_snowpack/pkg/react.js";
const CartItem = ({item, remove, index}) => /* @__PURE__ */ React.createElement("div", {
  className: "cart-item"
}, /* @__PURE__ */ React.createElement("div", {
  className: "cart-item__image"
}, /* @__PURE__ */ React.createElement("img", {
  src: item.image
})), /* @__PURE__ */ React.createElement("h3", {
  className: "cart-item__name"
}, item.title.substr(0, 34) + "..."), /* @__PURE__ */ React.createElement("strong", {
  className: "cart-item__price"
}, "$", item.price), /* @__PURE__ */ React.createElement("button", {
  className: "cart-item__remove",
  onClick: () => {
    remove(index);
  }
}, "x"));
const CartItems = ({cart}) => /* @__PURE__ */ React.createElement("div", {
  className: "cart-page__items"
}, cart.getCart()[0] && cart.getCart().map((cartItem, i) => /* @__PURE__ */ React.createElement(CartItem, {
  key: i,
  index: i,
  item: cartItem,
  remove: cart.removeFromCart
})));
export const CartInfo = ({cart}) => {
  const items = cart.getCart().length;
  const cartTotal = cart.getCart().reduce((total2, product) => total2 += product.price, 0);
  const shipping = Math.round(cart.getCart().reduce((shipping2, product) => {
    if (product.price <= 10)
      return shipping2 += 0.9;
    if (product.price <= 25)
      return shipping2 += 1.5;
    if (product.price <= 100)
      return shipping2 += 2.5;
    if (product.price <= 300)
      return shipping2 += 10;
    if (product.price <= 600)
      return shipping2 += 30;
    if (product.price <= 1e3)
      return shipping2 += 50;
    return shipping2 += 80;
  }, 0));
  const tax = Math.round(cartTotal / 100 * 10);
  const total = Math.round(cartTotal + shipping + tax);
  return /* @__PURE__ */ React.createElement("div", {
    className: "cart-page__action"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "action-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cart-prop"
  }, /* @__PURE__ */ React.createElement("strong", {
    className: "item__key"
  }, "Items:"), /* @__PURE__ */ React.createElement("strong", {
    className: "item__value"
  }, items)), /* @__PURE__ */ React.createElement("div", {
    className: "cart-prop"
  }, /* @__PURE__ */ React.createElement("strong", {
    className: "item__key"
  }, "Shipping:"), /* @__PURE__ */ React.createElement("strong", {
    className: "item__value"
  }, "$", shipping)), /* @__PURE__ */ React.createElement("div", {
    className: "cart-prop"
  }, /* @__PURE__ */ React.createElement("strong", {
    className: "item__key"
  }, "Tax(VAT):"), /* @__PURE__ */ React.createElement("strong", {
    className: "item__value"
  }, "$", tax)), /* @__PURE__ */ React.createElement("div", {
    className: "cart-prop"
  }, /* @__PURE__ */ React.createElement("strong", {
    className: "item__key"
  }, "Total in cart:"), /* @__PURE__ */ React.createElement("strong", {
    className: "item__value"
  }, "$", cartTotal)), /* @__PURE__ */ React.createElement("div", {
    className: "cart-prop"
  }, /* @__PURE__ */ React.createElement("strong", {
    className: "item__key"
  }, "Tota patable:"), /* @__PURE__ */ React.createElement("strong", {
    className: "item__value"
  }, "$", total))), /* @__PURE__ */ React.createElement("div", {
    className: "actions"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "cart__btn cart__checkout"
  }, "Checkout"), /* @__PURE__ */ React.createElement("button", {
    className: "cart__btn cart__clear",
    onClick: () => {
      cart.clearCart();
    }
  }, "Clear cart")));
};
export const CartContainer = ({cart}) => /* @__PURE__ */ React.createElement("div", {
  className: "cart-page"
}, /* @__PURE__ */ React.createElement("h2", {
  className: "cart-page__heading"
}, "Cart"), /* @__PURE__ */ React.createElement("div", {
  className: "cart-page__content app__content"
}, /* @__PURE__ */ React.createElement(CartInfo, {
  cart
}), /* @__PURE__ */ React.createElement(CartItems, {
  cart
})));
