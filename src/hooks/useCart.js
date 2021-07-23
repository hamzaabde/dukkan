import { useState } from 'react'
import { Product } from '../components/ProductComps'

export const useCart = () => {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        setCart([...cart, product])
    }

    const removeFromCart = item => {
        let newCart

        const indexOfItem = cart.indexOf(item)
        if (indexOfItem === 0) cart.shift()
        if (indexOfItem === cart.length - 1) cart.pop()
        else
            newCart = [
                ...cart.slice(0, indexOfItem),
                ...cart.slice(indexOfItem + 1),
            ]

        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getCart = () => cart

    return {
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
    }
}
