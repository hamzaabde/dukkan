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
        <div className="home">
            <Header searchBar={false} />
            <Main>
                <Categories />
                {products && <RecentProducts products={products.slice(0, 3)} />}
                
            </Main>
            <Footer />
        </div>
    )
}
