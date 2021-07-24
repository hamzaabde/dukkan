import { useState, useEffect } from '../../_snowpack/pkg/react.js'
import { v4 } from '../../_snowpack/pkg/uuid.js'

const randomDiscount = () => {
    return Math.floor(Math.random() * 50)
}

const randomRating = () => {
    return Math.floor(Math.random() * 3)
}

export const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(async () => {
        let productsData
        if (!sessionStorage.getItem('products')) {
            const data = await fetch('https://fakestoreapi.com/products').then(
                res => res.json()
            )
            productsData = data.map(product => ({
                id: v4(),
                title: product.title,
                price: Math.round(
                    (product.price / 100) * (100 - randomDiscount())
                ),
                originalPrice: product.price,
                desc: product.description,
                rating: 2 + randomRating(),
                image: product.image,
                category:
                    product.category === 'electronics'
                        ? 'electronics'
                        : product.category === 'jewelery'
                        ? 'jewelery'
                        : 'clothing',
            }))
            sessionStorage.setItem('products', JSON.stringify(productsData))
        } else {
            productsData = JSON.parse(sessionStorage.getItem('products'))
        }

        setProducts(new Set(productsData))
    }, [])

    const getAllProducts = () => Array.from(products)

    const getProduct = id => {
        const [product, setProduct] = useState(null)

        useEffect(() => {
            for (let product of products) {
                console.log(product.id)
                if (product.id === id) {
                    setProduct(product)
                }
            }
        }, [id, products, product])

        return product
    }

    const search = searchParams => {
        const [searchResult, setSearchResult] = useState([])

        useEffect(() => {
            const keywords = searchParams.split('+').map(keyword => {
                return new RegExp(keyword, 'ig')
            })
            const temp = []
            for (let product of products) {
                for (let keyword of keywords) {
                    if (keyword.test(product.title)) {
                        temp.push(product)
                    }
                }
            }

            setSearchResult([...searchResult, ...temp])
            console.log('regex', keywords)
            // console.log('products', products)
        }, [products])

        return Array.from(new Set(searchResult))
    }

    const categories = category => {
        const [cat, setCat] = useState([])

        useEffect(() => {
            const arr = Array.from(products)

            setCat(arr.filter(product => product.category === category))

            console.log(arr)
        }, [products])
        console.log(cat)
        return cat
    }

    return { getAllProducts, getProduct, search, categories }
}
