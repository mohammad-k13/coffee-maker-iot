import React, { useState } from 'react';
import { Modal, Button } from '~/components/KIT';
import { motion } from 'framer-motion';

interface BaristaLightModalProps {
  open: boolean;
  onClose: () => void;
}

interface LightAnimationProps {
  value: number;
  isOn: boolean;
}

const LightAnimation: React.FC<LightAnimationProps> = ({ value, isOn }) => {
  const brightness = isOn ? value / 100 : 0;

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
      top: '-100px',
      zIndex: 2
    }}>
      <div className="bulb-container">
        <div
          className="bulb-glow"
          style={{
            opacity: brightness,
            boxShadow: `0 0 ${200 * brightness}px 60px rgba(255, 210, 0, ${brightness})`,
            background: 'rgba(255, 230, 50, 0.3)',
          }}
        />
        <div className="bulb-main" style={{
          background: isOn ? '#fe3' : '#e7e7e7',
          transition: 'background 0.5s',
        }}>
          <div className="bulb-reflection" />
        </div>
        <div id="base">
          <div className="screw-top" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-c" />
          <div className="screw-d" />
        </div>
      </div>
      <style>{`
        .bulb-container {
          text-align: center;
          margin: 20px auto;
          transform: scale(0.6);
          transform-origin: top center;
          position: relative;
        }
        .bulb-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }
        .bulb-main {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 0 auto;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.12), inset 0 10px 30px 0 rgba(255,255,255,0.15);
          z-index: 2;
        }
        .bulb-reflection {
          position: absolute;
          top: 36px;
          left: 36px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
          filter: blur(1px);
        }
      `}</style>
      <style>{`
        #base {
          position: relative;
          z-index: 3;
        }
        .screw-top {
          margin: -10px auto -2px auto;
          padding: 0;
          width: 90px;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 12px solid #d3d3d3;
          border-radius: 999px;
        }
        .screw-a {
          background: #ddd;
          width: 80px;
          height: 8px;
          border-radius: 999px;
          margin: -1px auto 0px;
          padding: 0;
          transform: rotate(-3deg);
        }
        .screw-b {
          background: #d9d9d9;
          width: 70px;
          height: 8px;
          margin: -1px auto 0px;
          padding: 0;
          transform: rotate(-3deg);
        }
        .screw-c {
          margin: -1px auto 0px;
          padding: 0;
          width: 70px;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 10px solid #ddd;
          border-radius: 8px;
          transform: rotate(-3deg);
        }
        .screw-d {
          margin: 0 auto;
          padding: 0;
          width: 50px;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 8px solid #444;
          transform: rotate(-3deg);
        }
      `}</style>
    </div>
  );
};

const BaristaLightModal: React.FC<BaristaLightModalProps> = ({ open, onClose }) => {
  const [value, setValue] = useState(100);
  const [toggle, setToggle] = useState(true);

  return (
    <Modal open={open} onClose={onClose} modalPaperStyle={{ overflow: 'visible' }}>
      <div
        className="flex column alignCenter justifyCenter"
        style={{ minWidth: 400, height: '90%', background: 'transparent', padding: 20, position: 'relative', overflow: 'visible', paddingTop: 60 }}
      >
        <span
          className="fs-lg"
          style={{ fontSize: '2em', fontWeight: 400, marginBottom: 0, marginTop: 24, textAlign: 'center', color: '#fff', textShadow: '0 2px 8px #0008' }}
        >
          Barista light
        </span>
        <LightAnimation value={value} isOn={toggle} />
        <style>
          {`
            .barista-light-slider {
              width: 90%;
              margin: 0 auto 16px auto;
              accent-color: #4F5BD5;
              height: 29px;
              background: transparent;
            }
            .barista-light-slider::-webkit-slider-thumb {
              opacity: 0;
              width: 36px;
              height: 36px;
              pointer-events: auto;
            }
            .barista-light-slider::-moz-range-thumb {
              opacity: 0;
              width: 36px;
              height: 36px;
              pointer-events: auto;
            }
            .barista-light-slider::-ms-thumb {
              opacity: 0;
              width: 36px;
              height: 36px;
              pointer-events: auto;
            }
            .barista-light-slider::-webkit-slider-runnable-track {
              height: 29px;
              border-radius: 8px;
              background: linear-gradient(90deg, #4F5BD5 ${value}%, #444 ${value}%);
            }
            .barista-light-slider:focus {
              outline: none;
            }
            .barista-light-slider::-moz-range-track {
              height: 29px;
              border-radius: 8px;
              background: linear-gradient(90deg, #4F5BD5 ${value}%, #444 ${value}%);
            }
            .barista-light-slider::-ms-fill-lower {
              background: #4F5BD5;
              border-radius: 8px;
            }
            .barista-light-slider::-ms-fill-upper {
              background: #444;
              border-radius: 8px;
            }
          `}
        </style>
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
          className="barista-light-slider"
          style={{
            width: '90%',
            margin: 0,
            marginBottom: 16,
            accentColor: '#4F5BD5',
            background: 'transparent'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '90%', marginBottom: 10 }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span
              style={{
                width: 72,
                height: 42,
                borderRadius: 24,
                background: toggle ? '#4F5BD5' : '#444',
                display: 'inline-block',
                position: 'relative',
                transition: 'background 0.2s',
                marginRight: 8,
              }}
              onClick={() => setToggle(v => !v)}
            >
              <span
                style={{
                  position: 'absolute',
                  left: toggle ? 36 : 6,
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
            onClick={onClose}
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
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BaristaLightModal; 