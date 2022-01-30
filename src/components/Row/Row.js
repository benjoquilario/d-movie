import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl, POSTER_SIZE } from '../../helper';
import axios from '../../apis/axios';
import Skeleton from '../Skeleton/Skeleton';

const Row = ({ title, fetchUrl, href, isHome }) => {
   const [movies, setMovies] = useState(null);

   useEffect(() => {
      const timer = setTimeout(() => {
         const fetchMovie = async () => {
            const request = await axios.get(fetchUrl);
            const getMovies = request.data.results.slice(0, 6);

            setMovies(getMovies);
            return request;
         };
         fetchMovie();
      }, 2000);

      return () => clearTimeout(timer);
   }, [fetchUrl]);

   return (
      <section className="row p-2">
         <div className="row__container container">
            <div className="row__heading">
               <h2 className="row__title">{title}</h2>
               <Link to={`/${href}`} className="row__link">
                  View All
               </Link>
            </div>
            <div className={`${isHome ? 'row__poster home' : 'row__poster'}`}>
               {!movies && [1, 2, 3, 4, 5, 6].map(n => <Skeleton key={n} />)}

               {movies &&
                  movies.map(movie => {
                     return (
                        <div className="row__data" key={movie.id}>
                           <Link
                              to={`/${movie.id}`}
                              className="row__data__link"
                           >
                              <figure>
                                 <img
                                    src={`${baseUrl}${POSTER_SIZE}${movie.poster_path}`}
                                    alt={movie.title}
                                 />
                                 <span className="ripples"></span>
                              </figure>
                           </Link>
                           <h3 className="row__data__title">
                              {movie.title}
                              <span className="ripples__title"></span>
                           </h3>
                        </div>
                     );
                  })}
            </div>
         </div>
      </section>
   );
};

export default Row;
