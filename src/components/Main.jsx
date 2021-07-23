import React from 'react'

export const Main = ({ children }) => {
    return (
        <main className="main">
            <div className="app__content main__content">{children}</div>
        </main>
    )
}
