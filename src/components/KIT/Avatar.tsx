import React from 'react'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean
}
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className = "", loading, children, ...other }, ref) => {
        return (
            <div
                ref={ref}
                className={`xr-avatar flex alignCenter justifyCenter ${className}`}
                {...other}
            >
                {children}
            </div>
        )
    }
)

Avatar.displayName = 'XeromAvatar'
export default Avatar