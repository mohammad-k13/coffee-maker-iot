import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", loading, children, ...other }, ref) => {
        return (
            <button
                ref={ref}
                className={`xr-button ${className}`}
                {...other}
            >
                {loading ? (
                    <div className='relative flex alignCenter'>
                        <div className="xr-button-spinner" />
                    </div>
                ) : (
                    ""
                )}
                {children}
            </button>
        )
    }
)

Button.displayName = 'XeromButton'
export default Button