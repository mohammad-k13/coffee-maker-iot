import React, { useState } from 'react';
import { Button } from '../KIT';
import { useLottie } from 'lottie-react';
import cupWarmerAnimation from '~/assets/anims/cup-heater.json';
import { px } from 'framer-motion';

const CupImage = () => {
  const { View } = useLottie({
    animationData: cupWarmerAnimation,
    loop: true,
  });
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 0,
      width: 280,
      height: 250,
      top: '-150px',
      zIndex: 2
    }}>
      {View}
    </div>
  );
};

const CupWarmerModal = ({
  onCancel,
  onConfirm,
  initialValue = 78,
  initialOn = true,
}: {
  onCancel?: () => void,
  onConfirm?: (value: number, on: boolean) => void,
  initialValue?: number,
  initialOn?: boolean,
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const [isOn, setIsOn] = useState<boolean>(initialOn);

  return (
    <div
      className="flex column alignCenter justifyCenter"
      style={{ minWidth: 400, height: 418, background: 'transparent', padding: 20, position: 'relative', overflow: 'visible', paddingTop: 60 }}
    >
      <style>
        {`
          .cupwarmer-slider {
            width: 90%;
            margin: 0 auto 16px auto;
            accent-color: #4F5BD5;
            height: 29px;
            background: transparent;
          }
          .cupwarmer-slider::-webkit-slider-thumb {
            opacity: 0;
            width: 36px;
            height: 36px;
            pointer-events: auto;
          }
          .cupwarmer-slider::-moz-range-thumb {
            opacity: 0;
            width: 36px;
            height: 36px;
            pointer-events: auto;
          }
          .cupwarmer-slider::-ms-thumb {
            opacity: 0;
            width: 36px;
            height: 36px;
            pointer-events: auto;
          }
          .cupwarmer-slider::-webkit-slider-runnable-track {
            height: 29px;
            border-radius: 8px;
            background: linear-gradient(90deg, #4F5BD5 var(--cupwarmer-value, 50%), #444 var(--cupwarmer-value, 50%));
          }
          .cupwarmer-slider:focus {
            outline: none;
          }
          .cupwarmer-slider::-moz-range-track {
            height: 29px;
            border-radius: 8px;
            background: linear-gradient(90deg, #4F5BD5 var(--cupwarmer-value, 50%), #444 var(--cupwarmer-value, 50%));
          }
          .cupwarmer-slider::-ms-fill-lower {
            background: #4F5BD5;
            border-radius: 8px;
          }
          .cupwarmer-slider::-ms-fill-upper {
            background: #444;
            border-radius: 8px;
          }
        `}
      </style>
      <CupImage />
      <span
        className="fs-lg"
        style={{ fontSize: '2em', fontWeight: 400, marginBottom: 0, marginTop: 50, textAlign: 'center' }}
      >
        Cup warmer
      </span>
      <div style={{ width: '90%', display: 'flex', alignItems: 'center', marginBottom: 0, marginTop: 0 }}>
        <span style={{ fontSize: '2.5em', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center' }}>
          {value}
          <span style={{ fontSize: '0.8em', marginLeft: 4, marginRight: 8 }}>%</span>
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="cupwarmer-slider"
        style={{
          width: '90%',
          margin: '0 auto 16px auto',
          accentColor: '#4F5BD5',
          background: 'transparent',
          '--cupwarmer-value': `${value}%`
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '90%', marginBottom: 10 }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <span
            style={{
              width: 72,
              height: 42,
              borderRadius: 24,
              background: isOn ? '#4F5BD5' : '#444',
              display: 'inline-block',
              position: 'relative',
              transition: 'background 0.2s',
              marginRight: 8,
            }}
            onClick={() => setIsOn(v => !v)}
          >
            <span
              style={{
                position: 'absolute',
                left: isOn ? 36 : 6,
                top: 6,
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: '#fff',
                transition: 'left 0.2s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
              }}
            />
          </span>
        </label>
      </div>
      <div
        className="flex row justifyBetween alignCenter w100"
        style={{ gap: 24, marginTop: 'auto' }}
      >
        <Button
          className="outlined large"
          style={{
            flex: 1,
            fontSize: '1.35em',
            height: 64,
            borderRadius: 16,
            fontWeight: 400,
            borderWidth: 3,
          }}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="contained large primary"
          style={{
            flex: 1,
            fontSize: '1.35em',
            height: 64,
            borderRadius: 16,
            fontWeight: 400,
            borderWidth: 3,
          }}
          onClick={() => onConfirm && onConfirm(value, isOn)}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default CupWarmerModal; 