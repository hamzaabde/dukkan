import React from 'react'

const CartItem = ({ item, remove, index }) => (
    <div className="cart-item">
        <div className="cart-item__image">
            <img src={item.image} />
        </div>
        <h3 className="cart-item__name">{item.title.substr(0, 34) + '...'}</h3>
        <strong className="cart-item__price">${item.price}</strong>
        <button
            className="cart-item__remove"
            onClick={() => {
                remove(index)
            }}
        >
            x
        </button>
    </div>
)

const CartItems = ({ cart }) => (
    <div className="cart-page__items">
        {cart.getCart()[0] &&
            cart
                .getCart()
                .map((cartItem, i) => (
                    <CartItem
                        key={i}
                        index={i}
                        item={cartItem}
                        remove={cart.removeFromCart}
                    />
                ))}
    </div>
)

export const CartInfo = ({ cart }) => {
    const items = cart.getCart().length
    const cartTotal = cart
        .getCart()
        .reduce((total, product) => (total += product.price), 0)

    const shipping = Math.round(
        cart.getCart().reduce((shipping, product) => {
            if (product.price <= 10) return (shipping += 0.9)
            if (product.price <= 25) return (shipping += 1.5)
            if (product.price <= 100) return (shipping += 2.5)
            if (product.price <= 300) return (shipping += 10)
            if (product.price <= 600) return (shipping += 30)
            if (product.price <= 1000) return (shipping += 50)
            return (shipping += 80)
        }, 0)
    )
    const tax = Math.round((cartTotal / 100) * 10)

    const total = Math.round(cartTotal + shipping + tax)

    return (
        <div className="cart-page__action">
            <div className="action-content">
                <div className="cart-prop">
                    <strong className="item__key">Items:</strong>
                    <strong className="item__value">{items}</strong>
                </div>
                <div className="cart-prop">
                    <strong className="item__key">Shipping:</strong>
                    <strong className="item__value">${shipping}</strong>
                </div>
                <div className="cart-prop">
                    <strong className="item__key">Tax(VAT):</strong>
                    <strong className="item__value">${tax}</strong>
                </div>
                <div className="cart-prop">
                    <strong className="item__key">Total in cart:</strong>
                    <strong className="item__value">${cartTotal}</strong>
                </div>
                <div className="cart-prop">
                    <strong className="item__key">Tota patable:</strong>
                    <strong className="item__value">${total}</strong>
                </div>
            </div>
            <div className="actions">
                <button className="cart__btn cart__checkout">Checkout</button>
                <button
                    className="cart__btn cart__clear"
                    onClick={() => {
                        cart.clearCart()
                    }}
                >
                    Clear cart
                </button>
            </div>
        </div>
    )
}

export const CartContainer = ({ cart }) => (
    <div className="cart-page">
        <h2 className="cart-page__heading">Cart</h2>
        <div className="cart-page__content app__content">
            <CartInfo cart={cart} />
            <CartItems cart={cart} />
        </div>
    </div>
)
