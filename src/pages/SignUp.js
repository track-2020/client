import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './signup.scss';

const issues = [
  'babies',
  'guns',
  'ice'
];

const SignUp = ({ history }) => {
  const [issue1, setIssue1] = useState(null);
  const [issue2, setIssue2] = useState(null);
  const [issue3, setIssue3] = useState(null);
  const [issue4, setIssue4] = useState(null);
  const [issue5, setIssue5] = useState(null);

  const stateChanges = {
    issue1: (value) => setIssue1(value),
    issue2: (value) => setIssue2(value),
    issue3: (value) => setIssue3(value),
    issue4: (value) => setIssue4(value),
    issue5: (value) => setIssue5(value),
  };

  const handleChange = ({ target }) => {
    stateChanges[target.name](target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!issue1 || !issue2 || !issue3 || !issue4 || !issue5) alert('please select all 5');
    else history.push('/');
  };

  return (
    <div className={styles.SignUp}>
      <header>
        <h1>your issues</h1>
      </header>
        
      <form onSubmit={onSubmit}>

        <label>issue 1
          <select name='issue1' onChange={handleChange} required>
            <option disabled selected value> -- select an option -- </option>
            {issues.map(i => <option key={'issue1' + i} value={i}>{i}</option>)}
          </select>
        </label>

        <label>issue 2
          <select name='issue2' onChange={handleChange} required>
            <option disabled selected value> -- select an option -- </option>
            {issues.map(i => <option key={'issue2' + i} value={i}>{i}</option>)}
          </select>
        </label>

        <label>issue 3
          <select name='issue3' onChange={handleChange} required>
            <option disabled selected value> -- select an option -- </option>
            {issues.map(i => <option key={'issue3' + i} value={i}>{i}</option>)}
          </select>
        </label>

        <label>issue 4
          <select name='issue4' onChange={handleChange} required>
            <option disabled selected value> -- select an option -- </option>
            {issues.map(i => <option key={'issue4' + i} value={i}>{i}</option>)}
          </select>
        </label>

        <label>issue 5
          <select name='issue5' onChange={handleChange} required>
            <option disabled selected value> -- select an option -- </option>
            {issues.map(i => <option key={'issue5' + i} value={i}>{i}</option>)}
          </select>
        </label>

        <button>Finish</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired
};

export default SignUp;

