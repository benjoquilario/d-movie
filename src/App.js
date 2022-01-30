import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TopRated from './pages/TopRated/TopRated';
import Trending from './pages/Trending/Trending';
import Action from './pages/Genres/Action/Action';
import Comedy from './pages/Genres/Comedy/Comedy';
import Horror from './pages/Genres/Horror/Horror';
import Romance from './pages/Genres/Romance/Romance';
import Documentaries from './pages/Genres/Documentaries/Documentaries';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/trending" element={<Trending />} />
               <Route path="/toprated" element={<TopRated />} />
               <Route path="/action" element={<Action />} />
               <Route path="/comedy" element={<Comedy />} />
               <Route path="/horror" element={<Horror />} />
               <Route path="/romance" element={<Romance />} />
               <Route path="/documentaries" element={<Documentaries />} />
               <Route path="/:movieId" element={<Movie />} />
               <Route path="/*" element={<NotFound />} />
            </Routes>
         </Router>
      </div>
   );
};

export default App;
