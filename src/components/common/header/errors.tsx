import { AnimationControls, motion } from 'framer-motion';
import { Button, Table } from '~/components/KIT';
import { ERROR_ITEM_VARIANTS } from '~/store/animationVars';
import React, { useState } from 'react';

interface ErrorsTypes {
    setActivePanel: (panel: 'menu' | 'errors') => void;
}

const FAKE_ERRORS = [
    {
        id: 1,
        cA: 'Oct 3, 2023',
        code: '448',
        desc: 'It looks like the webpage at https://www.bing.com/search?pglt=41&q=moment+js&cvid=71f879ba65744e35bbe373256e78c2fa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMTkzNWowajGoAgCwAgA&FORM=ANNTA1&PC=EDG'
    },
]

const ErrorLog = ({ setActivePanel }: ErrorsTypes) => {
    const [errors, setErrors] = useState([
        { row: 1, code: '448', date: '2025/05/12', description: 'Sample error 1' },
        { row: 2, code: '449', date: '2025/05/13', description: 'Sample error 2' },
        { row: 3, code: '450', date: '2025/05/14', description: 'Sample error 3' },
        { row: 4, code: '451', date: '2025/05/15', description: 'Sample error 4' },
        { row: 5, code: '452', date: '2025/05/16', description: 'Sample error 5' },
    ]);

    const handleClearErrors = () => setErrors([]);

    return (
        <div className="errorlog-container">
            <div className="errorlog-table">
                <div className="errorlog-table-header">
                    <div>Row</div>
                    <div>Error code</div>
                    <div>Date</div>
                    <div>Description</div>
                </div>
                {[...Array(5)].map((_, i) => (
                    <div className="errorlog-table-row" key={i}>
                        <div>{errors[i]?.row || ''}</div>
                        <div>{errors[i]?.code || ''}</div>
                        <div>{errors[i]?.date || ''}</div>
                        <div>{errors[i]?.description || ''}</div>
                    </div>
                ))}
            </div>
            <div className="errorlog-button-group">
                <button onClick={handleClearErrors}>Clear errors</button>
                <button onClick={() => setActivePanel('menu')}>Back</button>
            </div>
            <style>{`
                .errorlog-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    min-height: 100vh;
                    background-color: #161616;
                    margin-top: 50vh;
                }
                .errorlog-table {
                    border: 1px solid #444;
                    border-radius: 15px;
                    overflow: hidden;
                    width: 90%;
                    max-width: 1000px;
                }
                .errorlog-table-header {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    background-color: #ccc;
                    color: #000;
                    font-weight: bold;
                    text-align: center;
                    padding: 1rem 0;
                }
                .errorlog-table-row {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    border-top: 1px solid #222;
                    color: white;
                    text-align: center;
                    height: 3rem;
                    align-items: center;
                }
                .errorlog-button-group {
                    margin-top: 2rem;
                    display: flex;
                    gap: 1rem;
                }
                .errorlog-button-group button {
                    background-color: #ccc;
                    color: black;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    font-size: 1rem;
                }
                .errorlog-button-group button:hover {
                    background-color: #bbb;
                }
            `}</style>
        </div>
    );
};

export default ErrorLog;