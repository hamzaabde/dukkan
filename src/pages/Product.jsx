import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Product } from '../components/ProductComps'

export const ProductPage = ({ getProduct, cart }) => {
    const product = getProduct(useParams().id)
    document.title = `Dukkan | ${product ? product.title : 'loading'}`

    return (
        <>
            <Header cartItems={cart.getCart().length} />
            <Main>
                {product && (
                    <Product product={product} addToCart={cart.addToCart} />
                )}
            </Main>
            <Footer />
        </>
    )
}
