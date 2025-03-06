import React from 'react'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    id: string;
    vertical?: boolean;
}
const Button = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, id, vertical, className, ...props }, ref) => {
        return (
            <label htmlFor={id} className={`xr-switch ${vertical ? '-vertical' : ''} ${className}`}>
                {label}
                <input type="checkbox" role="switch" id={id} ref={ref} {...props} />
            </label>
        )
    }
)

Button.displayName = 'XeromButton'
export default Button