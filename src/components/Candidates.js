import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './candidates.scss';
import ScoreModal from './ScoreModal';

const Candidates = ({ candies }) => {
  const [show, setShow] = useState(false);    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log('show', show);
  return (
    <>
      <ScoreModal close={handleClose} show={show} />
      <ul className={styles.Candidates}>
        {candies.map(i => {
          return <li onClick={handleShow} key={i.name}>
            <figure>
              <img src={i.image}/>
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
