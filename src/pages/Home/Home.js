import React from 'react';
import request from '../../apis/request';
import Header from '../../components/Header/Header';
import Search from '../../components/SearchBar/Search';
import Row from '../../components/Row/Row';
import useHomeFetch from '../../hooks/useHomeFetch';
import SearchResults from '../../components/SearchBar/SearchResults';
import Footer from '../../components/Footer.js/Footer';

const Home = () => {
   const {
      onHandleSubmit,
      searchMovie,
      searchTerm,
      setSearchTerm,
      isSearching,
      error,
   } = useHomeFetch();

   if (error) return <div>Something went wrong</div>;

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
               <React.Fragment>
                  <Row
                     href="trending"
                     title="TRENDING NOW"
                     fetchUrl={request.fetchTrending}
                  />
                  <Row
                     href="toprated"
                     title="TOP RATED"
                     fetchUrl={request.fetchTopRated}
                  />
                  <Row
                     href="action"
                     title="ACTION MOVIES"
                     fetchUrl={request.fetchActionMovies}
                  />
                  <Row
                     href="comedy"
                     title="COMEDY MOVIES"
                     fetchUrl={request.fetchComedyMovies}
                  />
                  <Row
                     href="horror"
                     title="HORROW MOVIES"
                     fetchUrl={request.fetchHorrorMovies}
                  />
                  <Row
                     href="romance"
                     title="ROMANCE MOVIES"
                     fetchUrl={request.fetchRomanceMovies}
                  />
                  <Row
                     href="documentaries"
                     title="DOCUMENTARIES"
                     fetchUrl={request.fetchDocumentaries}
                  />
               </React.Fragment>
            )}
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Home;

/*
   
*/
