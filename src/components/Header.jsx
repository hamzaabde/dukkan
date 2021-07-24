import React from 'react'
import { Nav } from './Nav'
import { Search } from './Icons'

const Hero = () => (
    <div className="hero">
        <div className="hero__backdrop">
            <div className="app__content hero__content">
                <h1 className="hero__heading">
                    High Quality Products From Well Know Brands All Around The
                    World
                </h1>
                <form action="/products" className="hero__search">
                    <input
                        type="text"
                        className="hero__input"
                        name="search"
                        placeholder="Enter keywords"
                        required
                    />
                    <button type="submit" className="hero__submit">
                        <Search color="#0f0825" />
                    </button>
                </form>
            </div>
        </div>
    </div>
)

export const Header = ({ searchBar = true, cartItems }) => {
    return (
        <header className="header">
            <Nav searchBar={searchBar} cartItems={cartItems} />
            {!searchBar && <Hero />}
        </header>
    )
}
