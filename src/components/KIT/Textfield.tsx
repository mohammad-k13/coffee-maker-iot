import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    loading?: boolean;
    label?: React.ReactNode | string;
    parentStyle?: React.CSSProperties;
    inputClassName?: string;
    variant?: 'underline' | 'outlined' | 'filled' | 'contained';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputSize?: 'small' | 'medium' | 'large'
}
const Textfield = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        startIcon,
        endIcon,
        className = "",
        inputClassName = "",
        loading,
        label,
        parentStyle = {},
        variant = 'outlined',
        children,
        inputSize = 'medium',
        ...other
    }, ref) => {
        return (
            <div className={`flex column ${className}`} style={parentStyle}>
                {label && <label className='mb2 input-label'>{label}</label>}
                <div className={`xr-textfield-wrapper ${variant} ${inputSize}`} style={{
                    gridTemplateColumns: startIcon && endIcon
                        ? 'auto 1fr auto'
                        : startIcon
                            ? 'auto 1fr'
                            : endIcon
                                ? '1fr auto'
                                : '1fr'
                }}>
                    {startIcon && <div className='xr-textfield-startIcon flex alignCenter'>{startIcon}</div>}
                    <input className={`xr-textfield ${inputClassName}`} ref={ref} {...other} />
                    {endIcon && <div className='xr-textfield-endIcon flex alignCenter'>{endIcon}</div>}
                </div>
            </div>
        )
    }
)

Textfield.displayName = 'XeromTextfield'
export default Textfield