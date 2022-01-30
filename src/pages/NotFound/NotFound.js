import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className="notfound">
         <div className="notfound__text">
            <h1>404</h1>
            <p>PAGE NOT FOUND</p>
            <Link to="/">Back to Home</Link>
         </div>
      </div>
   );
};

export default NotFound;
