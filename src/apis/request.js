import axios from '../apis/axios';

const API_KEY = 'fe79a58b69fb8d843d116e2953d8de94';

const requests = {
   fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

   fetchURL: async (fetchUrl, setUrl, p) => {
      const request = await axios.get(fetchUrl, {
         params: {
            page: p,
         },
      });
      const { data } = request;
      setUrl(prev => ({
         ...data,
         result: p > 1 ? [...prev.result, ...data.results] : [...data.results],
      }));
      return request;
   },

   fetchMovie: async movieId => {
      const request = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
      return request;
   },

   fetchCredit: async movieId => {
      const request = await axios.get(
         `/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return request;
   },
};

export default requests;
