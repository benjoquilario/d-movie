import React from 'react';

import Header from '../../../components/Header/Header';
import Search from '../../../components/SearchBar/Search';
import SearchResults from '../../../components/SearchBar/SearchResults';
import useHomeFetch from '../../../hooks/useHomeFetch';
import HorrorFetch from './HorrorFetch';
import requests from '../../../apis/request';
import Footer from '../../../components/Footer.js/Footer';

const Horror = () => {
   const {
      onHandleSubmit,
      searchMovie,
      searchTerm,
      setSearchTerm,
      isSearching,
   } = useHomeFetch();

   return (
      <React.Fragment>
         <Header />
         <main>
            <Search
               onHandleSubmit={onHandleSubmit}
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
            />
            {isSearching ? (
               <SearchResults searchMovie={searchMovie} />
            ) : (
               <HorrorFetch
                  title="HORROR MOVIES"
                  fetchUrl={requests.fetchHorrorMovies}
               />
            )}
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Horror;
