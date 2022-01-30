import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.js/Footer';
import Search from '../../components/SearchBar/Search';
import SearchResults from '../../components/SearchBar/SearchResults';
import useHomeFetch from '../../hooks/useHomeFetch';
import TrendingFetch from './TrendingFetch';
import requests from '../../apis/request';

const Trending = () => {
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
               <TrendingFetch
                  title="TRENDING NOW"
                  fetchUrl={requests.fetchTrending}
               />
            )}
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Trending;
