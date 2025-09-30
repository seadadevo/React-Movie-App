import React from "react";
import MovieControl from "./MovieControl";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-col items-center p-4 relative overflow-hidden transform hover:scale-105 transition-transform duration-200 group">
      <img
        className="object-cover w-32 h-44 rounded-md mb-3"
        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/150x220?text=No+Image"}
        alt={movie.Title}
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">{movie.Title}</h3>
      <span className="text-sm text-gray-500 mt-1">{movie.Year}</span>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <MovieControl movie={movie} type={type} />
      </div>
    </div>
  );
};

export default MovieCard;
