import React from 'react';
// import './ScoreModal.scss';

const ScoreModal = ({ show, close }) => {
    console.log('show', show);
    const hideShowStyle = show ? { display: 'block' } : { display: 'none' };

    return (
        <div style={hideShowStyle}>
            <h1 className='test'>Score Modal</h1>
            <button onClick={close}>Close Modal</button>
        </div>
    );
};

export default ScoreModal;
