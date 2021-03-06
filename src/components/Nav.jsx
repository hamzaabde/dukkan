import React, { useState } from 'react'
import { ChevronDown } from './Icons'
import { Search } from './Icons'
import { CartIcon } from './Icons'
import { Link } from 'react-router-dom'

//styles
import '/styles/nav.css'

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <CartIcon color="#f7f5ff" />
            {cartItems ? (
                <div className="cart-items-number">{cartItems}</div>
            ) : null}
        </div>
    )
}

const UserDropdown = ({ avatar }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="user-menu" onClick={handleClick}>
            <Link to="/products">
                <div className="user__name">
                    <span>All Products</span>
                </div>
            </Link>

            {/* <div className="user__avatar">
                <img src={avatar} />
            </div>
            <ChevronDown color="#f7f5ff" />
            {active && (
                <div className="user__dropdown">
                    <button className="user__dropdown__option">Orders</button>
                    <button className="user__dropdown__option">Logout</button>
                </div>
            )} */}
        </div>
    )
}

export const Select = ({ options }) => {
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(null)

    const handleDropdown = () => {
        setActive(!active)
    }

    return (
        <div
            className={`select ${active && 'active'}`}
            onClick={handleDropdown}
        >
            <div className="select__selected">
                {selected || options[0]}
                <ChevronDown color={active ? '#11082b' : '#f7f5ff'} />
            </div>
            <div
                className={`select__dropdown ${
                    active && 'active active__dropdown'
                }`}
            >
                {options.map(option => (
                    <div
                        className="option"
                        key={option}
                        onClick={() => {
                            console.log('hello')
                            setSelected(option)
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

const options = ['All Products', 'Electronics', 'Jewelery', 'Clothes']

export const Nav = ({ searchBar = true, cartItems }) => (
    <nav className="nav">
        <div className="app__content nav__content">
            <Link to="/">
                <div className="logo">
                    <h1>Dukkan</h1>
                </div>
            </Link>

            {searchBar && (
                <div className="search-box">
                    <Select options={options} />
                    <form
                        action="/products"
                        className="search-box-form"
                        autoComplete="off"
                    >
                        <input
                            type="text"
                            className="search-input"
                            name="search"
                            placeholder="Enter keywords"
                            required
                        />
                        <button className="search-btn" type="submit">
                            <Search color="hsl(255, 60%, 50%)" width={16} />
                        </button>
                    </form>
                </div>
            )}
            <div className="user">
                <UserDropdown avatar="/icons/user.svg" />
                <Link to="/cart">
                    <Cart cartItems={cartItems} />
                </Link>
            </div>
        </div>
    </nav>
)
