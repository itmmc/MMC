import React from 'react'
import './Toast.css'

interface ToastProps {
    message: string
    isVisible: boolean
    className: string
    onClose: () => void
}

const Toast: React.FC<ToastProps> = ({
    message,
    isVisible,
    onClose,
    className,
}) => {
    const messageClass = message.includes('error') ? 'errorbr' : 'successbr'

    return (
        <div className={`wrapper ${isVisible ? 'visible' : ''}`}>
            <div
                id="toast"
                className={isVisible ? `customclass  ${className}` : ''}
            >
                <div className="container-1">
                    <i className="fas fa-check-square"></i>
                </div>
                <div className="container-2">
                    <p>{message}</p>
                </div>
                <button id="close" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    )
}

export default Toast
