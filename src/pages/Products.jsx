import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { ProductGrid } from '../components/ProductComps'
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'

export const Products = ({ products, search, categories, cart }) => {
    const location = useLocation()
    const match = useRouteMatch('/products/:category')
    const { search: params } = location

    console.log(location)

    document.title = 'Dukkan | Check out our products'

    return (
        <>
            <Header cartItems={cart.getCart().length} />
            <Main>
                {params ? (
                    <ProductGrid
                        products={search(
                            params.match(/(?<=\?search=)[\w\d\+\b]+/i)[0]
                        )}
                        title={
                            'Search matched: ' +
                            params.match(/(?<=\?search=)[\w\d\+\b]+/i)[0]
                        }
                    />
                ) : match !== null ? (
                    <ProductGrid
                        products={categories(match.params.category)}
                        title={'Category: ' + match.params.category}
                    />
                ) : (
                    <ProductGrid products={products} title="All Products" />
                )}
            </Main>
            <Footer />
        </>
    )
}
