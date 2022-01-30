import React from 'react';

import Header from '../../../components/Header/Header';
import Search from '../../../components/SearchBar/Search';
import SearchResults from '../../../components/SearchBar/SearchResults';
import useHomeFetch from '../../../hooks/useHomeFetch';
import RomanceFetch from './RomanceFetch';
import requests from '../../../apis/request';
import Footer from '../../../components/Footer.js/Footer';

const Romance = () => {
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
               <RomanceFetch
                  title="ROMANCE MOVIES"
                  fetchUrl={requests.fetchRomanceMovies}
               />
            )}
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Romance;
