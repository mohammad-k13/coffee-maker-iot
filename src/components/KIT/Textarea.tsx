import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    loading?: boolean;
    label?: React.ReactNode | string;
    parentStyle?: React.CSSProperties;
    textareaClassName?: string;
    variant?: 'underline' | 'outlined' | 'filled' | 'contained';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputSize?: 'small' | 'medium' | 'large'
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({
        startIcon,
        endIcon,
        className = "",
        textareaClassName = "",
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
                    <textarea className={`xr-textfield ${textareaClassName}`} ref={ref} {...other} />
                    {endIcon && <div className='xr-textfield-endIcon flex alignCenter'>{endIcon}</div>}
                </div>

            </div>
        )
    }
)

Textarea.displayName = 'XeromTextarea'
export default Textarea