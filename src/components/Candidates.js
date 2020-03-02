import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './candidates.scss';
import ScoreModal from './ScoreModal';

const Candidates = ({ candies }) => {
  const [show, setShow] = useState(false);
  const [candidate, setCandidate] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = ({ target }) => {
    setCandidate(target.name);
    setShow(true);
  };

  return (
    <>
      <ScoreModal candidate={candidate} close={handleClose} show={show} />
      <ul className={styles.Candidates}>
        {candies.map(i => {
          return <li name={i.name} onClick={handleShow} key={i.name}>
            <figure>
              <img alt={i.name} src={i.image} />
            </figure>
            <h2>{i.name}</h2>
          </li>;
        })}
      </ul>
    </>
  );
};

Candidates.propTypes = {
  candies: PropTypes.array.isRequired
};

export default Candidates;
