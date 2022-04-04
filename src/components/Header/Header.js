import React, { useEffect, useState } from 'react';

const Header = () => {
   const [mode, setMode] = useState(true);

   const onHandleChange = () => setMode(prev => !prev);

   useEffect(() => {
      if (mode) {
         document.body.setAttribute('data-theme', 'light');
      } else {
         document.body.setAttribute('data-theme', 'dark');
      }
   }, [mode]);

   return (
      <header className="header">
         <div className="header__container container">
            <a href="." className="header__logo">
               <span>D</span>-MOVIE
            </a>
            <div className="header__cta">
               <ul className="header__cta">
                  <li>
                     <a href=".">Movie</a>
                  </li>
                  <li>
                     <a href=".">TV Shows</a>
                  </li>
               </ul>
            </div>
            <div className="header__theme">
               <button
                  className="btn switch"
                  onClick={onHandleChange}
                  data-mode={mode ? 'light' : 'dark'}
               >
                  <span className="slider round"></span>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
