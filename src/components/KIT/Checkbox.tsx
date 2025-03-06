import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    variant?: 'bounce' | 'tick';
    className?: string;
    label?: string;
    checkboxSize?: 'small' | 'normal';
}
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ variant = 'bounce', className = '', checkboxSize = 'normal', id, label, ...other }, ref) => {
        return (
            <label
                htmlFor={id}
                className={`xr-checkbox ${checkboxSize} ${variant} ${label ? 'withLabel' : ''} ${className}`}
            >
                <input ref={ref} type="checkbox" role="checkbox" id={id} {...other} />

                {variant === 'bounce' ? (
                    <svg viewBox={`0 0 ${checkboxSize === 'small' ? '22 16' : '20 20'}`}>
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
                ) : (
                    <svg viewBox="0 0 18 22">
                        <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                    </svg>
                )}

                <span className='mr3'>{label}</span>
            </label>
        )
    }
)

Checkbox.displayName = 'XeromCheckbox'
export default Checkbox