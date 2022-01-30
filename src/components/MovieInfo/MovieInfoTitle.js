import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl, POSTER_SIZE } from '../../helper';
import NoImage from '../../assets/images/no_image.jpg';

const MovieInfoTitle = ({
   genres,
   title,
   poster,
   overview,
   average,
   tagline,
   director,
   children,
}) => {
   return (
      <section className="info">
         <div className="info__container container">
            <div className="info__cover">
               <div className="info__cover__img">
                  <div className="info__cover__cover">
                     <img
                        src={
                           poster
                              ? `${baseUrl}${POSTER_SIZE}${poster}`
                              : NoImage
                        }
                        alt={title}
                     />
                  </div>
                  <div className="info__cover__list">
                     <button className="btn btn--list">Add to List</button>
                  </div>
               </div>
            </div>
            <div className="info__wrapper">
               <div className="info__back">
                  <Link to="/" className="btn btn--back">
                     <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 108.06"
                     >
                        <title>back-arrow</title>
                        <path
                           fill="#fff"
                           d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z"
                        />
                     </svg>
                     Back to Home
                  </Link>
               </div>
               <div>
                  <h1 className="info__wrapper__title">{title}</h1>
                  <div className="info__wrapper__genres">
                     {genres.map((genre, index) => {
                        return <span key={index}>{genre.name}</span>;
                     })}
                  </div>
               </div>
               <div className="info__wrapper__average">
                  <span>{average}</span>
                  <h4 className="rating">RATING</h4>
               </div>
               <div className="info__overview">
                  <h2 className="tagline">{tagline}</h2>
                  <h3 className="info__wrapper__tagline">Overview</h3>
                  <p className="info__wrapper__overview">{overview}</p>
                  <div className="info__wrapper__director">
                     <h4>
                        {director}
                        <span>Creator</span>
                     </h4>
                  </div>
               </div>
               {children}
            </div>
         </div>
      </section>
   );
};

export default MovieInfoTitle;
