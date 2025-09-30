const ResultCard = ({ movie }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/150x220?text=No+Image"
        }
        alt={movie.Title}
        className="rounded-lg shadow-md"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/150x220?text=No+Image";
        }}
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {movie.Title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{movie.Year}</p>

      <div className="flex items-center justify-center gap-3 mt-4">
  <button className="flex items-center justify-center gap-2 w-full p-2.5 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
    <span>➕</span> Add To WatchList
  </button>

  <button className="flex items-center justify-center gap-2 w-full p-2.5 rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
    <span>✔️</span> Add To Watched
  </button>
</div>
    </div>
  );
};

export default ResultCard;
