import React, { useState } from 'react'

export const Modal = ({ children }) => {
    const [modal, setModal] = useState('active')

    return (
        <div
            className={`modal-overlay modal-${modal}`}
            onClickCapture={e => {
                if (e.target.classList.contains('modal-overlay'))
                    setModal('inactive')
            }}
        >
            <div className="modal-content">{children}</div>
        </div>
    )
}
