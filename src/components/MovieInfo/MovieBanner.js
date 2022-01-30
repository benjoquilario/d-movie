import React from 'react';
import { BACKDROP_SIZE, baseUrl } from '../../helper';

const MovieBanner = ({ background }) => {
   return (
      <header className="banner">
         <div
            className="banner__container container"
            style={{
               backgroundImage: `url(${baseUrl}${BACKDROP_SIZE}${background})`,
            }}
         >
            <div className="banner__shadow"></div>
         </div>
      </header>
   );
};

export default MovieBanner;
