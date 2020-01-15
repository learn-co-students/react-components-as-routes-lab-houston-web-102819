import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movieObject => 
          <div>
            <h4>{movieObject.title}</h4>
            <p>{movieObject.time}</p>
            <ul>
              {movieObject.genres.map(genre => 
                <li>{genre}</li>
              )}
            </ul>
          </div>
        )}
    </div>
  );
};

export default Movies;
