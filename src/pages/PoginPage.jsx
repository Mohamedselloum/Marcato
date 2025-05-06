import React from 'react';

function LoginPage() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
