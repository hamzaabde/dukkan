import { useState } from '../../_snowpack/pkg/react.js'
import { Product } from '../components/ProductComps.js'
import { v4 } from '../../_snowpack/pkg/uuid.js'

export const useCart = () => {
    const [cart, setCart] = useState([])

    const addToCart = item => {
        item.cartId = v4()
        setCart([...cart, item])
    }

    const removeFromCart = index => {
        const newCart = cart.filter((_, i) => i !== index)
        console.log(newCart, index)
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
