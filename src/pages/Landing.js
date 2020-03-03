import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.scss';
import Candidates from '../components/Candidates';
import candies from '../../assets/candidates';

const Landing = () => {

  
  return (
    <div className={styles.Landing}>
      <header>
        <h1>Welcome to trackie trackie 2020</h1>
      </header>

      <section>
        <Candidates candies={candies}/>
      </section>

      <footer>
        <Link to="/summary"><h1>View Scores</h1></Link>
      </footer>
    </div>
  );
};

export default Landing;
