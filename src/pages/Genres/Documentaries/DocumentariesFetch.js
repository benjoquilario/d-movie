import React, { useState, useEffect } from 'react';

import { baseUrl, POSTER_SIZE, initialState } from '../../../helper';
import { Link } from 'react-router-dom';
import requests from '../../../apis/request';
import Skeleton from '../../../components/Skeleton/Skeleton';

const DocumentariesFetch = ({ title, fetchUrl }) => {
   const [documentaries, setDocumentaries] = useState(initialState);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingMore, setIsLoadingMore] = useState(false);

   useEffect(() => {
      setIsLoading(i => !i);
      requests.fetchURL(fetchUrl, setDocumentaries, 1);

      const timerId = setTimeout(() => setIsLoading(false));

      return () => clearTimeout(timerId);
   }, [fetchUrl]);

   useEffect(() => {
      if (!isLoadingMore) return;

      requests.fetchURL(fetchUrl, setDocumentaries, documentaries.page + 1);

      setIsLoadingMore(false);
   }, [fetchUrl, isLoadingMore, documentaries.page]);

   return (
      <section className="row p-2">
         <div className="row__container container">
            <div className="row__back">
               <Link to="/" className="btn btn--back">
                  <svg
                     id="Layer_1"
                     data-name="Layer 1"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 122.88 108.06"
                  >
                     <title>back-arrow</title>
                     <path
                        fill="#fff"
                        d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z"
                     />
                  </svg>
                  Back to Home
               </Link>
            </div>
            <div className="row__heading">
               <h2 className="row__title">{title}</h2>
            </div>
            <div className="row__poster">
               {documentaries.result.map(
                  ({ id, poster_path, title, name }, index) => {
                     return (
                        <div className="row__data" key={index}>
                           <Link to={`/${id}`} className="row__data__link">
                              <figure>
                                 <img
                                    src={`${baseUrl}${POSTER_SIZE}${poster_path}`}
                                    alt={title}
                                 />
                              </figure>
                           </Link>
                           <h3 className="row__data__title">
                              {title ? title : name}
                           </h3>
                           <div className="row__data__left"></div>
                        </div>
                     );
                  }
               )}
               {!documentaries.result ||
                  (Array.isArray(documentaries.result) &&
                     documentaries.result.length === 0 &&
                     Array.from(Array(20), (_, i) => <Skeleton key={i} />))}
            </div>
            {documentaries.page < documentaries.total_pages && !isLoading && (
               <button
                  className="btn btn--more"
                  onClick={() => setIsLoadingMore(true)}
               >
                  Load More
               </button>
            )}
         </div>
      </section>
   );
};

export default DocumentariesFetch;
