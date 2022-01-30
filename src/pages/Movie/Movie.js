import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieFetch from '../../hooks/useMovieFetch';
import MovieInfoTitle from '../../components/MovieInfo/MovieInfoTitle';
import MovieBanner from '../../components/MovieInfo/MovieBanner';
import Spinner from '../../components/Spinner/Spinner';
import MovieActor from '../../components/MovieInfo/MovieActor';
import MovieBar from '../../components/MovieInfo/MovieBar';
import NotFound from '../NotFound/NotFound';

const Movie = () => {
   const { movieId } = useParams();
   const { state: movie, isLoading, error } = useMovieFetch(movieId);

   if (error) return <NotFound />;

   if (isLoading) return <Spinner />;

   return (
      <React.Fragment>
         <MovieBanner background={movie.backdrop_path} />
         <main>
            <MovieInfoTitle
               title={movie.title}
               poster={movie.poster_path}
               overview={movie.overview}
               average={movie.vote_average}
               genres={movie.genres}
               tagline={movie.tagline}
               director={
                  movie.director.length === 0
                     ? null
                     : movie.director[0].original_name
               }
            >
               <MovieBar
                  time={movie.runtime}
                  budget={movie.budget}
                  revenue={movie.revenue}
               />
            </MovieInfoTitle>

            <MovieActor actors={movie.actors} />
         </main>
      </React.Fragment>
   );
};

export default Movie;
