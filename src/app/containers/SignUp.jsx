import React from 'react';

const SignUp = () => {
  return (
    <div class="container p-4 text-white">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card text-center cardBlack">
            <div class="card-header">
              <h3>SignUp</h3>
            </div>
            <div class="card-body">
              <form action="/signup" method="POST">
                <div class="form-group">
                  <input type="text" name="fullname" placeholder="Full Name" class="form-control" autofocus />
                </div>
                <div class="form-group">
                  <input type="text" name="username" placeholder="Username" class="form-control" />
                </div>
                <div class="form-group">
                  <input type="password" name="password" placeholder="Password" class="form-control" />
                </div>
                <div class="form-group">
                  <button class="btn btn-success btn-block">SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
