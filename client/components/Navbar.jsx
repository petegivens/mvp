import React from 'react';

const Navbar = ({user, handleRegister, handleSignout}) => {
  if(!user.isLoggedIn) {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="#"><img id="brand" src="./img/brand.png" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form id="signin" className="navbar-form navbar-right" role="form">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="email" type="email" className="form-control" name="email" value="" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
              <input id="password" type="password" className="form-control" name="password" value="" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
          </div>
        </nav>
        <a href="#" id="register" onClick={handleRegister}>Register for an account</a>
      </div>
    )
  } else {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img id="brand" src="./img/brand.png" /></a>
          </div>
          <div className="welcome" id="welcome">
            Welcome, {user.name}
            <button className="btn btn-danger btn-signout" onClick={handleSignout}>Sign out</button>
          </div>
        </div>
      </nav>
    )
  };
};

export default Navbar;
