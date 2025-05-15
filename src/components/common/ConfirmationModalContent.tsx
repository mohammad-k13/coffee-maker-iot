import React, { useState } from 'react'
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

const customCheckboxWrapper: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: 28,
    height: 28,
    marginRight: 16,
    verticalAlign: 'middle'
};

const customCheckboxBox = (checked: boolean): React.CSSProperties => ({
    width: 28,
    height: 28,
    background: checked ? '#4F5BD5' : '#222',
    border: `2.5px solid ${checked ? '#4F5BD5' : '#666'}`,
    borderRadius: 6,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.15s, border-color 0.15s'
});

const customCheckboxCheck: React.CSSProperties = {
    display: 'block',
    width: 14,
    height: 14,
    borderBottom: '3px solid #fff',
    borderRight: '3px solid #fff',
    transform: 'rotate(45deg)',
    position: 'absolute',
    top: 4,
    left: 7
};

const ConfirmationModalContent = ({
    animationOptions,
    animationStyle,
    title,
    onCancel,
    onConfirm
}: ConfirmationModalContentTypes) => {
    const { View, pause } = useLottie(animationOptions ? animationOptions : {
        animationData: null
    }, animationStyle);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div
            className='flex column alignCenter justifyCenter'
            style={{ minWidth: 400, height: 280, background: 'transparent', padding: 20 }}
        >
            {animationOptions ? View : ''}
            <span
                className='fs-lg'
                style={{ fontSize: '2em', fontWeight: 400, marginBottom: 24, marginTop: 0, textAlign: 'center' }}
            >
                {title}
            </span>
            <div
                className='flex row justifyCenter alignCenter'
                style={{ gap: 12, marginBottom: 16 }}
            >
                <div
                    className='flex alignCenter justifyCenter'
                    style={{
                        border: '3px solid #666',
                        borderColor: selected === 'refill' ? '#4F5BD5' : '#666',
                        background: 'rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        minWidth: 220,
                        minHeight: 65,
                        padding: '0 24px',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1.1em'
                    }}
                    onClick={() => setSelected('refill')}
                >
                    <label style={customCheckboxWrapper}>
                        <input
                            type="checkbox"
                            checked={selected === 'refill'}
                            readOnly
                            tabIndex={-1}
                            style={{
                                opacity: 0,
                                width: 28,
                                height: 28,
                                margin: 0,
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                cursor: 'pointer'
                            }}
                        />
                        <span style={customCheckboxBox(selected === 'refill')}>
                            {selected === 'refill' && (
                                <svg width="18" height="18" viewBox="0 0 18 18">
                                    <polyline
                                        points="4,10 8,14 14,6"
                                        style={{
                                            fill: 'none',
                                            stroke: '#fff',
                                            strokeWidth: 2.5,
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeDasharray: 16,
                                            strokeDashoffset: 0,
                                            animation: 'checkmark-draw 0.45s cubic-bezier(0.65, 0, 0.45, 1) forwards'
                                        }}
                                    />
                                </svg>
                            )}
                        </span>
                    </label>
                    <span style={{ color: '#fff', fontWeight: 400 }}>
                        Drain & Refill
                    </span>
                </div>
                <div
                    className='flex alignCenter justifyCenter'
                    style={{
                        border: '3px solid #666',
                        borderColor: selected === 'shutdown' ? '#4F5BD5' : '#666',
                        background: 'rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        minWidth: 220,
                        minHeight: 65,
                        padding: '0 24px',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1.1em'
                    }}
                    onClick={() => setSelected('shutdown')}
                >
                    <label style={customCheckboxWrapper}>
                        <input
                            type="checkbox"
                            checked={selected === 'shutdown'}
                            readOnly
                            tabIndex={-1}
                            style={{
                                opacity: 0,
                                width: 28,
                                height: 28,
                                margin: 0,
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                cursor: 'pointer'
                            }}
                        />
                        <span style={customCheckboxBox(selected === 'shutdown')}>
                            {selected === 'shutdown' && (
                                <svg width="18" height="18" viewBox="0 0 18 18">
                                    <polyline
                                        points="4,10 8,14 14,6"
                                        style={{
                                            fill: 'none',
                                            stroke: '#fff',
                                            strokeWidth: 2.5,
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeDasharray: 16,
                                            strokeDashoffset: 0,
                                            animation: 'checkmark-draw 0.45s cubic-bezier(0.65, 0, 0.45, 1) forwards'
                                        }}
                                    />
                                </svg>
                            )}
                        </span>
                    </label>
                    <span style={{ color: '#fff', fontWeight: 400 }}>
                        Drain & Shutdown
                    </span>
                </div>
            </div>
            <div
                className='flex row justifyBetween alignCenter w100'
                style={{ gap: 16 }}
            >
                <Button
                    className='outlined large'
                    style={{ flex: 1, fontSize: '1.35em', height: 64, borderRadius: 16, fontWeight: 400, borderWidth: 3 }}
                    onClick={() => {
                    pause()
                    onCancel && onCancel()
                    }}
                >
                    Cancel
                </Button>
                <Button
                    className='contained large primary'
                    style={{ flex: 1, fontSize: '1.35em', height: 64, borderRadius: 16, fontWeight: 400, borderWidth: 3 }}
                    onClick={() => onConfirm && onConfirm()}
                >
                    Confirm
                </Button>
            </div>
        </div>
    )
};

export default ConfirmationModalContent