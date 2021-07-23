import { useState, useEffect } from 'react'

const randomDiscount = () => {
    return Math.floor(Math.random() * 50)
}

const randomRating = () => {
    return Math.floor(Math.random() * 3)
}

export const useProducts = () => {
    const [products, setProducts] = useState(null)

    useEffect(async () => {
        const productsData = await fetch(
            'https://fakestoreapi.com/products'
        ).then(res => res.json())

        setProducts(
            productsData.map(product => ({
                id: product.id,
                title: product.title,
                price: Math.round(
                    (product.price / 100) * (100 - randomDiscount())
                ),
                originalPrice: product.price,
                desc: product.description,
                rating: 2 + randomRating(),
                image: product.image,
            }))
        )
    }, [])

    const getAllProducts = () => products

    const getProduct = id => {
        const [product, setProduct] = useState(null)

        useEffect(async () => {
            const productData = await fetch(
                'https://fakestoreapi.com/products/' + id
            ).then(res => res.json())

            setProduct({
                id: productData.id,
                title: productData.title,
                price: Math.round(
                    (productData.price / 100) * (100 - randomDiscount())
                ),
                originalPrice: productData.price,
                desc: productData.description,
                rating: 2 + randomRating(),
                image: productData.image,
            })
        }, [id])

        return product
    }

    const getCategories = category => {
        const [products, setProducts] = useState(null)

        useEffect(async () => {
            const productsData = await fetch(
                'https://fakestoreapi.com/products/category/' + category
            ).then(res => res.json())

            setProducts(
                productsData.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: Math.round(
                        (product.price / 100) * (100 - randomDiscount())
                    ),
                    originalPrice: product.price,
                    desc: product.description,
                    rating: 2 + randomRating(),
                    image: product.image,
                }))
            )
        }, [products])

        return products
    }

    return { getAllProducts, getProduct, getCategories }
}
