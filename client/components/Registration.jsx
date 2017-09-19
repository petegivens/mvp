import React from 'react';

const Registration = ({handleSubmitRegistration}) => (
  <form className="form-horizontal" onSubmit={handleSubmitRegistration}>

    <div id="legend">
      <legend className="">Register</legend>
    </div>
    <div className="control-group">
      <label className="control-label" for="name">Name</label>
      <div className="controls">
        <input type="text" id="name" name="name" placeholder="" className="input-xlarge" />
      </div>
    </div>

    <div className="control-group">
      <label className="control-label" for="email">E-mail</label>
      <div className="controls">
        <input type="text" id="email" name="email" placeholder="" className="input-xlarge" />
      </div>
    </div>

    <div className="control-group">
      <label className="control-label" for="password">Password</label>
      <div className="controls">
        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
      </div>
    </div>

    <div className="control-group">
      <label className="control-label"  for="password_confirm">Password (Confirm)</label>
      <div className="controls">
        <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
      </div>
    </div>

    <div className="control-group">
      <div className="controls">
        <button className="btn btn-primary">Register</button>
      </div>
    </div>

</form>
)

export default Registration;
