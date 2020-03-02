import React from 'react';
import candies from '../../assets/candidates';
import styles from './Summary.scss';

const Summary = () => {

  const sortedCandidates = candies.map(candidate => {
    return <li key={candidate.name}>
      <img width="50px" src={candidate.image} alt={candidate.name} />
      <h3>{candidate.name}</h3>
      <h4>Total: 14</h4>
    </li>;
  });

  return (
    <div className={styles.Summary}>
      <div className="user-row">
        <img src="https://en.meming.world/images/en/thumb/a/af/Surprised_Pikachu_3D.jpg/300px-Surprised_Pikachu_3D.jpg" alt="pikachu"></img>
        <h1>Pika Pikachu</h1>
      </div>
      <div className="score-sort-row">
        <h2>Score by: Total</h2>
        <select name="issues">
          <option value="issue1">Environment</option>
          <option value="issue2">LGBTQ+</option>
          <option value="issue3">Voting Rights</option>
          <option value="issue4">Electability</option>
          <option value="issue5">Gender Equality</option>
        </select>
      </div>
      <ul>
        {sortedCandidates}
      </ul>
    </div>
  );
};

export default Summary;
