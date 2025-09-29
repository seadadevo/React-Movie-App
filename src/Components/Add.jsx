import { useEffect, useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const urlApi = `https://www.omdbapi.com/?s=${search}&apikey=29f82497`;

  useEffect(() => {
    axios
      .get(urlApi)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Input */}
          <div className="w-full sm:w-[500px] mb-8">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl p-3 text-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
              type="text"
              placeholder="🔍 Search for a movie..."
            />
          </div>

          {/*  Results */}
          {movies.length > 0 && (
            <ul className="results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
              {movies.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow duration-200"
                >
                 <ResultCard movie = {movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
