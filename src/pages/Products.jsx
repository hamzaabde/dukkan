import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { ProductGrid } from '../components/ProductComps'

export const Products = ({ products, cart }) => {
    document.title = 'Dukkan | Check out our products'

    return (
        <div className="products">
            <Header cart={cart} />
            <Main>
                {products && (
                    <ProductGrid products={products} title="All Products" />
                )}
            </Main>
            <Footer />
        </div>
    )
}
