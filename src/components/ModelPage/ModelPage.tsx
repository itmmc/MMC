import React from 'react'
import './ModelPage.css'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <div className="Create-Category-btn   close-btn   ">
                    <div className="primary_bg" aria-label="Contact">
                        <strong className="_txt words" onClick={onClose}>
                            {' '}
                            Close
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
