import React from 'react';

const Header = () => {
   return (
      <header className="header">
         <div className="header__container container">
            <a href="." className="header__logo">
               <span>D</span>-MOVIE
            </a>
            <div className="header__cta">
               <a href="/" className="header__cta__login">
                  Login
               </a>
               <a href="/" className="header__cta__sign">
                  Sign Up
               </a>
            </div>
         </div>
      </header>
   );
};

export default Header;
