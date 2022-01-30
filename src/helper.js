const baseUrl = 'https://image.tmdb.org/t/p/';

const BACKDROP_SIZE = 'w1280';

const POSTER_SIZE = 'w780';

const initialState = {
   page: 0,
   result: [],
   total_pages: 0,
   total_results: 0,
};

const calcTime = time => {
   const hours = Math.floor(time / 60);
   const mins = time % 60;
   return `${hours}h ${mins}m`;
};

const convertMoney = money => {
   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
   });
   return formatter.format(money);
};

export {
   baseUrl,
   BACKDROP_SIZE,
   POSTER_SIZE,
   initialState,
   calcTime,
   convertMoney,
};
