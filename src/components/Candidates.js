import React from 'react';
import PropTypes from 'prop-types';
import styles from './candidates.scss';

const Candidates = ({ candies }) => {

  return (
    <ul className={styles.Candidates}>
      {candies.map(i => {
        return <li key={i.name}>
          <figure>
            <img src={i.image}/>
          </figure>
          <h2>{i.name}</h2>
        </li>;
      })}
    </ul>
  );
};

Candidates.propTypes = {
  candies: PropTypes.array.isRequired
};

export default Candidates;
