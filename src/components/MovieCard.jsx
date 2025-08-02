export default function MovieCard({moviePoster, movieTitle, movieYear, movieRating}) {
    
    return (
      <div className="movie-card">
        <img
          src={moviePoster}
          alt={`${movieTitle} Poster`}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3>{movieTitle}</h3>
          <span>{movieYear}</span>
        </div>
        <div className="movie-rating-wrapper">
          <span>{movieRating}</span>
        </div>
      </div>
    );
}