import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import Button from "./Button";
import * as actions from "./context/actionTypes";
const MovieControl = ({ movie, type }) => {
  const movieContext = useMovieContext();
  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg p-2 shadow-lg">
      {type === "watchlist" && (
        <>
          <Button
            onClick={() =>
              movieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            content={<i className="fa-solid fa-eye" />}
            className="bg-green-500 hover:bg-green-600"
          />
          <Button
          onClick={() =>
              movieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie, 
              })
            }
            content={<i className="fa-solid fa-trash" />}
            className="bg-red-500 hover:bg-red-600"
          />
        </>
      )}
      {type === "watched" && (
        <>
          <Button
            content={<i className="fa-solid fa-eye-slash" />}
            className="bg-blue-500 hover:bg-blue-600"
          />
          <Button
            content={<i className="fa-solid fa-trash" />}
            className="bg-red-500 hover:bg-red-600"
          />
        </>
      )}
    </div>
  );
};

export default MovieControl;
