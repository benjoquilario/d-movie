import React from 'react';

import Header from '../../components/Header/Header';
import Search from '../../components/SearchBar/Search';
import SearchResults from '../../components/SearchBar/SearchResults';
import useHomeFetch from '../../hooks/useHomeFetch';
import TopRatedFetch from './TopRatedFetch';
import requests from '../../apis/request';

const TopRated = () => {
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
               <TopRatedFetch
                  title="TOP RATED MOVIES"
                  fetchUrl={requests.fetchTopRated}
               />
            )}
         </main>
      </React.Fragment>
   );
};

export default TopRated;
