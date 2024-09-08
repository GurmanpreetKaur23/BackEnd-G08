import React, { useState } from 'react';
import SigninSignup from './SigninSignup'; 

const Navigation = () => {
  const [showAuth, setShowAuth] = useState(false); 

  const handleAuthToggle = () => {
    setShowAuth(!showAuth); 
  };

  return (
    <>
      {showAuth ? (
        <SigninSignup />
      ) : (
        <nav>
          <div>
            <img src="https://galtzhayek.com/wp-content/uploads/2021/05/1280px-Medium_logo_Wordmark_Black.svg.png" alt="logo" height="140px" width="190px" />
          </div>

          <ul>
            <li>
              <a href="https://medium.com/about">Our story</a>
            </li>
            <li>
              <a href="https://medium.com/membership">Membership</a>
            </li>
            <li>
              <a href="https://medium.com/">Write</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>

          <button onClick={handleAuthToggle}>Get Started</button> 
        </nav>
      )}
    </>
  );
};

export default Navigation;
