import React from 'react'
import { Button } from '../KIT';
import { LottieOptions, useLottie } from 'lottie-react';

interface ConfirmationModalContentTypes {
    animationOptions?: LottieOptions<"svg">,
    animationStyle?: React.CSSProperties | undefined,
    title: string;
    text?: string;
    onCancel?: () => void
    onConfirm?: () => void
};

const ConfirmationModalContent = ({ animationOptions, animationStyle, title, onCancel, onConfirm }: ConfirmationModalContentTypes) => {
    const { View, pause } = useLottie(animationOptions ? animationOptions : {
        animationData: null
    }, animationStyle);
    // console.log(openEffect)
    // useEffect(() => {
    //     console.log(openEffect)
    // },[openEffect])
    return (
        <div className='flex column alignCenter p5'>
            {/* <div className='w100'> */}
            {/* {animation ? animation : ''} */}
            {animationOptions ? View : ''}

            {/* </div> */}
            <span className='fs-lg mt4'>
                {title}
            </span>
            {/* <p className='mt3 textSecondary fs-md textAlign center'>
                
            </p> */}
            <div className='grid col2 gap-2 mt6 w100'>
                <Button className='outlined large' onClick={() => {
                    pause()
                    onCancel && onCancel()
                }}>
                    Cancel
                </Button>
                <Button className='contained large primary' onClick={onConfirm}>
                    Confirm
                </Button>
            </div>
        </div>
    )
};

export default ConfirmationModalContent