import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Categories, RecentProducts } from '../components/ProductComps'

// styles
import '/styles/header.css'
import '/styles/main.css'
import '/styles/footer.css'

export const Home = ({ products, cart }) => {
    document.title = 'Dukkan | Home'

    return (
        <>
            <Header searchBar={false} cartItems={cart.getCart().length} />
            <Main>
                <Categories />
                {products && <RecentProducts products={products.slice(0, 3)} />}
            </Main>
            <Footer />
        </>
    )
}
