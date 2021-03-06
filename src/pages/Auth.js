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
    console.log(email, password);
    history.push('/');
  };

  return (
    <div className="auth">
      <form onSubmit={onSubmit}>
        <label>
                    email
          <input name='email' type="email" onChange={handleChange}/>
        </label>
        <label>
                    password
          <input name='password' type="text" onChange={handleChange}/>
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
