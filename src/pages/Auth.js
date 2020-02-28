import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Auth = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const stateChanges = {
    email: (value) => setEmail(value),
    password: (value) => setPassword(value),
  };

  const handleChange = ({ target }) => {
    stateChanges[target.name](target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    verifyUser(email, password, history);
  };

  return (
    <div className="auth">
      <form onSubmit={onSubmit}>
        <header>
          <h1>Sign In / Sign Up</h1>
        </header>

        <label>email
          <input name='email' type="email" onChange={handleChange} required/>
        </label>

        <label>password
          <input name='password' type="text" onChange={handleChange} required/>
        </label>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

Auth.propTypes = {
  history: PropTypes.object.isRequired
};

export default Auth;



// check to see if user exists and password matches
// delete after sign in/signup routes have been made and implemented
const users = {
  'email@email.com': 'pass'
};

const verifyUser = (email, pass, history) => {
  if(!users[email]) history.push('/signup');
  else if(users[email] && users[email] !== pass) alert('Email and password do not match');
  else history.push('/');
};
