import { useEffect, useState } from 'react';
import requests from '../apis/request';

const UseMovieFetch = movieId => {
   const [state, setState] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchMovie = async () => {
         try {
            setError(false);
            setIsLoading(true);

            const movie = await requests.fetchMovie(movieId);
            const credits = await requests.fetchCredit(movieId);

            if (
               credits.data.crew.length === 0 ||
               credits.data.cast.length === 0
            )
               return;

            const director = credits.data.crew.filter(
               member => member.job === 'Director'
            );

            setState({
               ...movie.data,
               actors: credits.data.cast,
               director,
            });

            setIsLoading(false);
         } catch (err) {
            console.error(err);
            setError(true);
         }
      };

      fetchMovie();
   }, [movieId]);

   return { state, error, isLoading };
};

export default UseMovieFetch;
