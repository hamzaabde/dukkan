import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Product } from '../components/ProductComps'

export const ProductPage = ({ getProduct, cart }) => {
    const { id } = useParams()

    const product = getProduct(id)
    document.title = `Dukkan | ${product && product.title}`

    console.log(id)
    return (
        <div className="products">
            <Header cart={cart} />
            <Main>
                {product && (
                    <Product product={product} addToCart={cart.addToCart} />
                )}
            </Main>
            <Footer />
        </div>
    )
}
