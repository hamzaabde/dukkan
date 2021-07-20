import React from 'react'

export const Search = ({ color, width }) => {
    const aspectRatio = 92 / 92

    return (
        <div
            className="search-icon"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <svg
                width={width}
                height={width * aspectRatio}
                viewBox={`0 0 92 92`}
            >
                <path
                    fill={color}
                    d="M57.8,2.2c-17.1,0-31,14.1-31,31.3c0,7.3,2.5,13.9,6.6,19.3L4,82.6c-1.7,1.8-1.7,4.6,0,6.3
	c0.9,0.9,2,1.3,3.1,1.3c1.2,0,2.3-0.4,3.2-1.3l29.4-29.8c5.1,3.7,11.3,5.8,18,5.8c17.1,0,31-14.1,31-31.3S74.9,2.2,57.8,2.2z
	 M57.8,57c-12.7,0-23-10.5-23-23.4c0-12.9,10.3-23.4,23-23.4c12.7,0,23,10.5,23,23.4C80.8,46.5,70.5,57,57.8,57z M73.3,34
	c-0.2,1.7-1.7,3-3.4,3c-0.2,0-0.3,0-0.5,0c-1.9-0.3-3.2-2-3-3.9c0.7-5.2-5.1-7.9-5.4-8c-1.7-0.8-2.5-2.9-1.7-4.6s2.8-2.5,4.6-1.8
	C64.3,18.8,74.7,23.6,73.3,34z M66,41.6c0.7,0.7,1.2,1.8,1.2,2.8c0,1.1-0.4,2.1-1.2,2.8c-0.7,0.7-1.8,1.2-2.8,1.2
	c-1,0-2.1-0.4-2.8-1.2c-0.7-0.7-1.2-1.8-1.2-2.8c0-1,0.4-2.1,1.2-2.8c0.7-0.7,1.8-1.2,2.8-1.2C64.2,40.4,65.2,40.8,66,41.6z"
                />
            </svg>
        </div>
    )
}

export const ChevronDown = ({ color, width }) => {
    const aspectRatio = 92 / 92

    return (
        <div
            className="chevron"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <svg
                width={width}
                height={width * aspectRatio}
                viewBox={`0 0 92 92`}
            >
                <path
                    fill={color}
                    d="m46,63c-1.1,0-2.1-0.4-2.9-1.2l-25-26c-1.5-1.6-1.5-4.1,0.1-5.7c1.6-1.5,4.1-1.5,5.7,0.1l22.1,23l22.1-23
	            c1.5-1.6,4.1-1.6,5.7-0.1c1.6,1.5,1.6,4.1,0.1,5.7l-25,26C48.1,62.6,47.1,63,46,63z"
                />
            </svg>
        </div>
    )
}