import React from 'react'
import { Select } from './components/dropdowns'
import { Search } from './components/icons'

// styles
import '/styles/header.css'

const options = [
    'All',
    'Smart phones',
    'Tablets',
    'Desktop Computers',
    'Laptops',
    "TV's",
    'Watchs',
]

const Header = () => {
    return (
        <header className="header">
            <div className="app__content header__content">
                <div className="logo">
                    <h1>Dukkan</h1>
                </div>
                <div className="search-box">
                    <Select options={options} />
                    <form className="search-box-form" autoComplete="off">
                        <input
                            type="text"
                            className="search-input"
                            name="search"
                            placeholder="Enter keywords"
                        />
                        <button className="search-btn" type="submit">
                            <Search color="hsl(255, 60%, 50%)" width={16} />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
