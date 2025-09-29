const ResultCard = ({ movie }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/150x220?text=No+Image"}
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
    </div>
  );
};

export default ResultCard;
