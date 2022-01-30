import React from 'react';

import Header from '../../../components/Header/Header';
import Search from '../../../components/SearchBar/Search';
import SearchResults from '../../../components/SearchBar/SearchResults';
import useHomeFetch from '../../../hooks/useHomeFetch';
import DocumentariesFetch from './DocumentariesFetch';
import requests from '../../../apis/request';
import Footer from '../../../components/Footer.js/Footer';

const Documentaries = () => {
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
               <DocumentariesFetch
                  title="DOCUMENTARIES MOVIES"
                  fetchUrl={requests.fetchDocumentaries}
               />
            )}
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Documentaries;
