import React from 'react';

const Auth = () => {

  return (
    <div className="auth">
      <form>
        <label>
                    email
          <input type="email"></input>
        </label>
        <label>
                    password
          <input type="text"></input>
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Auth;
