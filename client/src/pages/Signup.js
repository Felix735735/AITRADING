import React from 'react';

const Signup = () => {
  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;