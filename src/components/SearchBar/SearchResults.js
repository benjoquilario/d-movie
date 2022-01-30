import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl, POSTER_SIZE } from '../../helper';
import NoImage from '../../assets/images/no_image.jpg';
import Skeleton from '../Skeleton/Skeleton';

const SearchResults = ({ searchMovie }) => {
   return (
      <section className="row p-2">
         <div className="row__container container">
            <div className="row__poster">
               {searchMovie.map(movie => {
                  return (
                     <div className="row__data" key={movie.id}>
                        <Link to={`/${movie.id}`} className="row__data__link">
                           <figure>
                              <img
                                 src={
                                    movie.poster_path
                                       ? `${baseUrl}${POSTER_SIZE}${movie.poster_path}`
                                       : NoImage
                                 }
                                 alt={movie.title}
                              />
                           </figure>
                        </Link>
                        <h3 className="row__data__title">{movie.title}</h3>
                        <div className="row__data__left"></div>
                     </div>
                  );
               })}

               {!searchMovie ||
                  (Array.isArray(searchMovie) &&
                     searchMovie.length === 0 &&
                     Array.from(Array(20), (_, i) => <Skeleton key={i} />))}
            </div>
         </div>
      </section>
   );
};

export default SearchResults;
