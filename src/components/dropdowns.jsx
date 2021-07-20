import React, { useState } from 'react'
import { ChevronDown } from './icons'

// styles
import '/styles/dropdown.css'

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
                <ChevronDown
                    color={active ? '#11082b' : '#f7f5ff'}
                    width={16}
                />
            </div>
            {active && (
                <div className={`select__dropdown ${active && 'active'}`}>
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
            )}
        </div>
    )
}
