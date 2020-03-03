/* eslint-disable react/prop-types */
import React from 'react';
import candies from '../../assets/candidates';
import { incrementScore } from '../services/databaseServices';

const ScoreModal = ({ show, close, candidate }) => {
console.log('candidate', candidate);
  const handleScoreAssignment = ({ target }) => {
    incrementScore(candidate, target.name);
  };

  const hideShowStyle = show ? { display: 'block' } : { display: 'none' };

  return (
    <div style={hideShowStyle}>
      <h1 className='test'>Score Modal</h1>
      <img name="environment" onClick={handleScoreAssignment} width="50px" src="https://image.flaticon.com/icons/svg/525/525903.svg"></img>
      <img name="lgbtq" onClick={handleScoreAssignment} width="50px" src="https://image.flaticon.com/icons/svg/2284/2284888.svg"></img>
      <img name="voting" onClick={handleScoreAssignment} width="50px" src="https://image.flaticon.com/icons/svg/2633/2633809.svg"></img>
      <img name="general" onClick={handleScoreAssignment} width="50px" src="https://image.flaticon.com/icons/svg/1665/1665578.svg"></img>
      <img width="50px" src={candies[0].image}></img>
      <button onClick={close}>Close Modal</button>
    </div>
  );
};

export default ScoreModal;
