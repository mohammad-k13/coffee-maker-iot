import React from 'react'
import RSelect, { Props as RSelectProps } from 'react-select';
import i18next from '~/i18n/config';
interface SelectProps extends RSelectProps {
    loading?: boolean;
    label?: React.ReactNode | string;
    variant?: 'underline' | 'outlined' | 'filled';
    className?: string;
    parentStyle?: React.CSSProperties;
    dropDownIcon?: 'auto' | 'pelazoom'
}
const Select = React.forwardRef<RSelectProps, SelectProps>(
    ({ className = "", loading, label,
        dropDownIcon = 'pelazoom',
        placeholder = i18next.t("select_option"), parentStyle = {}, variant = 'outlined', isMulti, ...other }, _ref) => {
        

        
        return (
            <div className={`xr-select-wrapper ${variant} ${isMulti ? 'multiSelect' : ''} flex column ${className}`} style={parentStyle}>
                {label && <label className='mb2 input-label'>{label}</label>}
                <RSelect
                    isMulti={isMulti}
                    // menuIsOpen
                    classNamePrefix={`xr`}
                    placeholder={placeholder}
                    {...other}
                />
                {/* <input className={`xr-textfield ${variant}`} ref={ref} {...other} /> */}
            </div>
        )
    }
)

Select.displayName = 'XeromSelect'
export default Select