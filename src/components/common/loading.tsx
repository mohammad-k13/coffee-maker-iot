

interface LoadingTypes {
    size?: string;
    color?: string;
    borderWidth?: string;
};

const Loading = ({
    color="hsl(234, 100%, 17%)",
    size="1em",
    borderWidth="0.16em"
}: LoadingTypes) => {
    return (
        <div className='relative flex alignCenter' style={{
            minHeight: size,
            minWidth: size,
        }}>
            <div className="xr-button-spinner" style={{
                borderWidth: borderWidth,
                borderTopColor: color,
                height: size,
                width: size,
            }}/>
        </div>
    )
};

export default Loading