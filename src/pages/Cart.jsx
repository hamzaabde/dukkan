import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { CartContainer } from '../components/CartComps'

export const Cart = ({ cart }) => {
    document.title = 'Dukkan | Your cart'

    return (
        <div className="cart-page">
            <Header cart={cart} />
            <Main>
                <CartContainer cart={cart} />
            </Main>
            <Footer />
        </div>
    )
}
