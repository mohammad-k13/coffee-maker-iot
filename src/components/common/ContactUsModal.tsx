import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';

const ContactUsModal = () => {
  return (
    <div
      className="flex column alignCenter justifyCenter"
      style={{ minWidth: 500, background: '#191a22', borderRadius: 18, padding: '2.5em 2.5em', position: 'relative', overflow: 'visible' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '2.3em', marginBottom: '0.7em', fontWeight: 400 }}>
        <span style={{ background: '#fff', color: '#191a22', borderRadius: 8, padding: '0.15em 0.25em', display: 'flex', alignItems: 'center', marginRight: 18 }}>
          <MdPhone size="1.1em" />
        </span>
        <span style={{ fontWeight: 400 }}>
          +989144587842
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '2.3em', fontWeight: 400 }}>
        <span style={{ background: '#fff', color: '#191a22', borderRadius: 8, padding: '0.15em 0.25em', display: 'flex', alignItems: 'center', marginRight: 18 }}>
          <MdEmail size="1.1em" />
        </span>
        <span style={{ fontWeight: 400 }}>
          info@r-nia.com
        </span>
      </div>
    </div>
  );
};

export default ContactUsModal; 