import React from "../../_snowpack/pkg/react.js";
import {RatingView} from "../../_snowpack/pkg/react-simple-star-rating.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
export const Categories = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "categories"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "categories__heading"
  }, "Categories"), /* @__PURE__ */ React.createElement("div", {
    className: "categories__content app__content"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/products/electronics"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/electronics.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "category__desc"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "c__desc--heading"
  }, "Electronics"), /* @__PURE__ */ React.createElement("p", {
    className: "c__desc--para"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum qui provident doloremque, est assumenda?")))), /* @__PURE__ */ React.createElement(Link, {
    to: "/products/jewelery"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/jewelery.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "category__desc"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "c__desc--heading"
  }, "Jewelery"), /* @__PURE__ */ React.createElement("p", {
    className: "c__desc--para"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum qui provident doloremque, est assumenda?")))), /* @__PURE__ */ React.createElement(Link, {
    to: "/products/clothing"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/electronics.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "category__desc"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "c__desc--heading"
  }, "Clothing"), /* @__PURE__ */ React.createElement("p", {
    className: "c__desc--para"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum qui provident doloremque, est assumenda?"))))));
};
export const ProductCard = ({product}) => /* @__PURE__ */ React.createElement(Link, {
  to: `/product/${product.id}`
}, /* @__PURE__ */ React.createElement("div", {
  className: "product"
}, /* @__PURE__ */ React.createElement("div", {
  className: "product__image"
}, /* @__PURE__ */ React.createElement("img", {
  src: product.image
})), /* @__PURE__ */ React.createElement("div", {
  className: "product__desc"
}, /* @__PURE__ */ React.createElement("h3", {
  className: "desc__name"
}, product.title.substr(0, 50)), /* @__PURE__ */ React.createElement("div", {
  className: "product__rating"
}, /* @__PURE__ */ React.createElement(RatingView, {
  ratingValue: product.rating
})), /* @__PURE__ */ React.createElement("div", {
  className: "product__prices"
}, /* @__PURE__ */ React.createElement("strong", {
  className: "price__current"
}, "$", product.price), /* @__PURE__ */ React.createElement("del", {
  className: "price__original"
}, "$", product.originalPrice)))));
export const RecentProducts = ({products}) => /* @__PURE__ */ React.createElement("div", {
  className: "recent__content app__content"
}, /* @__PURE__ */ React.createElement("h2", {
  className: "recent-heading"
}, "Recently added"), /* @__PURE__ */ React.createElement("div", {
  className: "recent__info"
}, products.map((product) => /* @__PURE__ */ React.createElement(ProductCard, {
  key: product.id,
  product
}))));
export const ProductGrid = ({products, title}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "products"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "products__content app__contents"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "products__heading"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "products__listing"
  }, products.map((product) => /* @__PURE__ */ React.createElement(ProductCard, {
    key: product.id,
    product
  })))));
};
export const Product = ({product, addToCart}) => /* @__PURE__ */ React.createElement("div", {
  className: "product-page"
}, /* @__PURE__ */ React.createElement("div", {
  className: "product-page__content"
}, /* @__PURE__ */ React.createElement("div", {
  className: "product-page__image"
}, /* @__PURE__ */ React.createElement("img", {
  src: product.image
})), /* @__PURE__ */ React.createElement("div", {
  className: "product-page__info"
}, /* @__PURE__ */ React.createElement("h2", {
  className: "product-page__heading"
}, product.title), /* @__PURE__ */ React.createElement("p", {
  className: "product-page__desc"
}, product.description), /* @__PURE__ */ React.createElement("div", {
  className: "product-page__rating"
}, /* @__PURE__ */ React.createElement("h3", null, "Rating"), /* @__PURE__ */ React.createElement(RatingView, {
  className: "rating",
  ratingValue: product.rating
})), /* @__PURE__ */ React.createElement("div", {
  className: "product-page__price"
}, /* @__PURE__ */ React.createElement("strong", {
  className: "price__current"
}, "$", product.price), /* @__PURE__ */ React.createElement("del", {
  className: "price__original"
}, "$", product.originalPrice)), /* @__PURE__ */ React.createElement("div", {
  className: "product-page__actions"
}, /* @__PURE__ */ React.createElement("button", {
  className: "product-page__btn btn--buy"
}, "Buy"), /* @__PURE__ */ React.createElement("button", {
  className: "product-page__btn btn--cart",
  onClick: () => {
    addToCart(product);
  }
}, "Add to cart")))));
