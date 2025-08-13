import StarRating from "../StarRating/StarRating";

export default function MovieCard({moviePoster, movieTitle, movieYear, movieRating}) {
    
    return (
      <div className="card">
        <img
          src={moviePoster}
          alt={`${movieTitle} Poster`}
          className="card-poster"
        />
        <div className="card-info">
          <h3 className="h6">{movieTitle}</h3>
          <span className="p">{movieYear}</span>
        </div>
        <div className="card-rating-wrapper">
          <StarRating rating={movieRating} />
        </div>
      </div>
    );
}