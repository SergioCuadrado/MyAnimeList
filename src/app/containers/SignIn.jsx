import React from 'react';

import '../assets/styles/containers/Sign.css';

const SignIn = () => {
  return (
    <form className="formSignup" action="/signin" method="POST">
      <div>
        <div className="formSignup__title-row">
          <h3>Log In</h3>
        </div>

        <div className="formSignup__body">
          <div className="formSignup__row">
            <label>
              <span>Username</span>
              <input type="text" name="username" placeholder="Username" autoFocus />
            </label>
          </div>

          <div className="formSignup__row">
            <label>
              <span>Password</span>
              <input type="password" name="password" placeholder="Password" />
            </label>
          </div>

          <div className="formSignup__row">
            <button>Register</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
