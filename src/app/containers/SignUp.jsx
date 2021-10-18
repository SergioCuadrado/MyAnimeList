import React from 'react';

import '../assets/styles/containers/Sign.css';

const SignUp = () => {
  return (
    <form className="formSignup" action="/signup" method="POST">
      <div>
        <div className="formSignup__title-row">
          <h3>Create an account</h3>
        </div>

        <div className="formSignup__body">
          <div className="formSignup__row">
            <label>
              <span>Full Name</span>
              <input type="text" name="fullname" placeholder="Full Name" autoFocus />
            </label>
          </div>

          <div className="formSignup__row">
            <label>
              <span>Username</span>
              <input type="text" name="username" placeholder="Username" />
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

export default SignUp;

/* 
    <div className="formSignup">
      <div class="formSignup__header">
        <h3>SignUp</h3>
      </div>
      <div class="formSignup__body">
        <form action="/signup" method="POST">
          <div>
            <input type="text" name="fullname" placeholder="Full Name" class="form-control" autofocus />
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" class="form-control" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" class="form-control" />
          </div>
          <div>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </div>

*/
