import React from 'react';
import { baseUrl, POSTER_SIZE } from '../../helper';
import NoProfile from '../../assets/images/No-Image-Placeholder.png';

const MovieActor = ({ actors }) => {
   return (
      <section className="actors">
         <div className="actors__container container">
            <div className="actors__heading">
               <h2>Actors</h2>
            </div>
            <ul className="actors__info">
               {actors.map(actor => {
                  return (
                     <li className="actor__list" key={actor.id}>
                        <figure>
                           <img
                              src={
                                 actor.profile_path === null
                                    ? NoProfile
                                    : `${baseUrl}${POSTER_SIZE}${actor.profile_path}`
                              }
                              alt={actor.name}
                           />
                        </figure>

                        <div className="actor__list__info">
                           <div className="infos">
                              <p>{actor.original_name}</p>
                              <p>{actor.character}</p>
                           </div>
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
      </section>
   );
};

export default MovieActor;
