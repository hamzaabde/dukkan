import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// hooks
import { useProducts } from './hooks/useProducts'
import { useCart } from './hooks/useCart'

// pages
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { ProductPage } from './pages/Product'

// styles
import '/styles/app.css'

const App = () => {
    const { getAllProducts, getProduct, search, categories } = useProducts()
    const cart = useCart()

    console.log(cart.getCart())

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Home products={getAllProducts()} cart={cart} />
                    </Route>
                    <Route path="/product/:id">
                        <ProductPage getProduct={getProduct} cart={cart} />
                    </Route>
                    <Route path="/products">
                        <Products
                            products={getAllProducts()}
                            search={search}
                            categories={categories}
                            cart={cart}
                        />
                    </Route>
                    <Route path="/cart">
                        <Cart cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
