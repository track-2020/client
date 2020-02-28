import React from 'react';
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
          <h1>Home</h1>
      </footer>
    </div>
  );
};

export default Landing;
