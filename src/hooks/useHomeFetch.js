import { useState, useEffect } from 'react';
import axios from '../apis/axios';
import requests from '../apis/request';

const useHomeFetch = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
   const [isSearching, setIsSearching] = useState(false);
   const [searchMovie, setSearchMovie] = useState([]);
   const [error, setError] = useState(false);

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedTerm(searchTerm);
      }, 1000);

      return () => {
         clearTimeout(timerId);
      };
   }, [searchTerm]);

   useEffect(() => {
      const timer = setTimeout(() => {
         const fetchSearchMovies = async () => {
            try {
               setError(false);
               setIsSearching(true);

               const request = await axios.get(requests.fetchSearch, {
                  params: {
                     query: debouncedTerm,
                  },
               });

               const { data } = request;

               setSearchMovie(data.results);

               setIsSearching(false);
            } catch (err) {
               console.error(err);
               setError(true);
            }
         };

         if (!debouncedTerm) return;

         fetchSearchMovies();
      }, 1000);

      return () => clearTimeout(timer);
   }, [debouncedTerm]);

   const onHandleSubmit = event => {
      event.preventDefault();
   };

   return {
      onHandleSubmit,
      searchMovie,
      searchTerm,
      setSearchTerm,
      isSearching,
      error,
   };
};

export default useHomeFetch;
