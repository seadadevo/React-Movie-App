import React from 'react';
import { useMovieContext } from './context/GlobalContext';
import MovieCard from './MovieCard';

const WatchList = () => {
  const movieContext = useMovieContext();
  const watchlistCount = movieContext.Watchlist.length;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto pt-10 px-4">
       
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-blue-950 font-bold text-3xl">My WatchList</h1>
          <span className="bg-green-600 rounded-full px-4 py-2 text-white font-semibold shadow">
            {watchlistCount} {watchlistCount === 1 ? 'movie' : 'movies'}
          </span>
        </div>

       {movieContext.Watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {movieContext.Watchlist.map((movie) => (
            <MovieCard key = {movie.imdbID} movie ={movie} type = "watchlist"/>
          ))}
        </div>

       ): 
       <h2 className='text-red-500 font-semibold text-3xl text-center'>No Movies In Your List</h2>
       }
      </div>
    </div>
  );
};

export default WatchList;
