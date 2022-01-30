import React from 'react';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer.js/Footer';
import Search from '../../../components/SearchBar/Search';
import SearchResults from '../../../components/SearchBar/SearchResults';
import useHomeFetch from '../../../hooks/useHomeFetch';
import ActionFetch from './ActionFetch';
import requests from '../../../apis/request';

const Action = () => {
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
               <ActionFetch
                  title="ACTION MOVIES"
                  fetchUrl={requests.fetchActionMovies}
               />
            )}
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Action;
