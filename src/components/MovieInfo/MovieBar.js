import React from 'react';
import { convertMoney, calcTime } from '../../helper';

const MovieBar = ({ time, budget, revenue }) => {
   return (
      <div className="bars">
         <div className="bars__container container">
            <div className="bars__column">
               <p className="bars__column__text">
                  Running time: {calcTime(time)}
               </p>
            </div>
            <div className="bars__column">
               <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="bars__column">
               <p>Revenue: {convertMoney(revenue)}</p>
            </div>
         </div>
      </div>
   );
};

export default MovieBar;
