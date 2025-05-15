import React, { useState } from 'react'
import { Button } from '../KIT';

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

const EcoModeModal = ({
    onCancel,
    onConfirm,
    initialValue = 'off'
}: {
    onCancel?: () => void,
    onConfirm?: (value: string) => void,
    initialValue?: 'off' | 'eco' | 'sleep'
}) => {
    const [selected, setSelected] = useState<string>(initialValue);

    return (
        <div
            className='flex column alignCenter justifyCenter'
            style={{ minWidth: 400, height: 280, background: 'transparent', padding: 20 }}
        >
            <span
                className='fs-lg'
                style={{ fontSize: '2em', fontWeight: 400, marginBottom: 24, marginTop: 0, textAlign: 'center' }}
            >
                Eco mode
            </span>
            <div
                className='flex row justifyCenter alignCenter'
                style={{ gap: 12, marginBottom: 16 }}
            >
                {/* Off */}
                <div
                    className='flex alignCenter justifyCenter'
                    style={{
                        border: '3px solid #666',
                        borderColor: selected === 'off' ? '#4F5BD5' : '#666',
                        background: 'rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        minWidth: 140,
                        minHeight: 65,
                        padding: '0 12px',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1.1em'
                    }}
                    onClick={() => setSelected('off')}
                >
                    <label style={customCheckboxWrapper}>
                        <input
                            type="checkbox"
                            checked={selected === 'off'}
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
                        <span style={customCheckboxBox(selected === 'off')}>
                            {selected === 'off' && (
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
                        Off
                    </span>
                </div>
                {/* Eco mode */}
                <div
                    className='flex alignCenter justifyCenter'
                    style={{
                        border: '3px solid #666',
                        borderColor: selected === 'eco' ? '#4F5BD5' : '#666',
                        background: 'rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        minWidth: 190,
                        minHeight: 65,
                        padding: '0 12px',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1.1em'
                    }}
                    onClick={() => setSelected('eco')}
                >
                    <label style={customCheckboxWrapper}>
                        <input
                            type="checkbox"
                            checked={selected === 'eco'}
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
                        <span style={customCheckboxBox(selected === 'eco')}>
                            {selected === 'eco' && (
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
                        Eco mode
                    </span>
                </div>
                {/* Sleep */}
                <div
                    className='flex alignCenter justifyCenter'
                    style={{
                        border: '3px solid #666',
                        borderColor: selected === 'sleep' ? '#4F5BD5' : '#666',
                        background: 'rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        minWidth: 150,
                        minHeight: 65,
                        padding: '0 12px',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1.1em'
                    }}
                    onClick={() => setSelected('sleep')}
                >
                    <label style={customCheckboxWrapper}>
                        <input
                            type="checkbox"
                            checked={selected === 'sleep'}
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
                        <span style={customCheckboxBox(selected === 'sleep')}>
                            {selected === 'sleep' && (
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
                        Sleep
                    </span>
                </div>
            </div>
            <div
                className='flex row justifyBetween alignCenter w100'
                style={{ gap: 24, marginTop: 'auto' }}
            >
                <Button
                    className='outlined large'
                    style={{
                        flex: 1,
                        fontSize: '1.35em',
                        height: 64,
                        borderRadius: 16,
                        fontWeight: 400,
                        borderWidth: 3
                    }}
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    className='contained large primary'
                    style={{
                        flex: 1,
                        fontSize: '1.35em',
                        height: 64,
                        borderRadius: 16,
                        fontWeight: 400,
                        borderWidth: 3
                    }}
                    onClick={() => onConfirm && onConfirm(selected)}
                >
                    Confirm
                </Button>
            </div>
        </div>
    )
};

export default EcoModeModal; 