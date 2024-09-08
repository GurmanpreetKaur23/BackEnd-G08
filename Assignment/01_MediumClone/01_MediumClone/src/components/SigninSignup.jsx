import React, { useState } from 'react';

const SigninSignup = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        
        <form className="auth-form">
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          
          <button type="submit" className="auth-btn">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="toggle-form">
          <p>{isSignIn ? "Don't have an account?" : "Already have an account?"}  
            <span onClick={() => setIsSignIn(!isSignIn)}>
              {isSignIn ? ' Sign Up' : ' Sign In'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
