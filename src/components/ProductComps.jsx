import React from 'react'
import { RatingView } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'

export const Categories = () => {
    return (
        <div className="categories">
            <h2 className="categories__heading">Categories</h2>
            <div className="categories__content app__content">
                <Link to="/products/electronics">
                    <div className="category">
                        <div className="category__image">
                            <img src="/images/electronics.png" />
                        </div>
                        <div className="category__desc">
                            <h3 className="c__desc--heading">Electronics</h3>
                            <p className="c__desc--para">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor rerum qui provident
                                doloremque, est assumenda?
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/products/jewelery">
                    <div className="category">
                        <div className="category__image">
                            <img src="/images/jewelery.png" />
                        </div>
                        <div className="category__desc">
                            <h3 className="c__desc--heading">Jewelery</h3>
                            <p className="c__desc--para">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor rerum qui provident
                                doloremque, est assumenda?
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/products/clothing">
                    <div className="category">
                        <div className="category__image">
                            <img src="/images/electronics.png" />
                        </div>
                        <div className="category__desc">
                            <h3 className="c__desc--heading">Clothing</h3>
                            <p className="c__desc--para">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor rerum qui provident
                                doloremque, est assumenda?
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export const ProductCard = ({ product }) => (
    <Link to={`/product/${product.id}`}>
        <div className="product">
            <div className="product__image">
                <img src={product.image} />
            </div>
            <div className="product__desc">
                <h3 className="desc__name">{product.title.substr(0, 50)}</h3>
                <div className="product__rating">
                    <RatingView ratingValue={product.rating} />
                </div>
                <div className="product__prices">
                    <strong className="price__current">${product.price}</strong>
                    <del className="price__original">
                        ${product.originalPrice}
                    </del>
                </div>
            </div>
        </div>
    </Link>
)

export const RecentProducts = ({ products }) => (
    <div className="recent__content app__content">
        <h2 className="recent-heading">Recently added</h2>
        <div className="recent__info">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
)

export const ProductGrid = ({ products, title }) => {

    return (
        <div className="products">
            <div className="products__content app__contents">
                <h2 className="products__heading">{title}</h2>
                <div className="products__listing">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Product = ({ product, addToCart }) => (
    <div className="product-page">
        <div className="product-page__content">
            <div className="product-page__image">
                <img src={product.image} />
            </div>
            <div className="product-page__info">
                <h2 className="product-page__heading">{product.title}</h2>
                <p className="product-page__desc">{product.description}</p>
                <div className="product-page__rating">
                    <h3>Rating</h3>
                    <RatingView
                        className="rating"
                        ratingValue={product.rating}
                    />
                </div>
                <div className="product-page__price">
                    <strong className="price__current">${product.price}</strong>
                    <del className="price__original">
                        ${product.originalPrice}
                    </del>
                </div>
                <div className="product-page__actions">
                    <button className="product-page__btn btn--buy">Buy</button>
                    <button
                        className="product-page__btn btn--cart"
                        onClick={() => {
                            addToCart(product)
                        }}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
)
